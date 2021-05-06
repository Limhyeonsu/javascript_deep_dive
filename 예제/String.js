//1. String 생성자함수
var strObj = new String();
console.log(strObj);//[[PrimitiveValue]]: "" 브라우저에서 보면 접근할 수 없는 프로퍼티가 보인다.

strObj = new String('Lee');
console.log(strObj);  //String {"Lee"} 0: "L" 1: "e" 2: "e" length: 3 [[PrimitiveValue]]: "Lee"
console.log(strObj[0]);  //L

strObj[0] = 'S';  //불변임
console.log(strObj);  //"Lee"

//new 연산자 없이 사용시 String 인스턴스가 아닌 문자열을 반환
String(1);  //"1"
String(NaN);  //"NaN"
String(null);  //"null"

//3. String 메서드
//1) indexOf
var str = 'Hello World';
str.indexOf('l');  //2
str.indexOf('or');  //7
str.indexOf('x');  //-1
str.indexOf('l', 3);  //3 인덱스 3부터 검색하여 첫 번째 인덱스 반환

//2) search
str.search(/o/);  //4

//3) includes
str.includes('Hello'); //str에 'Hello'가 포함되어 있는경우 true, false 반환

//4) startsWith
str.startsWith('He');  //true

//5) endsWith
str.endsWith('ld');  //true

//6) charAt
str.charAt(1);  //e

//7)substring
str.substring(1,4); //ell
str.substring(1);  //ello World
str.substring(4,1);  //ell  첫번째 인수가 두번째 인수보다 큰경우 두 인수는 교환된다
str.substring(-2); //Hello World 인수가 0보다 작거나 NaN인 경우 0으로 취급
str.substring(1, 100);  //ello World 인수가 문자열 길이보다 큰 경우 문자열 길이로 취급

//8) slice
str.slice(-5); // World
str.slice(0, 5); //Hello

//9)toUpperCase
str.toUpperCase();  //HELLO WORLD

//10)toLowerCase
str.toLowerCase();  //hello world

//11) trim
var str2 = '     foo     ';
str2.trim(); //foo

//12) repeat
str2 = 'abc';
str2.repeat();  //''
str2.repeat(0);  //''
str2.repeat(1);  //abc
str2.repeat(2.5);  //abcabc
str2.repeat(-1);  //error

//13) replace
str.replace('World', 'Lee');  //Hello Lee

str = 'Hello World World'
str.replace('World', 'Lee');  //Hello Lee World

str = 'Hello Hello';
str.replace(/hello/gi, 'Lee');  //Lee Lee

//14) split
str.split(' ');  //["Hello", "Hello"]
str.split('');  //["H","e","l","l","o"," ","H","e","l","l","o"]
str.split(' ', 1); //["Hello"] 두번째 인수로 배열 길이 지정 
