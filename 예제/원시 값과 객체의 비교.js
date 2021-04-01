//1. 원시 값
var str = 'string';
console.log(str[0]);   //s
console.log(str.length);   //6
console.log(str.toUpperCase());  //STRING

//문자열의 일부를 변경해도 반영되지 않는다.
str[0] = 'S';
console.log(str);      //string
console.log(str[0]);  //s

//값에 의한 전달
var score = 80;
var copy = score;
console.log(score);  //80
console.log(copy);   //80
console.log(score === copy);  //true

score = 100;
console.log(score);  //100
console.log(copy);   //80
console.log(score === copy);  //false

//2. 객체
var person = {
    name: 'Lee'
};

var person2 = person;
console.log(person);     //Lee
console.log(person2 );   //Lee

//프로퍼티값 갱신
person.name = 'kim';
console.log(person);     //kim

//메모리 공간을 공유해서 값이 같이 바뀜
console.log(person2 );   //kim

//프로퍼티 동적 생성
person.address = 'Seoul';

//얕은 복사
const o = { x: { y: 1} };
const c1 = {...o};
console.log(c1 === o);       //false
console.log(c1.x === o.x);  //true

//원시값을 할당한 변수를 다른변수에 할당 -> 깊은 복사
const v = 1;
const c1 = v;

//깊은 복사
const _ = require('lodash');  //node.js
const c2 = _.cloneDeep(o);
console.log(c2 === o);
console.log(c2.x === o.x);

//객체를 할당한 변수를 다른 변수에 할당 -> 얕은 복사
const o = {x:1};
const c2 = o;