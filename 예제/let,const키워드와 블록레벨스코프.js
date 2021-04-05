//1. var 키워드의 문제점
//중복선언 가능
var x = 1;
var y = 1;

var x = 100; //var 키워드가 없는 것처럼 동작하며 재할당이 이루어짐
var y;       //초기화 문이 없는 중복된 변수는 무시된다.

console.log(x);  //100
console.log(y);  //1

//함수 레벨 스코프
//함수 외부에 선언된 변수는 모두 전역변수가 된다.
var x = 1;
if(true){
    var x = 10;  //재할당
}
console.log(x);  //10

var i = 10;
for(var i = 0; i < 5; i++){  //재할당
    console.log(i);  //0 1 2 3 4
}
console.log(i);  //5

//변수 호이스팅
console.log(foo);  //undefined  호이스팅으로 인해 변수 선언 전에 참조가능
foo = 123;

console.log(foo);  //123
var foo;


//2. let 키워드
var foo = 456;
var foo = 789;

let bar = 123;
//let bar = 456;  error

//블록 레벨 스코프
let foo2 = 1;

{
    let foo2 = 2;  //지역변수
    let bar2 = 3;  //지역변수
}
console.log(foo2);  //1
console.log(bar2);  //error

//변수 호이스팅
console.log(foo3);  //error
let foo3;

console.log(foo4);  //error

let foo4;  //변수 선언문에서 초기화 단계가 이루어진다.
console.log(foo4);  //undefined 

foo4 = 1;  //할당문에서 할당 단계 실행된다.
console.log(foo4);  //1

//변수 호이스팅이 발생하지 않는 것처럼 보이지만 사실은 호이스팅이 발생한다.
let foo5 = 1;  //전역변수
{
    console.log(foo5);  //error 변수 호이스팅이 발생하여 전역변수를 참조하지 못한다.
    let foo5 = 2;  //지역변수
}

//전역 객체와 let
var a = 1;  //전역변수
b = 2;  //암묵적 전역

function foo6(){}

console.log(window.a);  //1  var 카워드로 선언한 전역변수는 전역 객체 window의 프로퍼티
console.log(a);  //1

console.log(window.b);  //2  암묵적 전역은 전역 객체 window의 프로퍼티
console.log(b)  //2

console.log(window.foo6);  //함수 선언문, 전역 함수는 window의 프로퍼티
console.log(foo6);  //foo6() {}

//let, const로 선언한 변수는 window의 프로퍼티가 아니다.
let c = 1;
console.log(window.c);  //undefined
console.log(c);  //1


//3. const 키워드
const x = 1;
const x; // error

{
    console.log(foo7);  //error  호이스팅이 발생하지 않는 것처럼 동작
    const foo7 = 1;
    console.log(foo7);  // 1
}
console.log(foo7);  //error  블록레벨스코프를 가진다.

const foo8 = 1;
foo8 = 2;  //error  재할당 금지

//상수의 이름은 대문자로 선언, 가독성을 높이기 위해 고정된 값이라도 변수를 만들자
const TAX_PATE = 0.1;
let preTaxPrice = 100;

let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_PATE);
console.log(afterTaxPrice);  //110

//객체를 할당하는 경우 값을 변경할 수 있다.
const person = {
    name: 'Lee'
};

person.name = 'Kim';
console.log(person);  //{name: "Kim"}