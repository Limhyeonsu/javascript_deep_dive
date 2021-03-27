//1. 숫자타입
var integer = 10;  //정수
var double = 10.12;  //실수
var negative = -20;  //음의 정수

var binary = 0b01000001;  //2진수
var octal = 0o101;        //8진수
var hex = 0x41;           //16진수

console.log(binary);  //65
console.log(octal);   //65
console.log(hex);     //65
console.log(binary === octal);  //true
console.log(octal === hex);     //true

//숫자 타입은 모두 실수로 처리된다.
console.log(1 === 1.0);  //true
console.log(4 / 2);      //2
console.log(3 / 2);      //1.5

//숫자 타입의 특별한 값
console.log(10 / 0);        //Infinity : 양의 무한대
console.log(10 / -0);       //-Infinity : 음의 무한대
console.log(1 * 'String');  //NaN : 산술연산불가


//2. 문자열 타입
var string;
string = '문자열';
string = "문자열";
string = `문자열`;
string = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열로 인식된다.';
string = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열로 인식된다.";

//템플릿 리터럴
//1) 멀티라인 문자열
//var str = 'hello
//word';
//일반적인 문자열내에서는 줄바꿈이 허용되지 않는다. 이스케이프 시퀀스를 사용해야함(개행문자 등)
var template = '<ul>\n\t<li><a href="#">HOME</a><li>\n</ul>';
console.log(template);

//백틱을 사용하면 이스케이프 시퀀스를 사용하지 않아도 줄바꿈이 허용됨
var template2 = `<ul>
<li><a href="#">HOME</a></li>
</ul>`;
console.log(template2);

//2)표현식 삽입
var first = 'Ung-mo';
var last = 'Lee';
console.log('My name is'+first+last+'.'); //일반적인 문자열 연결
console.log(`My name is ${first} ${last}.`);  //표현식 삽입


//3. 불리언타입
var foo = true;
console.log(foo);

foo = false;
console.log(foo);


//4. undefined 타입
var foo2;
console.log(foo2); //undefined

//5. null 타입
var foo3 = 'Lee';
//null을 초기화 함으로써 이전의 참조를 제거한다.
foo3 = null;


//6. symbol 타입
var key = Symbol('key');
console.log(typeof key);  //symbol

var obj = {};

obj[key] = 'value';
console.log(obj[key]);  //value

//동적 타이핑
var foo4;
console.log(typeof foo4);  //undefined

foo4 = 3;
console.log(typeof foo4);  //number

foo4 = 'Hello';
console.log(typeof foo4);  //string

foo4 = true;
console.log(typeof foo4);  //boolean

foo4 = null
console.log(typeof foo4);  //object

foo4 = Symbol();
console.log(typeof foo4);  //symbol

foo4 = {};
console.log(typeof foo4);  //object

foo4 = [];
console.log(typeof foo4);  //object

foo4 = function(){};
console.log(typeof foo4);  //function


