//2. 표준 빌트인 객체
const strObj = new String('Lee');
console.log(typeof strObj);  //object

const numObj = new Number(123);
console.log(typeof numObj );  //object

//String 인스턴스의 프로토 타입은 String.prototype
console.log(Object.getPrototypeOf(strObj) === String.prototype);  //true

//빌트인 프로토타입 메서드, 정적 메서드 제공
const numObj2 = new Number(1.5);
console.log(numObj2.toFixed()); // 2 소수점 자리를 반올림 
console.log(Number.isInteger(0.5));// false 인수가 정수인지 검사

 
//3. 원시값과 래퍼객체
const str = 'hello';

//원시타입인 문자열이 프로퍼티와 메서드를 갖고 있는 객체처럼 동작한다.
console.log(str.length);  //5
console.log(str.toUpperCase());  //HELLO

const str2 = 'hi';
console.log(str2.length); //2
console.log(str.toUpperCase());  //HI

//래퍼객체로 프로퍼티에 접근하거나 메서드 호출 후, 다시 원시값으로 되돌아온다.
console.log(typeof str2); //string


//4. 전역 객체
globalThis.parseInt('F', 16);  //15  문자열 'F'를 16진수로 해석
parseInt('F', 16);             //globalThis 생략가능
globalThis.parseInt === parseInt  // true

var foo = 1;
console.log(globalThis.foo);  //1 var 키워드로 선언한 전역변수

bar = 2;
console.log(globalThis.bar);  //2 선언하지 않은 변수에 값 할당 -> 암묵적 전역

function baz() {return 3;}
console.log(globalThis.baz);  //3 전역함수

let foo2 = 123;
console.log(globalThis.foo);  //undefined

//빌트인 전역 프로퍼티
console.log(globalThis.Infinity === Infinity)  //true
console.log(3/0); //Infinity
console.log(-3/0); //-Infinity
console.log(typeof Infinity); //number

console.log(globalThis.NaN);  //NaN
console.log(Number('xyz'));   //NaN
console.log(1 * 'string');    //NaN
console.log(typeof NaN);      //number

console.log(globalThis.undefined);  //undefined
var foo3;
console.log(foo3);                 //undefined
console.log(typeof undefined);     //undefined

//eval 함수
eval('1+2;');  //3
eval('var x = 5;');  //undefined
console.log(x);  //5

const o = eval('({a: 1})');  //객체 리터럴은 반드시 괄호로 둘러싼다.
console.log(0);  //{a:1}

const f = eval('(function() {return 1;})');  //함수 리터럴은 반드시 괄호로 둘러싼다.
console.log(f());  //1

eval('1+2; 3+4;'); //7  여러개의 문으로 이루어진 경우 모든 문을 실행 후 마지막 결과값 출력

const x2 = 1;
function foo3() {
    //eval 함수는 런타임에 foo 함수의 스코프를 동적으로 수행한다.
    eval('var x2 = 2');
    console.log(x2);  //2
}
foo();
console.log(x2);  //1

//isFinite 함수
isFinite(0);  //true
isFinite(2e64);  //true
isFinite('10');  //true
isFinite(null);  //true  null->0
isFinite(Infinity);  //false
isFinite(NaN);  //false
isFinite('Hello');  //false

//isNaN 함수
isNaN(NaN);  //true
isNaN(10);   //false
isNaN('blabla');  //true  'blabla' -> NaN
isNaN('10');  //false
isNaN('');    //false  ''->0

//parseFloat
parseFloat('3.14');      //3.14
parseFloat('10.00');     //10
parseFloat('34 45 66');  //34  공백으로 구분된 문자열은 첫번째만 반환
parseFloat('40 years');  //40
parseFloat('He was 40');  //NaN  첫번째 문자열을 숫자로 변경불가하면 NaN

//parseInt
parseInt('10');      //10
parseInt('10.123');  //10
parseInt('10', 2);   //2  '10'을 2진수로 해석
parseInt('10', 8);   //8  '10'을 8진수로 해석
parseInt('10', 16);  //16  '10'을 16진수로 해석

//toString
const x = 15;

x.toString(2);  //2진수로 변환 '1111'
parseInt(x.toString(2), 2); //2진수로 해석 후 10진수로 반환

x.toString(8);  //8진수로 변환 '17'
parseInt(x.toString(8), 8);  //8진수로 해석 후 10진수로 반환

x.toString(16);  //16진수로 변환 'f'
parseInt(x.toString(16), 16); //16진수로 해석 후 10진수로 반환

x.toString();  //숫자를 문자열로 변경
parseInt(x.toString());  //10진수로 해석하고 10진수로 반환

parseInt('0xf');  //15  16진수로 해석
parseInt('f', 16);  //15
parseInt('0b10');  //0  2진수 리터럴을 해석하지 못함.
parseInt('0o10');  //0  ES6부터 0으로 시작하면 8진수로 해석하지 않음

//encodeURI, decodeURI
const uri = 'http://example.com?name=김가나&job=programer&teacher';
const enc = encodeURI(uri);
console.log(end);  //"http://example.com?name=%EA%B9%80%EA%B0%80%EB%82%98&job=programer&teacher"

const dec = decodeURI(enc);
console.log(dec);  //"http://example.com?name=김가나&job=programer&teacher"

//encodeComponentURI, decodeComponentURI
const uriComp = 'name=가나다&job=programmer&teacher';

let enc2 = encodeURIComponent(uriComp); //"name%3D%EA%B0%80%EB%82%98%EB%8B%A4%26job%3Dprogrammer%26teacher"
let dec2 = decodeURIComponent(enc2);  //"name=가나다&job=programmer&teacher"

enc2 = encodeURI(uriComp);  //"name=%EA%B0%80%EB%82%98%EB%8B%A4&job=programmer&teacher"
dec2 = decodeURIComponent(enc2);  //"name=가나다&job=programmer&teacher"