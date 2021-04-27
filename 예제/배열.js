//1. 배열이란
const arr = ['apple', 'banana', 'orange'];
arr.length; //3
arr.construntor === Array;  //true
Object.getPrototypeOf(arr) === Array.prototype;  //true

//3. length 프로퍼티
const arr2 = [1,2,3,4,5];
arr2.length = 3;
console.log(arr2);  //[1,2,3]

const arr3 = [1];
arr3.length = 3;
console.log(arr3.length);  //3
console.log(arr3);  //[1, empty * 2]

//희소배열
const sparse = [, 2, , 4];
console.log(sparse.length);  //4
console.log(sparse);  // [empty, 2, empty, 4]

//Array.from
Array.from({length : 2, 0: 'a', 1: 'b'});  //['a', 'b']
Array.from('Hello');  //['H','e','l','l','o']
Array.from({length: 3});  //[undefined, undefined, undefined]
Array.from({length: 3}, (_, i) => i);  //[0,1,2]

