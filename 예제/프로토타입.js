//1. 객체지향 프로그래밍
const person = {
    //이름과 주소의 속성을 갖는 person객체
    name: 'Kim',
    address: 'Seoul'
};
console.log(person);  //{ name: 'Kim', address: 'Seoul' }

const circle = {
    radius: 5, //반지름
    //원의 지름
    getDiameter(){
        return 2 * this.radius;
    },
    //원의 둘레
    getPerimeter(){
        return 2 * Math.PI * this.radius;
    },
    //원의 넓이
    getArea(){
        return Math.PT * this.radius ** 2;
    }
};
console.log(circle); //{ radius: 5, getDiameter: [Function], getPerimeter: [Function], getArea: [Function]}
console.log(circle.getDiameter());  //10
console.log(circle.getPerimeter());  //31.41592653589793
console.log(circle.getArea()); //NaN이 뜸..왜지..?


//2. 상속과 프로토타입
//1) 인스턴스가 메서드를 중복 생성
function Circle(radius){
    this.radius = radius;
    this.getArea = function() {
        return Math.PI * this.radius ** 2;
    };
}
//Circle생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는 getArea메서드를 중복 생성한다.
const circle1 = new Circle(1);
const circle2 = new Circle(2);
console.log(circle1.getArea === circle2.getArea);  //false
console.log(circle1.getArea());  //3.141592653589793
console.log(circle2.getArea());  //12.566370614359172

//2) 인스턴스가 메서드를 공유
function Circle2(radius){
    this.radius = radius;
}
//생성자 함수가 생성한 모든 인스턴스가 getArea를 공유해서 사용할 수 있게 프로토타입에 추가한다.
Circle2.prototype.getArea = function() {
    return Math.PI * this.radius ** 2;
};
const circle3 = new Circle2(1);
const circle4 = new Circle2(2);
console.log(circle3.getArea === circle4.getArea);  //true
console.log(circle3.getArea());  //3.141592653589793
console.log(circle4.getArea());  //12.566370614359172


//3. 프로토타입 객체
//1)
const obj = {};
const parent = {x: 1};

obj.__proto__; //get __proto__호출
obj.__proto__ = parent;  //set __proto__ 호출되어 obj 객체의 프로토타입 교체
console.log(obj.x);

//2)
const person2 = {name: 'Lee'};
//person2객체는 __proto__객체를 소유하고 있지 않다.
console.log(person2.hasOwnProperty('__proto__'));  //false
//__proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티다.
//모든객체는 Object.prototype 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
console.log({}.__proto__ === Object.prototype);  //true

//함수객체의 prototype 프로퍼티
(function () {}).hasOwnProperty('prototype');  //true 함수객체는 prototype 프로퍼티를 소유한다.
({}).hasOwnProperty('prototype');  //false  일반 객체는 prototype 프로퍼티를 소유하지 않는다.

function person3(name) {
    this.name = name;
}
const me = new person3('Park');
console.log(person3.prototype === me.__proto__); //true 동일한 프로토타입을 가리킨다.
console.log(me.constructor === person3);  //true me객체의 생성자 함수는 Person3이다.


//5. 프로토타입 생성시점
console.log(Person4.prototype);  //{constructor: function}
//생성자 함수
function Person4(name){
    this.name = name;
}

//non-constructor
const Person5 = name => {
    this.name = name;
};
console.log(Person5.prototype); //undefined


//6. 프로토타입
function Person6(name){
    this.name = name;
}
Person6.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
};
const me2 = new Person6('Lee');
const you = new Person6('Kim');

me2.sayHello();  //Hi! My name is Lee
you.sayHello();  //Hi! My name is Kim


//7. 프로토타입 체인
//me3 객체가 Object.prototype 객체의 메서드인 hasOwnProperty를 호출할 수 있다.
//me3 객체가 Person6.prototype뿐만 아니라 Object.prototype도 상속 받았다는 것을 의미한다.
const me3 = new Person6('Lim');
console.log(me3.hasOwnProperty('name'));  //true
Object.getPrototypeOf(me3) === Person6.prototype;  //true

