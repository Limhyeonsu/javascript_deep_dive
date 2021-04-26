//2.메서드
const obj = {
    x:1,
    //메서드
    foo() { return this.x; },
    //일반함수
    bar: function() { return this.x; }
};

console.log(obj.foo());  //1
console.log(obj.bar());  //1

//1)
const base = {
    name: 'Lee',
    sayHi() {
        return `Hi! ${this.name}`;
    }
};

const derived = {
    __proto__ : base,

    sayHi() {  //ES6의 메서드, [[HomeObject]]를 갖고 derived.prototype을 가리킨다.
        return `${super.sayHi()}. how are you doing?`;  //super는 base.prototype을 가리킨다.
    }
};
console.log(derived.sayHi());  //Hi Lee. how are you doing?

//2)
const derived2 = {
    __proto__ : base,

    sayHi : function() {
        return `${super.sayHi()}. how are you doing?`;  //error ES6의 메서드가 아니라 super카워드를 사용할 수 없다.
    }
};


//3. 화살표 함수
const multiply = (x, y) => x * y;
multiply(2,3);  //6

const arrow = (x,y) => {...};
const arrow = x => {...};  //매개변수가 하나인 경우 ()생략 가능
const arrow = () => {...};  //매개변수가 없는 경우 ()생략 불가

const power = x => x ** 2;
power(2);  //4
const power = x => {return x ** 2}; //위 표현과 동일하다
const arrow = () => const x = 1;  //표현식이 아닌 문이 오면 에러 발생

const create = (id, content) => ({id, content});
create(1, 'JavaScript');  // {id:1, content: "JavaScript"}

const create = (id, content) => { return {id, content}; }; //위 표현과 동일

const sum = (a,b) => {
    const result = a+b;
    return result;
};  //여러개의 문일때 {} 안에 넣어주어야함

const person = (name => ({
    sayHi() {return `Hi? My name is ${name}.`;}
}))('Lee');
console.log(person.sayHi());  //즉시 실행 함수로 사용 가능

//ES5
[1,2,3].map(function(v){
    return v * 2;
});
//ES6
[1,2,3].map(v => v * 2);


//4. Rest 파라미터
function foo(...rest){
    console.log(rest);
}
foo(1,2,3,4,5);

function foo2(param, ...rest){
    console.log(param);
    console.log(rest);
}
foo(1,2,3,4,5);

function bar(param1, param2, ...rest){
    console.log(param1);  //1
    console.log(param2);  //2
    console.log(rest);// [3,4,5]
}

bar(1,2,3,4,5);