var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

planets.forEach(function(planet, index) {
	el.innerHTML += planet + " ";
});

// Use the map method to create a new array where the first letter of each planet is capitalized
var newArray = planets.map(function(planet) {
	return planet.charAt(0).toUpperCase() + planet.substr(1, planet.length);
})
console.log(newArray);
// Use the filter method to create a new array that contains planets with the letter 'e'
var re = /e+/gi;
newArray = newArray.filter(function(planet) {
	if(re.test(planet)) { return planet;}
});
console.log(newArray);

// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var newString = words.reduce(function(string, word) {
	return string += " " + word;
});

console.log(newString);