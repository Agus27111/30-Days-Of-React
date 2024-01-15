// Exercises: Level 3
// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.
// Write a program which tells the number of days in a month, now consider leap year.
function daysInMonth(month, leapYear = false) {
  const monthDays = {
    january: 31,
    february: leapYear ? 29 : 28,
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november: 30,
    december: 31,
  };
  const monthLower = month.toLowerCase();
  if (monthLower in monthDays) {
    const days = monthDays[monthLower];
    return ` A ${month} has ${days} ${days === 1 ? "day" : "days"}.`;
  } else {
    return "Invalid month entered.";
  }
}
// Example usage:
const monthInput = prompt.apply("enter a month: ");
const leapYearInput =
  prompt.apply("Is it a leap year? (yes/no):").toLowerCase() === "yes";
const result = daysInMonth(monthInput, leapYearInput);
alert(result);

//   const monthLower = month.toLowerCase();
//   if (monthLower in monthDays) {
//     const days = monthDays[monthLower];
//     return `${capitalize(month)} has ${days} ${days === 1 ? "day" : "days"}.`;
//   } else {
//     return "Invalid month entered.";
//   }
// }

// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// // Example usage:
// const monthInput = prompt("Enter a month:");
// const leapYearInput =
//   prompt("Is it a leap year? (yes/no):").toLowerCase() === "yes";
// const result = daysInMonth(monthInput, leapYearInput);
// alert(result);
