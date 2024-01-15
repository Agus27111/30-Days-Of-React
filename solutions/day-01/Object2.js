// Exercises: Level 2

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
// Find the person who has many skills in the users object.
let maxSkills = 0;
let personWithMaxSkills = "";

for (const user in users) {
  const skillsCount = users[user].skills.length;
  if (skillsCount > maxSkills) {
    maxSkills = skillsCount;
    personWithMaxSkills = user;
  }
}

console.log(
  `${personWithMaxSkills} has the most skills with ${maxSkills} skills.`
);

// Count logged in users,count users having greater than equal to 50 points from the following object.
let userLoggin = 0;
let countUsersPoints = 0;

for (const user in users) {
  if (users[user].isLoggedIn) {
    userLoggin++;
  }
  if (users[user].points >= 50) {
    countUsersPoints++;
  }
}
console.log(userLoggin);
console.log(countUsersPoints);

// Find people who are MERN stack developer from the users object
const mernStackDevelopers = [];

for (const user in users) {
  const skills = users[user].skills;
  if (
    skills.includes("MongoDB") &&
    skills.includes("Express") &&
    skills.includes("React") &&
    skills.includes("Node")
  ) {
    mernStackDevelopers.push(user);
  }
}

console.log("MERN stack developers:", mernStackDevelopers);

// Set your name in the users object without modifying the original users object

users["Agus"] = {
  email: "Agussetiawanphy3@gmail.com",
  skills: ["HTML", "CSS", "JavaScript"],
  age: 31,
  isLoggedIn: false,
  points: 30,
};

console.log(users);

// Get all keys or properties of users object
const copyPerson = JSON.parse(JSON.stringify(users));
console.log(copyPerson);

// Get all the values of users object
const getValuesOfObject = Object.values(users);
console.log(getValuesOfObject);

// Use the countries object to print a country name, capital, populations and languages.
const countries = {
  INDIA: {
    capital: "Delhi",
    population: 135,
    languages: ["Hindi", "English"],
  },
  PAKISTAN: {
    capital: "Islamabad",
    population: 210,
    languages: ["Urdu", "English"],
  },
  BRAZIL: {
    capital: "Brasilia",
    population: 210,
    languages: ["Portuguese", "English"],
  },
};
console.log("Country Name : Capital");
for (const country in countries) {
  console.log(`${country} : ${countries[country].capital}`);
  console.log(`${country} : ${countries[country].population}`);
  console.log(`${country} : ${countries[country].languages}`);
}
