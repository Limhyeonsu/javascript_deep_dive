//1. 클로저
//1)
const x = 1;
function outerFunc() {
    const x = 10;

    function innerFunc() {
        console.log(x);  //10 outetFunc()에 있는 x에 접근 가능
    }
    innerFunc();
}
outerFunc();

//2)
const x = 1;
function outerFunc() {
    const x = 10;
    innerFunc();
}
function innerFunc() {
    console.log(x);  //1 outetFunc()에 있는 x에 접근 불가
}
outerFunc();


//2. 함수 객체의 내부슬롯 [[Environment]]
const x = 1;
function foo() {
    const x = 10;
    //함수 호출 위치와 상위 스코프는 아무런 관계가 없다.
    bar();
}
function bar(){  //bar 함수는 자신의 상위 스코프, 즉 전역 렉시컬 환경을 [[Environment]]에 저장하여 기억한다.
    console.log(x);
}

foo();
bar();


//3. 클로저와 렉시컬 환경
const y = 1;

function outer() {
    const y = 10;
    const inner = function () {console.log(x);};
    return inner;
}

const innerFunc = outer();
//outer 함수가 종료되어 실행 컨텍스트에서 사라졌음에도 지역변수 y를 사용할 수 있다
//외부 함수보다 중첩 함수가 더 오래 살아 남는 것 ==> 클로저
innerFunc();  //10  


//4. 클로저의 활용
//1) 오류를 발생시킬 코드이다. 전역변수로 선언되면 누구나 접근할 수 있기 때문에 의도치 않게 상태가 변경될 수 있다.
let num = 0;
const increase = function() {
    return ++num;
};
console.log(increase());  //1
console.log(increase());  //2
console.log(increase());  //3

//2) 변수 num을 지역변수로 넣으므로써 아무나 접근할 수 없지만 함수 호출시 0으로 초기화 되기 때문에 상태를 유지하지 못한다.
const increase = function () {
    let num = 0;

    return ++num;
}
console.log(increase()); //1
console.log(increase()); //1
console.log(increase()); //1

//3) 클로저를 이용하여 상태 유지
const increase = (function () {
    let num = 0;
    //클로저
    return function() {
        return ++num;
    };
}());

console.log(increase());  //1
console.log(increase());  //2
console.log(increase());  //3

//4) 각각 독립된 렉시컬 환경을 갖기 때문에 상태가 연동되지 않는다.
function makeCounter(predicate){
    let counter = 0;
    //클로저를 반환
    return function() {
        //인수로 전달 받은 보조 함수에 상태 변경을 위임한다.
        counter = predicate(counter);
        return counter;
    };
}
//보조함수
function increase(n) {
    return ++n;
}
function decrease(n) {
    return --n;
}
//함수로 함수를 생성한다.
const increaser = makeCounter(increase);
console.log(increaser());  //1
console.log(increaser());  //2

//increaser 함수와는 별개의 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동되지 않는다.
const decreaser = makeCounter(decrease);
console.log(decreaser());  //-1
console.log(decreaser());  //-2

//5) 렉시컬 환경을 공유하는 클로저
const counter = (function () {
    let counter = 0;

    return function(predicate){
        counter = predicate(counter);
        return counter;
    };
}());
function increase(n) {
    return ++n;
}
function decrease(n) {
    return --n;
}
console.log(counter(increase));  //1
console.log(counter(increase));  //2
console.log(counter(decrease));  //1
console.log(counter(decrease));  //0


//5. 캡슐화와 정보은닉
//1) 
function Person(name, age){
    this.name = name;  //public
    let _age = age;  //private

    //인스턴스 메서드
    this.sayHi = function () {
        console.log(`Hi! My name is ${this.name}. I am ${_age}`);
    };
}
const me = new Person('Lee', 20);
me.sayHi();  // Hi my name is Lee. I am 20
console.log(me.name);  //Lee
console.log(me._age);  //undefined

const you = new Person('Kim', 30);
you.sayHi();
console.log(you.name);  //Kim
console.log(you._age);  //undefined

//2)
function Person(name, age){
    this.name = name;  //public
    let _age = age;  //private
}
//프로토타입 메서드
Person.prototype.sayHi = function() {
    console.log(`Hi! My name is ${this.name}. I am ${_age}`); // 지역변수 _age를 참조할 수 없다.
};

//3)
const Person = (function () {
    let _age = 0;  //private

    function Person(name, age){
        this.name = name;
        _age = age;
    }

    Person.prototype.sayHi = function() {
        onsole.log(`Hi! My name is ${this.name}. I am ${_age}`);
    };
    return Person;
}());

const me = new Person('Lee', 20);
me.sayHi();
console.log(me.name);  //Lee
console.log(me._age);  //undefined

const you = new Person('Kim', 30);
you.sayHi();
console.log(you.name);  //Kim
console.log(you._age);  //undefined


//6. 자주 발생하는 실수
//var로 선언한 변수는 함수레벨 스코프를 갖기 때문에 for문 안에서 선언되어 있어도 전역 변수이다. 따라서 바르게 동작하지 않는다.
var funcs = [];
for(var i=0; i<3; i++){
    funcs[i] = function() { return i;};
}
for(var j=0; j<funcs.length; j++){
    console.log(funcs[j]());
}

//클로저를 사용해서 바르게 동작하도록 한다.  *let변수를 사용하면 아무런 문제 없다.
var funcs = [];
for(var i=0; i<3; i++){
    funcs[i] = (function(id) { 
        return function () {
            return id;
        };
    }(i));
}

for(var j=0; j<funcs.length; j++){
    console.log(funcs[j]());
}



