//1. 암묵적 타입 변환
var str = x + '';
console.log(typeof str, str);   //string 10
console.log(typeof x, x);        //number 10

'10' + 2; //'102' 문자열로 타입변경
5 * '10';  //50  숫자 타입으로 변경
!0;          //true  boolean타입으로 변경
if(1){ }     //true  "

//문자열 타입으로 변환
`1 + 1 = ${1 + 1}`;   // "1 + 1 =2"
(Symbol()) + ''       // error
({}) + '';            // [object object]
Math + '';            //[object Math]
[] + '';              //""
[10, 20] + '';        //"10,20"
(function(){}) + '';  //function(){}"
Array + '';           //"function Array() { [native code] }"

//숫자 타입으로 변환
1 - '1';    //0
1 * '10';   //10
1 / 'one';  //NaN

+'';       //0
+'0';      //0
+'1';      //1
+'string'; //NaN

+true;   //1
+false;  //0
+null;   //0
+[];     //0

+undefined       //NaN
+{};             //NaN
+[10, 20];       //NaN
+(function(){})  //NaN

//불리언 타입으로 변환
//false로 평가되는 Falsy 값
if(!false) console.log(false);
if(!undefined) console.log(undefined);
if(!null) console.log(null);
if(!0) console.log(0);
if(!NaN) console.log(NaN);
if(!'') console.log('');

//Falsy값 외에는 모두 true로 평가되는 Truthy값
function isFalsy(v){
    return !v;
}

function isTruthy(v){
    return !!v;
}

//모두 true 반환
isFalsy(false); isFalsy(undefined); isFalsy(null);
isFalsy(0); isFalsy(NaN); isFalsy('');

isTruthy(true); isTruthy('0');
isTruthy({}); isTruthy([]);


//2. 명시적 타입 변환
var x = 10;
var str = x.toString();
console.log(typeof str, str);  //string 10
console.log(typeof x, x);      //number 10

//문자열 타입으로 변환
String(1);
String(NaN);
String(true);

(1).toString();
(NaN).toString();
(true).toString();

1 + '';
NaN + '';
true + '';

//숫자 타입으로 변환
Number('0');
Number('-1');
Number(false);

parseInt('0');
parseInt('-1');
parseFloat('10.53');

+'0';
+'-1';
+'10.53';

+true;
+false;

'0' * 1;
'-1' * 1;
'10.53' * 1;
true * 1;

//불리언 타입으로 변환
Boolean('x');       //true
Boolean('false');   //true
Boolean('');        //false

Boolean(0);         //false
Boolean(1);         //true
 
Boolean(Infinity);  //true
Boolean(NaN);       //false

!!'x';        //true
!!'';         //false
!!'false';    //true
!!0;          //false
!!1;          //true
!!null;       //false
!!{};         //true

 
//3. 단축평가
//논리연산자
'Cat' || 'Dog';  //"Cat"
false || 'Dog';  //"Dog"
'Cat' || false;  //"Cat"

'Cat' && 'Dog';  //"Dog"
false && 'Dog';  //false
'Cat' && false;  //false

//단축 평가를 사용하여 if문 대체
//1)
var done = true;
var msg = '';
if(done) msg = '완료';

msg = done && '완료';
console.log(msg);  //완료

//2)
done = false;
if(!done) msg = '미완료';

msg = '미완료';
console.log(msg);  //미완료

//3)
done = true;
if(done) msg = '완료';
else msg = '미완료';
console.log(msg);  //완료

msg = done ? '완료' : '미완료';
console.log(msg);  //완료

//단축평가를 사용하여 에러 방지
//1)
var elem = null;
var value = elem.value;  //error
var value2 = elem && elem.value;  //null

//2)
function getStringLength(str){
    str = str || '';    //단축평가로 매개변수 기본값 설정
    return str.length;
}

getStringLength();       //0
getStringLength('Hi');   //2

 

//ES6의 매개변수 기본값 설정
function getStringLength2(str = ''){
    return str.length;
}

getStringLength2();       //0
getStringLength2('Hi');   //2

//옵셔널 체이닝 연산자
//좌항이 null 또는 undefined이면 undefined반환
elem = null;
value = elem?.value;
console.log(value);  //undefined

value = elem && elem.value;
console.log(value);  //null

//null 병합 연산자
//좌항이 null또는 undefined이면 우항의 피연산자 반환
var a = null ?? 'default string';
console.log(a);  //"default string"

a = '' ??  'default string';
console.log(a);  //""

a = '' ||  'default string';
console.log(a);  //"default string"