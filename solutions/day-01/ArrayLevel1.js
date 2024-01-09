// Exercise: Level 1
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
// Declare an empty array;
const emptyAr = Array();
console.log(emptyAr);
// Declare an array with more than 5 number of elements
const fiveAr = Array(5).fill("X");
console.log(fiveAr);
// Find the length of your array
console.log(fiveAr.length);
// Get the first item, the middle item and the last item of the array
console.log(fiveAr[0]);
console.log(fiveAr[2]);
console.log(fiveAr[length - 1]);
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ["bagus", 21, true, "Solo", "yuni", 22, false, "Jkt"];
console.log(mixedDataTypes.length);
console.log(mixedDataTypes);
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
console.log(itCompanies.length);
// Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[length - 1]);
// Print out each company
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}
// Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(", "));
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

let indexOfApple = itCompanies.indexOf("apple"); // -1, if the element not found index is -1
if (indexOfApple != -1) {
  console.log("This companies does exist in the array");
} else {
  console.log("This companies does not exist in the array");
}
// Filter out companies which have more than one 'o' without the filter method
const techsWithMoreThanOneO = [];
for (let i = 0; i < itCompanies.length; i++) {
  let count = 0;
  const tech = itCompanies[i];
  for (let j = 0; j < tech.length; j++) {
    if (tech[j].toLowerCase() === "o") {
      count++;
    }
  }
  if (count > 1) {
    techsWithMoreThanOneO.push(tech);
  }
}

// Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);
// Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));
// Slice out the middle IT company or companies from the array
// Calculate the starting index for the middle elements
const startIndex = Math.floor(itCompanies.length / 2) - 1; // Adjust -1 for odd-length arrays

// Calculate the number of elements to extract for the middle
const numElements = itCompanies.length % 2 === 0 ? 2 : 1; // 2 for even-length arrays, 1 for odd

// Extract the middle elements
const middleElements = itCompanies.slice(startIndex, startIndex + numElements);
console.log(middleElements);

// Remove the first IT company from the array
console.log(itCompanies.shift());
// Remove the middle IT company or companies from the array
const removedMiddleElements = itCompanies.splice(
  startIndex,
  numElementsToRemove
);
console.log(removedMiddleElements); // The removed middle element(s)
// Remove the last IT company from the array
console.log(itCompanies.pop());
// Remove all IT companies
console.log(itCompanies.splice(0, itCompanies.length));
