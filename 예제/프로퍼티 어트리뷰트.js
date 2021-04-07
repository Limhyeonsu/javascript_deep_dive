//1. 내부슬롯 내부메서드
const o = {};
//o.[[Prototype]] error
o.__proto__ // Object.prototype


//2. 프로퍼티 어트리뷰트와 디스크립터 객체
const person = {
    name: 'Lee'
};
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
//{ value: 'Lee', writable: true, enumerable: true, configurable: true }

person.age = 20;
console.log(Object.getOwnPropertyDescriptors(person));
//name: { value: 'Lee', writable: true, enumerable: true, configurable: true },
// age: { value: 20, writable: true, enumerable: true, configurable: true }


//3. 접근자 프로퍼티
const person2 = {
    //데이터 프로퍼티
    firstName: 'Ungmo',
    lastName: 'Lee',

    //접근자 프로퍼티
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ');
    }
};
//데이터 프로퍼티를 통한 프로퍼티 값 참조
console.log(person2.firstName+' ' +person2.lastName);

//접근자 프로퍼티를 통한 프로퍼티 값 저장 setter함수 실행
person2.fullName = 'Heegun Lee';
console.log(person2);  //{firstName: "Heegun", lasrName: "Lee", fullName: [Getter/Setter]}

//접근자 프로퍼티를 통한 프로퍼티 값 참조 getter함수 살행
console.log(person2.fullName);  //Heegun Lee

let descriptor = Object.getOwnPropertyDescriptor(person2, 'firstName');
console.log(descriptor);
//{value: 'Heegun', writable: true, enumerable: true, configurable: true}

descriptor = Object.getOwnPropertyDescriptor(person2, 'fullName');
console.log(descriptor);
//{get: [Function: get fullName], set: [Function: set fullName], enumerable: true, configurable: true}


//4. 프로퍼티 정의
const person3 = {};

Object.defineProperty(person3, 'firstName', {
    value: 'Ungmo',
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(person3, 'lastName', {
    value: 'Lee'
});

let descriptor2 = Object.getOwnPropertyDescriptor(person3, 'firstName');
console.log('firstName', descriptor2);
//firstName { value: 'Ungmo', writable: true, enumerable: true, configurable: true}

descriptor2 = Object.getOwnPropertyDescriptor(person3, 'lastName');
console.log('lastName', descriptor2);
//lastName { value: 'Lee', writable: false, enumerable: false, configurable: false}

console.log(Object.keys(person3));  //[ 'firstName' ] lastName은 enumerable이 falst라 열거되지 않음

person3.lastName = 'Kim';  //writeable이 false라 무시됨

delete person3.lastName;  //configurable이 false라 무시

descriptor2 = Object.getOwnPropertyDescriptor(person3, 'lastName');
console.log('lastName', descriptor2);
//lastName { value: 'Lee', writable: false, enumerable: false, configurable: false}

//접근자 프로퍼티 정의
Object.defineProperty(person3, 'fullName', {
    get() {
        return  `${this.firstName} ${this.lastName}`;
    },
    set(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
});

descriptor2 = Object.getOwnPropertyDescriptor(person3, 'fullName');
console.log('fullName', descriptor2);
//fullName { get: [Function: get], set: [Function: set], enumerable: true, configurable: true }

person3.fullName = 'Heegun Lee';
console.log(person3);  //{ firstName: 'Heegun', fullName: [Getter/Setter] }

//여러개의 프로퍼티 한 번에 정의
const person4 = {};

Object.defineProperties(person4, {
    firstName: {
        value: 'Ungmo',
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: 'Lee',
        writable: true,
        enumerable: true,
        configurable: true
    },
    fullName:{
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set(name){
            [this.firstName, this.lastName] = name.split(' ');
        },
        enumerable: true,
        configurable: true
    }
});
person4.fullName = "GilDong Hong";
console.log(person4);
// { firstName: 'GilDong', lastName: 'Hong', fullName: [Getter/Setter] }


//5. 객체 변경 방지
//객체 확장 금지
const person5 = { name: 'Kang'};
console.log(Object.isExtensible(person5));  //true 확장금지 객체가 아니다

Object.preventExtensions(person5);  //확장 금지 설정
console.log(Object.isExtensible(person5));  //false

person5.age = 20;  //확장금지 객체이므로 무시됨.
console.log(person5);  //{ name: 'Kang' }

//객체 밀봉
const person6 = { name: 'Kang'};  //밀봉된 객체가 아님
console.log(Object.isSealed(person6));  //false

Object.seal(person6);  //밀봉 설정
console.log(Object.isSealed(person6));  //true 밀봉된 객체는 configurable이 false다
//추가, 삭제, 어트리뷰트 재정의는 금지, 값 갱신은 가능함

//객체 동결
const person7 = { name: 'Kang'};
console.log(Object.isFrozen(person7));  //false 동결된 객체가 아님

Object.freeze(person7);  //동결 설정
console.log(Object.isFrozen(person7));  //true
//동결된 객체는 writable과 configurable이 false이다.
//추가, 삭제, 값 갱신, 어트리뷰트 재정의 금지

//불변 객체
const person8 = {
    name: 'Lee',
    address: {city: 'Seoul'}
};

Object.freeze(person8);
console.log(Object.isFrozen(person8));  //true
console.log(Object.isFrozen(person8.address));  //false 중첩까진 동결하지 못한다.

function deepFreeze(target){
    //객체가 아니거나 동결된 객체는 무시하고 객체이면서 동결되지 않은 객체만 동결한다.
    if(target && typeof target === 'object' && !Object.isFrozen(target)){
        Object.freeze(target);
        //모든 프로퍼티를 순회하며 재귀적으로 동결한다. Object.keys : 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환
        //forEach메서드는 배열을 순회하며 배열의 각 요소에 대하여 콜백 함수를 실행한다.
        Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target;
}

const person9 = {
    name: 'Lee',
    address: {city: 'Seoul'}
};

deepFreeze(person9);

console.log(Object.isFrozen(person9));  //true
console.log(Object.isFrozen(person9.address));  //true
