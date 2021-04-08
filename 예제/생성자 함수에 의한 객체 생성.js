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
