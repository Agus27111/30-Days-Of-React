// Exercises: Level 1
// Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullName("Agus", "Setiawan"));
// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  return sum;
}
console.log(addNumbers(1, 2));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
let π = 3.14159265358979;
function calculates_areaOfCircle(r) {
  let area = π * r * r;
  return area;
}
console.log(calculates_areaOfCircle(2));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit(oC) {
  let oF = (oC * 9) / 5 + 32;
  return oF;
}
console.log(convertCelciusToFahrenheit(0));

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
function calculateBMI(weight, height) {
  let bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

console.log(calculateBMI(70, 1.75)); // Normal weight
console.log(calculateBMI(50, 1.65)); // Underweight
console.log(calculateBMI(90, 1.8)); // Overweight
console.log(calculateBMI(100, 1.7)); // Obese
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
  if (month === "September" || month === "October" || month === "November") {
    return "Autumn";
  } else if (
    month === "December" ||
    month === "January" ||
    month === "February"
  ) {
    return "Winter";
  } else if (month === "March" || month === "April" || month === "May") {
    return "Spring";
  } else {
    return "Summer";
  }
}
console.log(checkSeason("May"));
