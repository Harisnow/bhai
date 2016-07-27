var fs = require('fs');

var data = fs.readFileSync('Foo.csv','utf8');
var regionCountryMapper = require('./mapper.json');
var lines = data.split('\n');

var header = lines[0].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
var indexOfCountryName = header.indexOf('countries');
var indexOfProteins = header.indexOf('proteins_100g');
var indexOfFat = header.indexOf('fat_100g');
var indexOfCarbohydrates = header.indexOf('carbohydrates_100g');

var regionWiseNutrients = {};

for(var i = 1;i<lines.length;i++) {
	var line = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
	if(regionCountryMapper[line[indexOfCountryName]] != undefined) {
		if(regionWiseNutrients[regionCountryMapper[line[indexOfCountryName]]] == undefined) {
			regionWiseNutrients[regionCountryMapper[line[indexOfCountryName]]] = {};
		}
		if(regionWiseNutrients[regionCountryMapper[line[indexOfCountryName]]][header[indexOfProteins]] == undefined)
			regionWiseNutrients[regionCountryMapper[line[indexOfCountryName]]][header[indexOfProteins]] = (isNaN(parseFloat(line[indexOfProteins]))?0:parseFloat(line[indexOfProteins]));
		else
			regionWiseNutrients[regionCountryMapper[line[indexOfCountryName]]][header[indexOfProteins]] += (isNaN(parseFloat(line[indexOfProteins]))?0:parseFloat(line[indexOfProteins]));
			console.log(line[indexOfProteins]);
		if(regionWiseNutrients[regionCountryMapper[line[indexOfCountryName]]][header[indexOfCarbohydrates]] == undefined)
			regionWiseNutrients[regionCountryMapper[line[indexOfCountryName]]][header[indexOfCarbohydrates]] = isNaN(parseFloat(line[indexOfCarbohydrates]))?0:parseFloat(line[indexOfCarbohydrates]);
		else
			regionWiseNutrients[regionCountryMapper[line[indexOfCountryName]]][header[indexOfCarbohydrates]] += isNaN(parseFloat(line[indexOfCarbohydrates]))?0:parseFloat(line[indexOfCarbohydrates]);
		if(regionWiseNutrients[regionCountryMapper[line[indexOfCountryName]]][header[indexOfFat]] == undefined)
			regionWiseNutrients[regionCountryMapper[line[indexOfCountryName]]][header[indexOfFat]] = isNaN(parseFloat(line[indexOfFat]))?0:parseFloat(line[indexOfFat]);
		else
			regionWiseNutrients[regionCountryMapper[line[indexOfCountryName]]][header[indexOfFat]] += isNaN(parseFloat(line[indexOfFat]))?0:parseFloat(line[indexOfFat]);
	}
}

console.log(regionWiseNutrients);