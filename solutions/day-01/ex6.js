// Exercises
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: "" },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
// Print the price of each product using forEach
products.forEach((e) => console.log(`price for a product: ${e.price}`));
// Print the product items as follows using forEach
products.forEach((e) =>
  console.log(`The price of ${e.product} is ${e.price} euros.`)
);

// The price of banana is 3 euros.
// The price of mango is 6 euros.
// The price of potato is unknown.
// The price of avocado is 8 euros.
// The price of coffee is 10 euros.
// The price of tea is unknown.
// Calculate the sum of all the prices using forEach

// Create an array of prices using map and store it in a variable prices
let prices = [];
products.map((x) => {
  prices.push(x.price);
});
console.log(prices);
// Filter products with prices

// Use method chaining to get the sum of the prices(map, filter, reduce)
let filteredPrices = prices
  .filter((p) => typeof p === "number")
  .reduce((acc, curr) => acc + curr);
console.log(filteredPrices);

// Calculate the sum of all the prices using reduce only
let sumAll = prices.reduce((acc, curr) => acc + curr);
console.log(`sum the price : ${sumAll}`);

// Find the first product which doesn't have a price value

const emptyProducts = products.filter((product) => {
  console.log(product); // Tambahkan log untuk melihat data produk
  return product.price === "";
});

console.log(
  "First empty product: ",
  emptyProducts.length > 0 ? emptyProducts[0].product : "None"
);

// Find the index of the first product which does not have price value
const indexFirstEmptyPrice = products.findIndex(
  (product) => product.price === ""
);
console.log(`indexFirstEmptyPrice : ${indexFirstEmptyPrice}`);

// Check if some products do not have a price value
const isHavePrice = products.some((product) => product.price === "");
console.log(`some products do not have a price value? ${isHavePrice}`);

// Check if all the products have price value
const isAllHavePrice = products.every((product) => product.price === "");
console.log(`all the products have price value? ${isAllHavePrice}`);

// Explain the difference between forEach, map, filter and reduce

// Perbedaan utama:

// forEach: Tidak menghasilkan array baru dan tidak mengubah array asli.
const numbers = [1, 2, 3, 4];

numbers.forEach((num) => {
  console.log(num * 2);
});

// Output:
// 2
// 4
// 6
// 8

// map: Menghasilkan array baru dengan hasil dari pemanggilan fungsi pada setiap elemen array.

const doubledNumbers = numbers.map((num) => {
  return num * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8]

// filter: Menghasilkan array baru yang hanya berisi elemen yang memenuhi kondisi tertentu.

const evenNumbers2 = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumbers2); // Output: [2, 4]

// reduce: Mengurangi array menjadi nilai tunggal dengan menjalankan fungsi akumulator pada setiap elemen.

const sum = numbers.reduce((accumulator, currentNum) => {
  return accumulator + currentNum;
}, 0);

console.log(sum); // Output: 10

// Explain the difference between filter, find and findIndex
// Perbedaan utama:

// filter: Menghasilkan array baru yang berisi semua elemen yang memenuhi kondisi.

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6]

// find: Menghasilkan elemen pertama yang memenuhi kondisi atau undefined jika tidak ada yang memenuhi.

const firstEvenNumber = numbers.find((num) => num % 2 === 0);

console.log(firstEvenNumber); // Output: 2

// findIndex: Menghasilkan indeks elemen pertama yang memenuhi kondisi atau -1 jika tidak ada yang memenuhi.

const indexFirstEvenNumber = numbers.findIndex((num) => num % 2 === 0);

console.log(indexFirstEvenNumber); // Output: 1

// Explain the difference between some and every
// Perbedaan utama:

// some: Mengembalikan true jika setidaknya satu elemen memenuhi kondisi.

const hasEvenNumber = numbers.some((num) => num % 2 === 0);

console.log(hasEvenNumber); // Output: true (karena ada angka genap)

// every: Mengembalikan true jika semua elemen memenuhi kondisi.

const allEvenNumbers = numbers.every((num) => num % 2 === 0);

console.log(allEvenNumbers); // Output: true (karena semua angka genap)
