//1. 객체리터럴
var person = {
    name : 'Lee',
    sayHello : function(){
    console.log(`Hello! My name is ${this.name}.`);
    }
};
console.log(typeof person);      //object
console.log(person);             //{name: "Lee", sayHello: f}
console.log(person.sayHello());  //Hello! My name is Lee.

var empty = {};             //빈객체
console.log(typeof empty);  //object


//2. 프로퍼티
var person = {
    firstName: 'Ung-mo',  //네이밍 규칙 준수
    'last-name' : 'Lee'   //네이밍 규칙 미준수
};

var person = {
    firstName: 'Ung-mo',
    last-name: 'Lee'     //따옴표 생략시 error
};

 
//프로퍼티 키 동적생성
var obj = {};
var key = 'Hello';

obj[key] = 'World';  
console.log(obj);    //{Hello: "World"}

//빈 문자열도 키로 사용가능
var foo = {
    '' : ''
};
console.log(foo);  //{"" : ""}

//키를 문자열, 심볼외의 타입 사용시 암묵적 타입변환
var foo = {
    0: 1,
    1: 2,
    2: 3
};
console.log(foo);  //{0: 1, 1: 2, 2: 3}

//예약어를 키값으로 사용가능, 권장하지 않음
var foo = {
    var: '',
    function: ''
};
console.log(foo); //{var: "", function: ""}

//키 값을 중복 선언시 마지막에 선언된 것이 덮어씌운다
var foo = {
    name: 'Lee',
    name: 'Kim'
};
console.log(foo);  //{name: "Kim"}

//메서드
var circle = {
    radius: 5,
    getDiameter: function(){  //메서드
        return 2 * this.radius;  //this는 자기자신(circle)
    }
};
console.log(circle.getDiameter());  //10

//프로퍼티 접근
var person = {
    name: 'Lee'
};
console.log(person.name);     //마침표 표기법
console.log(person['name']);  //대괄호 표기법
console.log(person[name]);   //error

var person = {
    'last-name': 'Lee',
    1: 10
};

person.'last-name';    //error
person.last-name;      //NaN

person[last-name];    //error
person['last-name'];  //Lee

person.1;      //error
person.'1';    //error
person[1];    //10
person['1'];  //10

//프로퍼티 삭제
var person = {
    name: 'Lee',
};

person.age = 20; //프로퍼티 동적 생성
console.log(person); //{name: "Lee", age: 20}

delete person.age;  //프로퍼티 존재 -> 삭제
delete person.address;  //프로퍼티 X ->무시

//프로퍼티 축약표현
var x = 1, y = 2;
var obj = {
    x: x,
    y: y
};
console.log(obj);  //{x: 1, y: 2}

const obj = { x, y };  //축약표현
console.log(obj);    //{x: 1, y: 2}

//계산된 프로퍼티 이름
//ES5
var prefix = 'prop';
var i = 0;
var obj = {};

obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

//ES6
const obj = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i
};

//메서드 축약 표현
var obj2 = {
    name: 'Lee',
    sayHi: function(){
        console.log('Hi! '+this.name);
    }
};
obj2.sayHi();

//ES6
obj2 = {
    name: 'Lee',
    sayHi(){   //function 생략가능
        console.log('Hi! '+this.name);
    }
};
obj2.sayHi();