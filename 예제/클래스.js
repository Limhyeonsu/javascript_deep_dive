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
const me = new Person3('Lee');
me.sayHi();  //error 정적메서드는 인스턴스로 호출 불가

//표준 빌트인 객체의 정적 메서드
Math.max(1,2,3);
Number.isNaN(NaN);
JSON.stringify({a:1});
Object.is({},{});
Reflect.has({a:1},'a');