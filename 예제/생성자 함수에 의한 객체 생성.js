//1. Object 생성자 함수
const person = new Object();
person.name = 'Lee';
person.sayHello = function() {
    console.log('Hi! My name is '+ this.name);
};

console.log(person);  //{ name: 'Lee', sayHello: [Function (anonymous)] }
person.sayHello();    //Hi! My name is Lee

//빌트인 생성자 함수 등등
const strObj = new String('Lee');
console.log(typeof strObj);
console.log(strObj);

const numObj = new Number(123);
console.log(typeof numObj);
console.log(numObj);

const func = new Function('x', 'return x * x');
console.log(typeof func);  //function
console.log(func);         //[Function: anonymous]
console.log(func(5));      //25


//2. 생성자 함수
function Circle(radius) {
    this.radius = radius;  //인스턴스 초기화
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}

const circle = new Circle(3);       //인스턴스 생성
console.log(circle.radius);         //3
console.log(circle.getDiameter());  //6

//this 바인딩
function Circle2(radius){
    //1. 암묵적으로 인스턴스 생성, this에 바인딩된다.
    console.log(this);  //Circle2 {}
    //2. this에 바인딩 되어 있는 인스턴스를 초기화 한다.
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
    //3. 완성된 인스턴스가 바인딩된 this를 반환한다.
}
const circle2 = new Circle2(1);
console.log(circle2);  //Circle2 { radius: 1, getDiameter: [Function (anonymous)] }


function Circle3(radius){
    
    console.log(this); 
    
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
    return {};  //명시적으로 객체를 반환하면 명시적인 객체가 반환된다.
}
const circle3 = new Circle3(1);
console.log(circle3);  //{}


function Circle4(radius){
    
    console.log(this); 
    
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
    return 100;  //명시적으로 원시값을 반환하면 무시되고 암묵적으로 this가 반환된다.
}
const circle4 = new Circle4(1);
console.log(circle4);  //ircle4 { radius: 1, getDiameter: [Function (anonymous)] }

//내부메서드
function foo() {}
foo.prop = 10;  //함수는 객체이므로 프로퍼티를 소유할 수 있다.
foo.method = function() {  //메서드를 소유할 수 있다.
    console.log(this.prop);
};
foo.method(); //10


function foo() {}
foo();  //일반적인 함수로서 호출 : [[Call]]
new foo();  //생성자 함수로서 호출 : [[Construct]]

//constructor, non-constructor
function foo(){} //함수 선언문
const ber = function() {};  //함수 표현식

const baz = {
    x: function(){} //일반함수로 정의, 메서드로 인정하지 않음
};

new foo();  //foo{}
new bar();  //bar{}
new baz.x();  //x{}

const arrow = () => {};  //화살표 함수
new arrow();  //error

const obj = {
    x() {}  //메서드의 축약표현
};
new obj.x();  //error

//new 연산자
//일반 함수로 정의 -> new 연산자로 호출 -> 생성자 함수로 동작
function add(x, y) {
    return x + y;
}

let inst = new add();
//함수가 객체를 반환하지 않으므로 반환문은 무시되고 빈 객체를 생성하여 반환한다.
console.log(inst);  // {}

//객체를 반환하는 일반 함수
function createUser(name, role) {
    return { name, role };
}
//일반 함수를 생성자 함수로 호출
inst = new createUser('Lee', 'admin');
console.log(inst);  // {name: 'Lee', role: 'admin'}

//생성자 함수로 정의 -> new 연산자 미사용 > 일반 함수로 동작
function Circle5(radius){
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}

const circle5 = Circle5(5);
console.log(circle5);  //undefined

console.log(radius);  //5
console.log(getDiameter());  //10
circle5.getDiameter();  //error

//new.target
function Circle6(radius){
    //생성자 함수로 호출되지 않는다면 new.target은 undefined이다.
    if(!new.target){
        //생성자 함수로 호출되지 않았다면 재귀호출 하여 생성자 함수의 인스턴스를 반환한다.
        return new Circle6(radius);
    }
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}
//new 연산자 없이 호출했음에도 new.target을 통해 생성자 함수로써 호출한다.
const circle6 = Circle6(5);
console.log(circle6.getDiameter());