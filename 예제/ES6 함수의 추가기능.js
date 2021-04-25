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