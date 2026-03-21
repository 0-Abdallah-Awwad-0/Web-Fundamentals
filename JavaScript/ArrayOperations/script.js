//1-Accessing Elements
let colors = ["red", "blue", "green", "yellow", "purple"];

// Print the first and last elements
console.log(colors[0]); //index 0
console.log(colors[colors.length - 1]); // Last element dynamically

// index 1
console.log(colors[1]);

// Update the third element (index 2) to orange and print
colors[2] = "orange";
console.log(colors);
//-----------------------------------------------------------

//2-Traversing an Array
let numbersTraverse = [10, 20, 30, 40, 50];

// a. Print each element
for (let i = 0; i < numbersTraverse.length; i++) {
  console.log(numbersTraverse[i]);
}

// b. Print the elements in reverse
for (let i = numbersTraverse.length - 1; i >= 0; i--) {
  console.log(numbersTraverse[i]);
}
//-----------------------------------------------------------

//3-Searching for Elements
let numbersSearch = [5, 10, 15, 20, 25];
let targetPosition = numbersSearch.indexOf(25); // Returns the index, or -1 if not found

if (targetPosition !== -1) {
  console.log(`Found at position ${targetPosition}`);
} else {
  console.log("Not Found");
}
//-----------------------------------------------------------
//4-sorting an Array
let scores = [50, 20, 70, 10, 40];
// a. Ascending order (Needs a comparison function for numbers)
scores.sort((a, b) => a - b);
console.log("Ascending:", scores);

// a. Descending order
scores.sort((a, b) => b - a);
console.log("Descending:", scores);

// b. Alphabetical order (Default behavior of .sort() works for strings)
let names = ["Shatha", "Sara", "Lina", "Sami", "Dalia"];
names.sort();
console.log("Alphabetical:", names);

//-----------------------------------------------------------

//5-Adding and Removing Elements
let animals = ["dog", "cat", "rabbit"];

// Add to the end
animals.push("elephant");

// Add to the beginning
animals.unshift("lion");
animals.splice(2, 0, "tiger"); // Start at index 2, delete 0 items, insert "tiger"
console.log(animals);

//----------------------------------
//6-DELETING ELEMENTS

let fruits = ["apple", "banana", "cherry", "date"];

// Remove the first element
fruits.shift();

// Remove the last element
fruits.pop();
fruits = fruits.filter((fruit) => fruit !== "banana");
console.log(fruits);
//-----------------------------------------------------------

//7-Combining Arrays

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Using the spread operator (...) is a modern and clean way to combine arrays
let combinedArray = [...array1, ...array2];
// Alternatively: let combinedArray = array1.concat(array2);

console.log(combinedArray);
//-----------------------------------------------------------

//8-Splittig an Array

let items = ["a", "b", "c", "d", "e"];

// .slice(start, end) copies a portion of the array. The 'end' index is exclusive.
let firstThree = items.slice(0, 3);
let theRest = items.slice(3); // Leaving out the second argument goes to the end of the array

console.log(firstThree);
console.log(theRest);

//9-filtering elements

let numbersFilter = [1, 5, 10, 15, 20, 25, 30];

// .filter() returns a new array with elements that return 'true' for the condition
let greaterThan15 = numbersFilter.filter((num) => num > 15);

console.log(greaterThan15);
//-----------------------------------------------------------

//10-advanced challenge

// a. Remove duplicate elements
let inputDups = [1, 2, 2, 3, 4, 4, 5];
// A 'Set' is a built-in JS object that only stores unique values.
let uniqueArray = [...new Set(inputDups)];
console.log(uniqueArray);

// b. Rotate an array to the right by n positions
let inputRotate = [1, 2, 3, 4, 5];
let n = 2;

// Normalize 'n' in case it's larger than the array length
n = n % inputRotate.length;

// Grab the last 'n' elements and put them in front of the remaining elements
let rotatedArray = [...inputRotate.slice(-n), ...inputRotate.slice(0, -n)];
console.log(rotatedArray);
//-----------------------------------------------------------

//bonus
let arrA = [1, 3, 5];
let arrB = [2, 4, 6];

function mergeSortedArrays(arr1, arr2) {
  let merged = [];
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2

  // While both arrays still have elements to compare
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // If arr1 has leftover elements, add them
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  // If arr2 has leftover elements, add them
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

console.log(mergeSortedArrays(arrA, arrB)); // Output: [1, 2, 3, 4, 5, 6]
