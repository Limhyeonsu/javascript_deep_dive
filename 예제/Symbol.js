//2. 심벌값의 생성
//1) Symbol 함수
var mySymbol = Symbol();  //new 연산자와 함께 호출하지 않는다.
console.log(typeof mySymbol);  //symbol
console.log(mySymbol);  //Symbol()

var mySymbol1 = Symbol('mySymbol');
var mySymbol2 = Symbol('mySymbol');
console.log(mySymbol1 === mySymbol2);  //false

//심벌로 래퍼객체 생성함
console.log(mySymbol1.toString()); //Symbol(mySymbol)
console.log(mySymbol1.description); //mySymbol

//심벌 값은 암묵적으로 문자열이나 숫자 타입으로 변환되지 않는다
console.log(mySymbol1 + ''); //error

//불리언 타입으로 암묵적 타입변환이 된다.
console.log(!!mySymbol1);  //true

//2) Symbol.for / Symbol.keyFor
const s1 = Symbol.for('mySymbol');
const s2 = Symbol.for('mySymbol');
console.log(s1 === s2);  //true
Symbol.keyFor(s1);  //mySymbol


//3) 심벌과 상수
//다른 변수의 값과 중복 될 수 있다
const Direction = {
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
};
const myDirection = Direction.UP;
console.log(myDirection === Direction.UP); //true

//심벌을 통해 유일한 값으로 만든다
const Direction = {
    UP: Symbol('up'),
    DOWN: Symbol('down'),
    LEFT: Symbol('left'),
    RIGHT: Symbol('right')
};


//4. 심벌과 프로퍼티 키
const obj = {
    [Symbol.for('mySymbol')]: 1
};
obj[Symbol.for('mySymbol')]; //1


//5. 심벌과 프로퍼티 은닉
for(const key in obj){
    console.log(key);  //아무것도 출력되지 않음
}
console.log(Object.keys(obj));  //[]
console.log(Object.getOwnPropertyNames(obj));  //[]
//ES6에서 도입
console.log(Object.getOwnPropertySymbols(obj));  //[Symbol(mySymbol)]