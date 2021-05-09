//스프레드 문법
console.log(...[1,2,3]);  // 1 2 3
console.log(...'Hello');  // H e l l o
console.log(...new Map([['a','1'], ['b','2']]));  // ['a', '1'], ['b', '2']
console.log(...new Set([1,2,3]));  // 1 2 3
console.log(...{a:1, b:2});  //error 일반 객체는 스프레드 문법의 대상이 될 수 없다.

const list = ...[1,2,3];  //error 스프레드 문법은 변수에 할당할 수 없다.

//1. 함수 호출문의 인수로 사용
var arr = [1,2,3];
var max = Math.max(arr);  //NaN
max = Math.max.apply(null, arr);  //3
max = Math.max(...arr);  //3

//Rest파라미터
function foo(...rest) {
    console.log(rest);  //1,2,3 -> [1,2,3]
}
foo(...[1,2,3]);  


//2. 배열리터럴 내부에서 사용
//1) concat
//ES5
arr = [1,2].concat([3,4]);
console.log(arr);  //[1,2,3,4]

//ES6
arr = [...[1,2], ...[3,4]]; 
console.log(arr);  //[1,2,3,4]

//2)splice
//ES5
var arr1 = [1,4];
var arr2 = [2,3];
arr1.splice(1,0,arr2);
console.log(arr1);  //[1,[2,3],4]

//ES6
arr1 = [1,4];
arr1.splice(1,0,...arr2);
console.log(arr1);  //[1,2,3,4]

//3) 배열 복사
//ES5
var origin = [1,2];
var copy = origin.slice();
console.log(copy);  //[1,2]
console.log(copy === origin);  //false

//ES6
copy = [...origin];
console.log(copy);  //[1,2]
console.log(copy === origin);  //false

//4) 이터러블을 배열로 변환
//ES5
function sum() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
}
console.log(sum(1,2,3)); //6

//ES6
function sum2() {
    return [...arguments].reduce((pre, cur) => pre + cur, 0);
}
console.log(sum2(1,2,3));  //6

//Rest 파라미터 사용
const sum3 = (...args) => args.reduce((pre, cur) => pre + cur, 0);
console.log(sum3(1,2,3));  //6


//3. 객체 리터럴 내부에서 사용
var obj = {x:1, y:2};
copy = {...obj};
console.log(copy); //{x:1, y:2}
console.log(obj === copy);  //false

var merged = {x:1, y:2, ...{a:3, b:4}};
console.log(merged);  //{x:1, y:2, a:3, b:4}

merged = Object.assign({}, {x:1, y:2}, {y:10, z:3});
console.log(merged);  //{x:1, y:10, z:3}

//병합, 중복되는 경우 뒤에 위치한 프로퍼티가 우선권을 갖는다.
merged = {...{x:1, y:2}, ...{y:10, z:3}};
console.log(merged);   //{x:1, y:10, z:3}

//변경
var changed = {...{x:1,y:2}, y:100};
console.log(changed);  //{x:1, y:100}

//추가
var added = {...{x:1, y:2}, z:0};
console.log(added);  //{x:1, y:2, z:0}