//2. 클래스 정의
class Person {  //클래스 선언문
    constructor(name) {  //생성자
        //인스턴스 생성 및 초기화
        this.name = name;
    }
    //프로토타입 메서드
    sayHi(){
        console.log(`Hi my name is ${this.name}`);
    }
    //정적 메서드
    static sayHello(){
        console.log('Hello');
    }
}
const me = new Person('Lee');

console.log(me.name);  //Lee
me.sayHi();
me.sayHello();

//4. 인스턴스 생성
const Person2 = class MyClass{};
const me2 = new Person2();
console.log(MyClass);  //error
const you = new MyClass();  //error


//5. 메서드
class Person3 {
    //생성자
    constructor(name){
        this.name = name;
    }

    //정적 메서드
    static sayHi(){
        console.log('Hi');
    }
} 

Person3.sayHi();  //정적 메서드는 인스턴스로 호출하지 않고 클래스로 호출한다.
const me3 = new Person3('Lee');
me.sayHi();  //error 정적메서드는 인스턴스로 호출 불가

//표준 빌트인 객체의 정적 메서드
Math.max(1,2,3);
Number.isNaN(NaN);
JSON.stringify({a:1});
Object.is({},{});
Reflect.has({a:1},'a');


//7. 프로퍼티
//접근자 프로퍼티
class Person4 {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //접근자 함수 fullName()
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

const me4 = new Person4('abc', 'Lee');

console.log(`${me.firstName} ${me.lastName}`);  //abc Lee

//setter 함수 호출
me4.fullName = 'qwer Kim';
console.log(me4);  //firstName:"qwer", lastName:"Lee"
//getter 함수 호출
console.log(me4.fullName);
console.log(Object.getOwnPropertyDescriptor(Person4.prototype, 'fullName'));

//클래스 필드
class Person5 {
    name = 'Lee';  //클래스 필드 정의
    this.name2 = '';  //error 클래스 필드를 this에 바인딩하면 안됨

    getName = function() {  //클래스 필드에 함수를 할당할 수 있다. 이 경우 함수는 인스턴스 메서드가 된다.
        return this.name;
    }
}

//private 필드 정의 제안
class Person6 {
    #name = '';

    constructor(name){
        this.#name = name;
    }
}

const me5 = new Person6('Lee');

console.log(me5.#name); //error private필드는 클래스 외부에서 참조 불가

class Person7 {
    
    constructor(name){
        #name = '';  //error private 필드는 클래스 몸체에서 정의해야한다.
    }
}

//static 필드 정의 제안
class MyMath {
    //static public필드정의
    static PI = 22/7;
    //static private 필드 정의
    static #num = 10;
    //static 메서드
    static increment() {
        return ++MyMath.#num;
    }
}

console.log(MyMath.PI);  //3.14285714..
console.log(MyMath.increment());  //11


//8. 상속에 의한 클래스 확장
//클래스 상속
class Animal {
    constructor(age, weight){
        this.age = age;
        this.weight = weight;
    }

    eat() { return 'eat'; }
    move() { return 'move'; }
}

class Bird extends Animal {
    fly() { return 'fly'; }

}
const bird = new Bird(1, 5);

console.log(bird);  //Bird {age:1, weight: 5}
console.log(bird instanceof Bird);  //true
console.log(bird instanceof Animal);  //true

console.log(bird.eat());  //eat
console.log(bird.move());  //movw
console.log(bird.fly());  //fly

//동적 상속
//1)
function Base(a){
    this.a = a;
}
//생성자 함수를 상속받는 서브클래스
class Derived extends Base {}

const derived = new Derived(1);
console.log(derived); //Derived {a:1}

//2)
function Base1() {}
class Base2 {}

let condition = true;
//조건에 따라 상속 대상을 동적으로 결정
class Derived2 extends (condition ? Base1 : Base2){}
const derived2 = new Derived2;
console.log(derived2); // Derived2 {}
console.log(derived2 instanceof Base1);  //true
console.log(derived2 instanceof Base2);  //false

//서브 클래스의 constructor
class Base3 {
    constructor() {}  //constructor를 생략하면 암묵적으로 생성됨
}

class Derived3 extends Base3 {
    constructor(...args) { super(...args); } //constructor 생략시 암묵적으로 생성
}

const derived3 = new Derived3();
console.log(derived3);

//상속 클래스의 인스턴스 생성과정
//수퍼클래스
class Rectangle { 
    constructor(width, height) {
        this.weight = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    toString() {
        return `width = ${this.width}, height = ${this.height}`;
    }
}

//서브 클래스
class ColorRectangle extends Rectangle {
    constructor(width, height, color){
        super(width, height);
        this.color = color;
    }
    //메서드 오버라이딩
    toString() {
        return super.toString() + `, color = ${this.color}`;
    }
}

const ColorRectangle = new ColorRectangle(2, 4, 'red');
console.log(ColorRectangle);

console.log(ColorRectangle.getArea());  //8
console.log(ColorRectangle.toString());  //width = 2, height = 4, color = red

//표준빌트인 생성자함수 확장
//Array생성자 함수를 상속받은 클래스는 Array.prototype과 MyArray.prototype의 모든 메서드를 사용할 수 있다.
class MyArray extends Array {  

    //static get [Symbol.species]() {return Array;} 모든 메서드가 Array타입의 인스턴스를 반환 -> MyArray의 메서드와 메서드 체이닝이 불가능하다
    uniq() {
        return this.filter((v, i, self) => self.indexOf(v) === i);
    }

    avarage() {
        return this.reduce((pre, cur) => pre + cur, 0) / this.length;
    }
}

const myArray = new MyArray(1,1,2,3);
console.log(myArray);  //MyArray(4) [1,1,2,3]

console.log(myArray.uniq());  //MyArray(3) [1,2,3]
console.log(myArray.avarage()); //1.75