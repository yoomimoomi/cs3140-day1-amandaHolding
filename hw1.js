
// ARRAYS 

let arr = [1, 2, 3, 4, 5];


function sum(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}


function average (arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum / arr.length;
}

function min(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
     return min;
}


function max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];  
        }
    }
    return max;
}

// print arrays

console.log(arr);
console.log(sum(arr));
console.log(average(arr));
console.log(min(arr));
console.log(max(arr));

// STRINGS

let str = "hello world";

function capitalize(str) {
    if (str.length === 0) return str;
    return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function countVowels (str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

// print strings


console.log('\n');
console.log(str);
console.log(capitalize(str));
console.log(reverseString(str));
console.log(countVowels(str));

// OBJECTS

const student  = {

name: "John Doe",

age: 20,

grades: [85, 90, 78],

getAverage: function() {
    let sum = 0;
    for (const grade of this.grades) {
        sum += grade;
    }
    return sum / this.grades.length;
},

isHonorRoll: function() {
    return this.getAverage() >= 85;
}

}

// print objects

console.log('\n');
console.log(student);
console.log(student.getAverage());
console.log(student.isHonorRoll());
