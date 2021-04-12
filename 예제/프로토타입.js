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


//8. 오버라이딩, 프로퍼티 섀도잉
const Person7 = (function() {
    //생성자 함수
    function Person7(name){
        this.name = name;
    }
    //프로토타입 메서드
    Person7.prototype.sayHello = function() {
        console.log(`Hi My name is ${this.name}`);
    };
    //생성자 함수 반환
    return Person7;
}());
const me4 = new Person7('Lee');
//인스턴스 메서드
me4.sayHello = function () {  //오버라이딩
    console.log(`hey My name is ${this.name}`);
};
me4.sayHello();  //Hey my name is Lee 인스턴스 메서드를 반환한다.

//프로퍼티 삭제
delete me4.sayHello;  //인스턴스 메서드 삭제
me.sayHello();  //Hi my name is Lee 프로토타입 메서드 호출

delete me4.sayHello;  //프로토타입 메서드가 삭제되지 않는다 (하위 객체를 통해 프로토타입 프로퍼티를 변경, 삭제 불가)
me.sayHello();  //Hi my name is Lee

//프로토타입 메서드를 삭제하려면 직접 접근해야한다.
delete Person7.prototype.sayHello;


//9. 프로토타입의 교체
//생성자 함수에 의한 프로토타입 교체
const Person8 = (function() {
    function Person8(name){
        this.name = name;
    }
    //생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
    Person8.prototype = {

        //constructor: Person8, constructor 프로퍼티 추가 + 생성자 함수와 연결
        sayHello(){
            console.log(`Hi My name is ${this.name}`);
        }
    };
    //생성자 함수 반환
    return Person8;
}());
const me5 = new Person8('Lee');
//프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수간의 연결이 파괴된다.
console.log(me5.constructor === Person8);  //false
//프로토타입 체인을 따라 Object.prototype의 constructor 프로퍼티가 검색된다.
console.log(me5.constructor === Object);  //true

//인스턴스에 의한 프로토타입 교체
function Person9(name) {
    this.name = name;
}
const me6 = new Person9('Kim');

const parant = {  //프로토타입으로 교체할 객체
     //constructor: Person9, constructor 프로퍼티 추가 + 생성자 함수와 연결
    sayHello() {
        console.log(`Hi My name is ${this.name}`);
    }
};
//Person9.prototype = parant;  생성자 함수의 prototype 프로퍼티와 프로토타입 간의 연결 설정

Object.setPrototypeOf(me6, parent);  //me6객체의 프로토타입을 parent 객체로 교체
me6.sayHello();  //Hi my name is Lee


//10. instanceof 연산자
console.log(me6 instanceof Person9);  //true
console.log(me6 instanceof Object);  //true

const Person10 = (function() {
    function Person10(name){
        this.name = name;
    }
    Person10.prototype = {
        sayHello(){
            console.log(`Hi My name is ${this.name}`);
        }
    };
    return Person10;
}());
const me7 = new Person10('cho');
//constructor 프로퍼티와 생성자 함수간의 연결이 파괴되어도 instanceof는 아무런 영향을 받지 않는다.
console.log(me7.constructor === Person10)  //false
console.log(me7 instanceof Person10)  //true
console.log(me7 instanceof Object)  //true


//11. 직접상속
//Object.create에 의한 직접상속
let obj = Object.create(null);
console.log(Object.getPropertyOf(obj) === null);  //true
console.log(obj.toString());  //error Object.prorotype을 상속받지 못했다.

obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype);  //true

obj = Object.create(Object.prototype, {
x: {value: 1, writable: true, eumerable: true, confogurable: true}
});

console.log(obj.x); //1
console.log(Object.getPropertyOf(obj) === Object.property);  //true

const myProto = {x: 10};
obj = Object.create(myProto);
console.log(obj.x);  //10
console.log(Object.getPrototypeOf(obj) === myProto);  //true

function Person11(name){
    this.name = name;
}

