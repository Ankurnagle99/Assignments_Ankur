//Question no. 1. Insert an item into array at specific index in JavaScript ?

function insertElement() {
	let arr = [1, 2, 3, 4, 5];
	let index = 5;
	let element = 54;

	// Shift all elements one place
	// to the back until index
	for (let i = arr.length; i > index; i--) {
		arr[i] = arr[i - 1];
	}
	// Insert the element at the index
	arr[index] = element;
	console.log(arr);
}
insertElement();

//Question no. 2.Remove an element from an array in JavaScript?

let arr = [1, 2, 3, 4, 5];
let indexToRemove = 2; // Index of the element to remove
for (let i = indexToRemove; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
}
arr.length -= 1;
console.log(arr); // Output: [1, 2, 4, 5]

//Question no.3 From a new array and remove all the duplicate elements in a JavaScript array? (It should be a unique array)

//function removeDup(arr){
//     let uniArray = [];


//     function uniqueFunc(ele){
//         for(let i = 0; i < uniArray.length; i++){
//             if(uniArray[i] === ele){
//                 return true;
//             }
//         }
//         return false;
//     }


//     for(let i = 0; i < arr.length; i++){
//         let isDuplicate = false;


//         isDuplicate = uniqueFunc(arr[i]);


//         if(!isDuplicate) {
//             let newArray = [];
//             for(let j = 0; j < uniArray.length; j++){
//                 newArray[j] = uniArray[j];
//             }


//             newArray[uniArray.length] = arr[i];
//             uniArray = newArray;
//         }
//     }
//     return uniArray;
// }
// let given_array = [10,10,20,20,50,50,60,88,88];
// console.log(removeDup(given_array));


//Question no.4.Replace an item from an array in JavaScript?

let arr = [1, 2, 3, 4, 5];
// Index of the item to replace
let indexToReplace = 2;
// New value to replace 
let newValue = 10;
// Replace the item at the specified index
arr[indexToReplace] = newValue;
// Output the updated array
console.log(arr); // Output: [1, 2, 10, 4, 5]

//Question no.5 How do you check if an element exists in an array?

let array = ['Ankur', 'shubham', 'karan'];
let isAvailable = array.includes("Ankur");
console.log(isAvailable)

//Question no.6 How do you swap any two numbers in a given array?

function swap(array, x, y) {
  var temp = array[x];
  array[x] = array[y];
  array[y] = temp;
}
var array = [1, 2, 3, 4, 5];
swap(array, 0, 4); //output [5, 2, 3, 4, 1]

//Question no.7 Find the sum of each and every element present in an array. (Code should be optimized so that if user will change the length of  he array it should be working properly)

//Question no.8 How to Create an unique Array using Intersection of two same or different Arrays in JavaScript ?

//Quesiton no.9 Reverse an array in JavaScript?

const array = [1, 2, 3, 4]
const reversedArray = []

for(let i = array.length - 1; i >= 0; i--) {
  const valueAtIndex = array[i] 
  reversedArray.push(valueAtIndex)
}
console.log(reversedArray)
// [4, 3, 2, 1]

//Quesiton no.10 Calculate the length of an array using JavaScript?

var languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

// languages.length can be used to find out 
// the number of times to loop over an array
for (i = 0; i < languages.length; i++){
    console.log(languages[i]);
}

