//1. this키워드
const circle = {
    radius: 5,
    getDiameter() {
        return 2 * this.radius;
    }
}
console.log(circle.getDiameter());  //10

function Circle(radius) {
    this.radius = radius;
}
Circle.prototype.getDiameter = function() {
    return 2 * this.radius;
};
const circle2 = new Circle(5);
console.log(circle2.getDiameter());  //10

//this는 어디서든지 참조 가능하다.
console.log(this);  //window

function square(number) {
    console.log(this);  //window
    return number * number;
}
square(2);

const person = {
    name: 'Lee',
    getName() {
        console.log(this);  // {name: "Lee", getName: function}
        return this.name;
    }
};
console.log(person.getName());  //Lee

function Person(name) {
    this.name = name;
    console.log(this);  //Person {name: "Lee"}
}
const me = new Person('Lee');


//2. 함수 호출방식과 this바인딩
function foo() {
    console.log("foo's this: ", this);  //window
    function bar() {
        console.log("bar's this: ", this);  //window
    }
    bar();
}
foo();

function foo(){
    'use strict';
    console.log("foo's this: ", this);  //undefined
   function bar() {
        console.log("bar's this: ", this);  //undefined
    }
    bar();
}
foo();

//중첩함수와 외부함수의 this불일치
var value = 1;
const obj = {
    value: 100,
    foo() {
        console.log("foo's this: ", this); //{value: 100, foo: function}
        //콜백함수 내부의 this에는 전역 객체 바인딩
        setTimeout(function() {
            console.log("callback's this: ", this);  //window
            console.log("callback's this.value: ", this.value);  //1
        }, 100);
    }
};
obj.foo();

//일치
var value = 1;
const obj = {
    value: 100,
    foo() {
        //this 바인딩(obj)을 변수 that에 할당
       const that = this;
        //콜백 함수 내부에서 this 대신 that을 참조한다.
        setTimeout(function() {
            console.log(that.value);  //100
        }, 100);
    }
};
obj.foo();

//명시적 바인딩
var value = 1;
const obj = {
    value: 100,
    foo() {
        //콜백 함수에 명시적으로 this 바인딩
            setTimeout(function() {
            console.log(this.value);  //100
        }.bind(this), 100);
    }
};
obj.foo();

//화사표 함수의 this는 상위 스코프의 this를 가리킨다.
var value = 1;
const obj = {
    value: 100,
    foo() {
        setTimout(() => console.log(this.value), 100);  //100
    }
};
obj.foo();

//메서드 호출
const person = {
    name: 'Lee',
    getName() {
        return this.name;
    }
};
console.log(person.getName());  //Lee

const anotherPerson = {
    name: 'Kim'
};

//다른 객체의 프로퍼티에 할당, 다른 변수에 할당
anotherPerson .getName = person.getName;
console.log(anotherPerson.getName());  //Kim
const getName = person.getName;
console.log(getName()); // ''  일반 함수로 호출 -> window.name

//생성자 함수 호출
function Circle(radius){
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}
const circle1 = new Circle(5);
const circle2 = new Circle(10);
console.log(circle1.getDiameter());  //10
console.log(circle2.getDiameter());  //20
//일반함수의 호출
const circle3 = Circle(15);
console.log(circle3);  //undefined
console.log(radius); //15

//apply/call/bind 메서드에 의한 간접 호출
//1)
function getThisBinding() {
    return this;
}
const thisArg = {a:1};
console.log(getThisBinding());  //window
console.log(getThisBinding.apply(thisArg));  //{a: 1}
console.log(getThisBinding.call(thisArg));  //{a: 1}

//2)
function getThisBinding2() {
    console.log(arguments);
    return this;
}
const thisArg = {a:1};
console.log(getThisBinding2.apply(thisArg, [1,2,3]));  //Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
console.log(getThisBinding2.call(thisArg,1,2,3));  //Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

//3)
function convertArgsToArray() {
    console.log(arguments);
    const arr = Array.prototype.slice.call(arguments);
    console.log(arr);
    return arr;
}
concertArgsToArray(1,2,3);  //[1,2,3]