obj = Object.create(Person11.prototype);
obj.name = 'Lee';
console.log(obj.name);  //'Lee'
console.log(Object.getPrototypeOf(obj) === Person.prototype);  //true

//객체 리터럴 내부에서 __proto__에 의한 직접상속
const myProto = {x: 10};
const obj = {
    y: 20,
    __proto__: myProto
};
console.log(obj.x, obj.y);  //10 20
console.log(Object.getPrototype(obj) === myProto);  //true


//12. 정적프로퍼티/메서드
function Person12(name){  //생성자 함수
    this.name = name;
}
//프로토타입 메서드
Person12.prototype.sayHello = function() {
    console.log(`Hi! My name is ${this.name}`);
};
//정적 프로퍼티
Person12.staticProp = 'static prop';
//정적 메서드
Person12.staticMethod = function() {
    console.log('staticMethod');
};
const me = new Person12('Lee');
Person12.staticMethod();  //staticMethod
me.staticMethod();  //error

//this미사용시 정적메서드로 변경가능
function Fooo() {}

Fooo.prototype.x = function() {  //this를 참조하지 않는 프로토타입 메서드는 정적 메서드로 변경해도 동일한 효과를 얻음
    console.log('x');
};
const fooo = new Fooo();
//프로토타입 메서드를 호출하려면 인스턴스를 생성해야한다.
fooo.x();  //x
Fooo.x = function() {  
    console.log('x');
};
//정적 메서드는 인스턴스를 생성하지 않아도 호출할 수 있다.
Fooo.x();  //x


//13. 프로퍼티 존재 확인
const personn = {
    name: 'Bae',
    address: 'Seoul'
};

console.log('name' in personn); //true  personn객체의 name 프로퍼티 존재함
console.log('address' in personn); //true  personn객체의 address 프로퍼티 존재함
console.log('age' in personn); //false  personn객체의 age 프로퍼티 존재하지 않음
//personn 객체가 속한 프로토타입 체인상의 존재하는 모든 프로토타입에서 검색하기 때문에 true가 나옴
console.log('toString' in personn); 
//ES6에서 Reflect.has 메서드가 동일한 동작을 한다.
console.log(Reflect.has(personn, 'name'));  //true
console.log(Reflect.has(personn, 'toString'));  //true

//Object.prototype.hasOwnProperty 메서드
console.log(personn.hasOwnProperty('name'));  //true console.log(personn.hasOwnProperty('age'));  //false
console.log(personn.hasOwnProperty('toString'));  //false 객체 고유의 프로퍼티 키인지를 확인하기 때문에 상속받은 프로퍼티 키인 경우 false반환


//14. 프로퍼티 열거
//1)
const peroon = {
    name: 'Lee',
    address: 'Seoul'
};
for(const key in peroon ){
    console.log(key+": "+peroon [key]);
}
//name: Lee
//address: Seoul

//2)
const peroon2 = {
    name: 'Lee',
    address: 'Seoul',
    __proto__: {age: 20}
};
for(const key in peroon2 ){
    console.log(key+": "+peroon2 [key]);
}
//name: Lee
//address: Seoul
//age: 20

//3)
const sym = Symbol();
const objj = {
    a: 1,
    [sym]: 10
};
for(const key in objj  ){
    console.log(key+": "+objj [key]);  //a: 1   심벌인 프로퍼티는 열거하지 않음
}

//4)
const peroon3 = {
    name: 'Lee',
    address: 'Seoul',
    __proto__: {age: 20}
};
for(const key in peroon3 ){
    if(!persoon3.hasOwnProperty(key)) continue;  //객체 자신의 프로퍼티만 열거
    console.log(key+": "+peroon2 [key]);
}

//Object.keys/values/entries 메서드
console.log(Object.key(peroon3 ));  //["name", "address"]
console.log(Object.values(peroon3 ));  //["Lee", "Seoul"]
console.log(Object.entries (peroon3 ));["name", "address"], ["Lee", "Seoul"]