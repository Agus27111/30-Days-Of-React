// Exercises: Level 3
// Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt().
//One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// Deklarasi fungsi userIdGeneratedByUser
// function userIdGeneratedByUser() {
//   // Menggunakan prompt() untuk meminta input jumlah karakter
//   const characterCount = prompt("Masukkan jumlah karakter:");

//   // Menggunakan prompt() untuk meminta input jumlah ID
//   const idCount = prompt("Masukkan jumlah ID yang akan dihasilkan:");

//   // Memanggil fungsi generateUserId dengan memberikan nilai karakterCount dan idCount
//   generateUserId(characterCount, idCount);
// }

// Deklarasi fungsi generateUserId yang menerima dua parameter: characterCount dan idCount
function generateUserId(characterCount, idCount) {
  // Inisialisasi string untuk menyimpan hasil ID
  let userIds = "";

  // Loop sebanyak idCount untuk menghasilkan ID sebanyak yang diminta
  for (let i = 0; i < idCount; i++) {
    // Memanggil fungsi generateRandomId dengan memberikan nilai characterCount
    const randomId = generateRandomId(characterCount);

    // Menambahkan hasil generateRandomId ke dalam string userIds
    userIds += randomId + "\n";
  }

  // Menampilkan hasil ID ke dalam console
  console.log("User IDs yang dihasilkan:");
  console.log(userIds);
}

// Deklarasi fungsi generateRandomId yang menerima satu parameter: characterCount
function generateRandomId(characterCount) {
  // String berisi karakter yang mungkin digunakan dalam ID
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // Inisialisasi string untuk menyimpan hasil ID
  let randomId = "";

  // Loop sebanyak characterCount untuk menghasilkan ID dengan panjang yang diinginkan
  for (let i = 0; i < characterCount; i++) {
    // Memilih karakter acak dari characters dan menambahkannya ke dalam randomId
    randomId += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  // Mengembalikan hasil ID yang telah dibuat
  return randomId;
}
console.log(generateRandomId(5));

// Memanggil fungsi userIdGeneratedByUser untuk memulai proses
// userIdGeneratedByUser();

// userIdGeneratedByUser();
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
// Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(type, num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if (type === "hexa") {
      arr.push("#" + Math.floor(Math.random() * 16777215).toString(16));
    } else if (type === "rgb") {
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      arr.push(`rgb(${r}, ${g}, ${b})`);
    }
  }
  return arr;
}

console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(array) {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
const myAr = [1, 2, 3, 4, 5, 6];
console.log(shuffleArray(myAr));
// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(par = "") {
  if (par === "") {
    return "its empty";
  } else {
    return par;
  }
}

console.log(`its Empty? : ${isEmpty(2)}`);
console.log(`its Empty? : ${isEmpty()}`);

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(arr) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "Invalid input: Array should contain only numbers";
    }

    sum += arr[i];
    count++;
  }

  if (count === 0) {
    return "Invalid input: Array is empty";
  }

  return sum / count;
}
console.log(`average Array: ${average(myAr)}`);
