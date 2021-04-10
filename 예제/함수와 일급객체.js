//1. 일급객체
//함수는 무명의 리터럴로 저장할 수 있다.
//함수는 변수에 저장할 수 있다.
const increase = function(num){
    return ++num;
};
const decrease = function(num){
    return --num;
};

const predicates = {increase, decrease};  //함수는 객체에 저장할 수 있다.

//함수는 매개변수에 전달할 수 있다.
//함수의 반환값으로 사용할 수 있다.
function makeCounter(predicate){
    let num = 0;

    return function() {
        num = predicate(num);
        return num;
    };
}
const increaser = makeCounter(predicates.increase);
console.log(increaser());  //1
console.log(increaser());  //2

const decreaser = makeCounter(predicates.decrease);
console.log(decreaser());  //-1
console.log(decreaser());  //-2


//2. 함수 객체의 프로퍼티
//arguments 객체의 Symbol(Symbol.iterator)프로퍼티
function multiply(x, y){
    const iterator = arguments[Symbol.iterator]();

    console.log(iterator.next());  //{ value: 1, done: false }
    console.log(iterator.next());  //{ value: 2, done: false }
    console.log(iterator.next());  //{ value: 3, done: false }
    console.log(iterator.next());  //{ value: undefined, done: true }
    return x * y;
}
multiply(1, 2, 3);

//arguments 프로퍼티
function sum() {
    let res = 0;

    for(let i=0; i < arguments.length; i++){
        res += arguments[i];
    }
    return res;
}
console.log(sum()); //0
console.log(sum(1, 2));  //3
console.log(sum(1,2,3));  //6

//객체를 배열로 변환
function sum2(){
    const array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur){
        return pre + cur;
    }, 0);
}
console.log(sum2(1,2));   //3
console.log(sum2(1,2,3,4,5));  //15

//rest 파라미터 도입하여 번거로움을 해결
function sum3(...args){
    return args.reduce((pre, cur) => pre + cur, 0);
}
console.log(sum3(1,2));  //3
console.log(sum3(1,2,3,4,5));  //15

//caller 프로퍼티
function foo(func){
    return func();
}
function bar(){
    return 'caller : '+bar.caller;
}
console.log(foo(bar));  //caller : function foo(func){...}
console.log(bar());  //caller : null

//length 프로퍼티 함수의 매개변수의 개수를 가리킴
function foo2() {}
console.log(foo2.length);  //0

function bar2(x){
    return x;
}
console.log(bar2.length);  //1

function baz(x, y){
    return x * y;
}
console.log(baz.length)  //2

//name 프로퍼티
var nameFunc =  function foo(){};
console.log(nameFunc.name);  //foo

var anonymousFunc = function() {};
console.log(anonymousFunc.name);  //anonymousFunc

console.log(baz.name);  //baz

//__proto__접근자 프로퍼티
const obj = { a: 1 };
//객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype이다.
console.log(obj.__proto__ === Object.prototype);  //true

//Object.prototype의 프로퍼티를 상속받는다.
//hasOwnProperty는 Object.prototype의 메서드이다.
console.log(obj.hasOwnProperty('a'));  //true
console.log(obj.hasOwnProperty('__proto__'));  //false

//prototype 프로퍼티
//함수 객체는 prototype 프로퍼티를 소유한다.
(function () {}).hasOwnProperty('prototype');  //true
//일반 객체는 prototype 프로퍼티를 소유하지 않는다.
({}).hasOwnProperty('prototype');  //false