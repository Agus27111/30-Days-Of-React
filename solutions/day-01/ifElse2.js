// Exercises: Level 2
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
function studentsScore(score) {
  switch (score) {
    case score >= 80 || score <= 100:
      console.log("A");
      break;
    case score >= 70 || score <= 79:
      console.log("B");
      break;
    case score >= 60 || score <= 69:
      console.log("C");
      break;
    case score >= 50 || score <= 59:
      console.log("D");
      break;
    case score >= 0 || score <= 49:
      console.log("E");
      break;
    default:
      console.log("404");
  }
}

studentsScore(87);

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
const whatSeason = prompt("What month now: ");
const month = whatSeason.toLowerCase();

console.log(month);
if (month === "september" || month === "october" || month === "november") {
  // September, October or November, the season is Autumn.
  console.log("The season is Autumn");
} else if (
  month === "december" ||
  month === "january" ||
  month === "february"
) {
  // December, January or February, the season is Winter.
  console.log("The season is Winter");
} else if (month === "march" || month === "april" || month === "may") {
  // March, April or May, the season is Spring
  console.log("The season is Spring");
} else {
  // June, July or August, the season is Summer
  console.log("The season is Summer");
}

// Check if a day is weekend day or a working day. Your script will take day as an input.
const day = prompt("What is the day today?");
const lowercaseDay = day.toLowerCase();

if (lowercaseDay === "saturday" || lowercaseDay === "sunday") {
  console.log(`${day} is a weekend.`);
} else {
  console.log(`${day} is a working day.`);
}
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
