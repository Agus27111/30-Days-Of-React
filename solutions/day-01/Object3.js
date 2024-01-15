// Exercises: Level 3
// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
  firstName: "Agus",
  lastName: "Setiawan",
  incomes: [2000],
  expenses: [5000],
  totalIncome: function () {
    let total = 0;
    for (let income of this.incomes) {
      total += income.amount;
    }
    return total;
  },
  totalExpense: function () {
    let total = 0;
    for (let expense of this.expenses) {
      total += expense.amount;
    }
    return total;
  },
  accountInfo: function () {
    return `Name: ${this.firstName} ${
      this.lastName
    }\nTotal Income: $${this.totalIncome()}\nTotal Expense: $${this.totalExpense()}`;
  },
  addIncome: function (description, amount) {
    this.incomes.push({ description, amount });
  },
  addExpense: function (description, amount) {
    this.expenses.push({ description, amount });
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};
// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
// Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application
function signIn(user) {
  for (let u of users) {
    if (u.username === user.username && u.password === user.password) {
      return u;
    }
  }
}

// The products array has three elements and each of them has six properties.
//a. Create a function called rateProduct which rates the product
function rateProduct(_productId, ratingObj) {
  for (let product of products) {
    if (product._id === _productId) {
      product.ratings.push(ratingObj);
    }
  }
}
//b. Create a function called averageRating which calculate the average rating of a product
function averageRating(productId) {
  let totalRating = 0;
  let ratingCount = 0;

  for (let product of products) {
    if (product._id === productId) {
      for (let rating of product.ratings) {
        totalRating += rating.rate;
        ratingCount++;
      }
    }
  }

  if (ratingCount === 0) {
    return 0;
  }

  return totalRating / ratingCount;
}

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(productId, userId) {
  for (let product of products) {
    if (product._id === productId) {
      if (product.likes.includes(userId)) {
        product.likes.splice(product.likes.indexOf(userId), 1);
      } else {
        product.likes.push(userId);
      }
    }
  }
}
module.exports = {
  signIn,
  rateProduct,
  averageRating,
  likeProduct,
};

console.log(products);
