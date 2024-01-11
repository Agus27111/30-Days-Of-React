// xercise: Level 3
// The following is an array of 10 students ages: js
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// - Sort the array and find the min and max age
console.log(ages);
let sortedAges = ages.sort((a, b) => a - b); //asscending sort
console.log(sortedAges);
let minAge = Math.min(...sortedAges); //spread operator
let maxAge = Math.max(...sortedAges);
console.log(minAge, maxAge);

// - Find the median age(one middle item or two middle items divided by two)
let midIndex = Math.floor(sortedAges.length / 2);
let medianAge;
if (sortedAges.length % 2 === 0) {
  medianAge = (sortedAges[midIndex - 1] + sortedAges[midIndex]) / 2;
} else {
  medianAge = sortedAges[midIndex];
}
console.log("Median Age: ", medianAge);

// - Find the average age(all items divided by number of items)
let sum = ages.reduce((a, b) => a + b, 0);
let averageAge = sum / ages.length;
console.log("Average Age: ", averageAge);
// - Find the range of the ages(max minus min)
let range = maxAge - minAge;
console.log("Range: ", range);
// - Compare the value of (min - average) and (max - average), use abs() method (we dont care the result is positif or negatif result)
let minMinusAverage = Math.abs(minAge - averageAge);
let maxMinusAverage = Math.abs(maxAge - averageAge);
console.log(minMinusAverage, maxMinusAverage);

// 1.Slice the first ten countries from the countries array
const countries = require("./countries"); // Importing countries array
console.log("countries :" + countries);

const slicedCountries = countries.slice(0, 10);
console.log(slicedCountries);

// Find the middle country(ies) in the countries array
let middleCountry;
if (slicedCountries.length % 2 === 0) {
  middleCountry = slicedCountries.slice(
    slicedCountries.length / 2 - 1,
    slicedCountries.length / 2 + 1
  );

  console.log(middleCountry);
}

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let firstHalf = countries.slice(0, countries.length / 2);
console.log(firstHalf);

let secondHalf = countries.slice(countries.length / 2);
console.log(secondHalf);
