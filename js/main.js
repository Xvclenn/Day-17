const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a[0])
console.log(a.at(6))


const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
const array4 = array1 + array2;

console.log(...array1, ...array2)
console.log(...array1, ...array4)
console.log(...array3, ...array4)
console.log(array3);
console.log(array4);

console.log(a.sort(function (a, b) {
    if (a>b) {
        return -1;
    }
    else {
        return 1;
    }
}))


console.log(a.sort(function (a, b) {
    if (a<b) {
        return -1;
    }
    else {
        return 1;
    }
}))

