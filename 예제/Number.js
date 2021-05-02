//1. Number 생성자 함수
var numObj = new Number();
console.log(numObj);  //[Number: 0]

numObj = new Number(10);
console.log(numObj);  //[Number: 10]

numObj = new Number('Hello');
console.log(numObj);  //[Number: NaN]


//2. Number 프로퍼티
console.log(0.1 + 0.2);  //0.30000000000000004
console.log(0.1 + 0.2 === 0.3);  //false

function isEqual(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
}
isEqual(0.1 + 0.2, 0.3);  //true

console.log(Number.MAX_VALUE);  //1.7976931348623157e+308
console.log(Number.MIN_VALUE);  //5e-324
console.log(Number.MAX_SAFE_INTEGER);  //9007199254740991
console.log(Number.MIN_SAFE_INTEGER);  //-9007199254740991
console.log(Number.POSITIVE_INFINITY);  //Infinity
console.log(Number.NEGATIVE_INFINITY);  //-Infinity
console.log(Number.NaN);  // NaN


//3. Number 메서드
//1)
Number.isFinite(0);  //true
Number.isFinite(Number.MAX_VALUE);  //true
Number.isFinite(Number.MIN_VALUE);  //true
Number.isFinite(Infinity);  //false
Number.isFinite(-Infinity);  //false

//2)
Number.isInteger(0);  //true
Number.isInteger(123);  //true
Number.isInteger(-123);  //true
Number.isInteger(0.5);  //false
Number.isInteger('123');  //false
Number.isInteger(Infinity);  //false

//3)
Number.isNaN(NaN);  //true
Number.isNaN(undefined);  //false
isNaN(undefined);  //true

//4)
Number.isSafeInteger(0);  //true
Number.isSafeInteger(10000000000000);  //true
Number.isSafeInteger(10000000000001);  //false
Number.isSafeInteger(0.5);  //false
Number.isSafeInteger('123');  //false

//5)
(77.1234).toExponential();  //"7.71234e+1"
(77.1234).toExponential(4); //"7.7123e+1"
(77.1234).toExponential(2); //"7.71e+1"
77.toExponential();  //error
77 .toExponential();  
77.1234.toExponential();

//6)
(12345.6789).toFixed(); //"12346"
(12345.6789).toFixed(1); //"12345.7"
(12345.6789).toFixed(2); //"12345.68"

