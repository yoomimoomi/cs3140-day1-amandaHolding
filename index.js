
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
    return min;
    }
}

function max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    return max;
    }
}

// STRINGS

let str = "hello world";

function capitalize(str) {
    if (str.length === 0) return str;
    return str[0].toUpperCase() + str.slice(1);
}




