// 1. 산술 연산자
//이항 산술 연산자
5 + 2;   //7
5 - 2;   //3
5 * 2;   //10
5 / 2;   //2.5
5 % 2;   //1

//단항 산술 연산자
var x = 1;
//증감 연산자는 피연산자의 값을 변경한다.
x++;
console.log(x);  //2

x--;
console.log(x);  //1

//증감연산자는 위치에 따라 의미가 다르다
var y = 5, result;

result = y++;
console.log(result, y);  //5 6

result = ++y;
console.log(result, y);  //7 7

result = y--;
console.log(result, y);  //7 6

result = --y;
console.log(result, y);  //5 5

// + 단항연산자 이용하면 숫자타입으로 변환
var z = '1';
console.log(+x);  //1
console.log(x);   //'1' 부수 효과는 없다

z = true;
console.log(+z);  //1
console.log(z);   //true

z = false;
console.log(+z);  //0
console.log(z);   //false

z = 'Hello';
console.log(+z);  //NaN  문자열은 숫자타입으로 변환할 수 없다.
console.log(z);   //Hello

// - 단항연산자를 이용하면 부호를 반전한다.
var v = -10;
console.log(-v);  //10
v = '10';
console.log(-v); //-10
v = true;
console.log(-v); //-1
v = 'Hello';
console.log(-v); //NaN

// 문자열에 + 연산자 사용시 문자열을 연결시켜준다.
console.log('1' + 2);         //12
console.log(1 + '2');         //12
console.log(1 + 2);           //3
console.log(1 + true);        //2
console.log(1 + false);       //1
console.log(1 + null);        //1
console.log(1 + undefined);   //NaN

//2. 할당연산자
var x2;

x = 10;
console.log(x);  //10

x += 5;  //x = x + 5
console.log(x);  //15

x -= 5;  //x = x - 5
console.log(x);  //10

x *= 5;  //x = x * 5
console.log(x);  //50

x /= 5;  //x = x / 5
console.log(x);  //10

x %= 5;  //x = x % 5
console.log(x);  //0

var str = 'My name is ';

str += 'Lee';
console.log(str);  //My name is Lee

//연쇄 할당, 오른쪽에서 왼쪽으로 진행
var a, b, c;

a = b = c = 0;
console.log(a, b, c);  //0 0 0

//3. 비교연산자
5 == 5;    //true
5 == '5';  //true

//동등 비교 연산자는 예측할 수 없는 결과를 만들기도 한다.
'0' == '';  //false
0 == '';    //true
0 == '0';   //true
false == 'false';    //false
false == '0'         //true
false == null;       //false
false == undefined;  //false

//일치비교 연산자
5 === 5;    //true
5 === '5';  //false

//NaN은 자신과 일치하지 않는 유일한 값이다. 그래서 NaN을 비교하려면 isNaN을 사용
NaN === NaN;  //false
isNaN(NaN);   //true
isNaN(10);    //false
isNaN(1 + undefined)  //true

0 === -0;  //true
0 == 0;  //true

-0 === +0;  //true
Object.is(-0, +0);  //false

NaN === NaN;  //false
Object.is(NaN, NaN);  //true

//부동등, 불일치 비교
5 != 8;    //true
5 != 5;    //false
5 != '5';  //false

5 !== 8;   //true
5 !== 5;   //false
5 !== '5'; //true

//대소관계 비교연산
5 > 0;   //true
5 > 5;   //false
5 >= 5;  //true
5 <= 5;  //true

//4. 삼항조건 연산자
x = 2;

//x % 2 = 0, 0은 false로 암묵적 타입 변환됨
var result = x % 2 ? '홀수' : '짝수';
console.log(result);  //짝수

//if..else문을 사용하여 삼항조건 연산자 표현식과 유사하게 처리가능
if(x % 2) result = '홀수';
else      result = '짝수';
console.log(result);  //짝수

//if...else문은 값처럼 사용할 수 없다 
x = 10;
result = if(x % 2) { result = '홀수';} else{ result = '짝수';}; //error

//5. 논리 연산자
//논리합(||) 연산자
true || true;      //true 
true || false;     //true 
false || true;     //true 
false || false;    //false
'Cat' || 'Dog';    //Cat

//논리곱(&&) 연산자
true && true;    //true
true && false;   //false
false && true;   //false
false && false;  //false
'Cat' && 'Dog';  //Dog

//논리부정(!) 연산자
!true;      //false
!false;     //true

//피연산자가 boolean값이 아니면 암묵적 형변환
!0;          //true
!'Hello';  //false

 
//6. 쉼표연산자
var o, p, q;
o = 1, p = 2, q = 3;  //3

 
//7. 그룹연산자
10 * 2 + 3;  //23
10 * (2 + 3);  //50

 
//8. typeof 연산자
typeof ''  // "string"
typeof 1  // "number"
typeof NaN  // "number"
typeof true  // "boolean"
typeof undefinde  // "undefinde  "
typeof Symbol()  // "symbol"
typeof null  // "object"
typeof []  // "object"
typeof {}  // "object"
typeof new Date()  // "object"
typeof /test/gi  // "object"
typeof function(){}  // "function"

 
//9. 지수 연산자
2 ** 2;     //4
2 ** 2.5;  //5.65685424949238
2 ** 0;     //1
2 ** -2;   //0.25

Math.pow(2, 2);
Math.pow(2, 2.5);
Math.pow(2, 0);
Math.pow(2, -2);

//이런 경우 지수 연산자가 Math.pow()보다 가독성이 좋다
2 ** 2 ** 2;
Math.pow(Math.pow(2, 2), 2);

-5 ** 2;  //error
(-5) ** 2;  //25

var num = 5;
num **= 2;  //25
2 * 5 ** 2;    //50 (5의2승 = 25 * 2 =50)