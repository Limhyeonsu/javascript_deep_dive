//2. 표준 빌트인 객체
const strObj = new String('Lee');
console.log(typeof strObj);  //object

const numObj = new Number(123);
console.log(typeof numObj );  //object

//String 인스턴스의 프로토 타입은 String.prototype
console.log(Object.getPrototype(strObj) === String.prototype);  //true

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