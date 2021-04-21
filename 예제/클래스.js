//2. 클래스 정의
class Person {  //클래스 선언문
    constructor(name) {  //생성자
        //인스턴스 생성 및 초기화
        this.name = name;
    }
    //프로토타입 메서드
    sayHi(){
        console.logg(`Hi my name is ${this.name}`);
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