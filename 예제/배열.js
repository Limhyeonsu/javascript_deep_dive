//1. 배열이란
const arr = ['apple', 'banana', 'orange'];
arr.length; //3
arr.construntor === Array;  //true
Object.getPrototypeOf(arr) === Array.prototype;  //true

//3. length 프로퍼티
const arr2 = [1,2,3,4,5];
arr2.length = 3;
console.log(arr2);  //[1,2,3]

const arr3 = [1];
arr3.length = 3;
console.log(arr3.length);  //3
console.log(arr3);  //[1, empty * 2]

//희소배열
const sparse = [, 2, , 4];
console.log(sparse.length);  //4
console.log(sparse);  // [empty, 2, empty, 4]

//Array.from
Array.from({length : 2, 0: 'a', 1: 'b'});  //['a', 'b']
Array.from('Hello');  //['H','e','l','l','o']
Array.from({length: 3});  //[undefined, undefined, undefined]
Array.from({length: 3}, (_, i) => i);  //[0,1,2]


//7. 배열의 요소삭제
var arr4 = [1,2,3];
delete arr4[1];
console.log(arr4);  //[1, empty, 3]
console.log(arr4.length);  //3

arr4 = [1,2,3];
arr4.splice(1,1);
console.log(arr4);  //[1,3]
console.log(arr4.length);  //2


//8. 배열 메서드
//1)
arr4.indexOf(1);  //0
arr4.indexOf(2) === -1;  //0
arr4.includes(1);
!arr4.includes(2);

//2)
const arr5 = [1,2];
let result = arr5.push(3,4);
console.log(result);  //4 length 값 반환
console.log(arr5);  //[1,2,3,4]

arr5[arr.length] = 5; //push 메서드보다 속도가 빠르다
console.log(arr5); //[1,2,3,4,5]

const newArr = [...arr5, 6];  //ES6 스프레드 문법
console.log(arr5);  //[1,2,3,4,5,6]

//3) stack 생성자 함수
const Stack = (function() {
    function Stack(array = []){
        if(!Array.isArray(array)) {
            throw new TypeError(`${array} is not an array`);
        }
        this.array = array;
    }
    Stack.prototype = {
        construntor: Stack,

        push(value){
            return this.array.push(value);
        },
        pop() {
            return this.arr.pop();
        },
        entries() {
            return [...this.array];
        }
    };
    return Stack
}());

const stack = new Stack([1,2]);
console.log(stack.entries()); //[1,2]
stack.push(3);
console.log(stack.entries);  //[1,2,3]
stack.pop();
console.log(stack.entries);  //[1,2]

//4)
const arr6 = [1,2];
let result2 = arr6.unshift(3,4);
console.log(result2);  //4
console.log(arr6);  //[3,4,1,2]

//스프레드 문법
const newArr2 = [3, ...arr6];
console.log(newArr2); //[3,1,2]

//5) 큐 생성자 함수
const Queue = (function(){
    function Queue(array = []) {
        if(!Array.isArray(array)) {
            throw new TypeError(`${array} is not un array.`);
        }
        this.array = array;
    }
    Queue.prototype = {
        construntor: Queue,
        enqueue(value) {
            return this.array.push(value);
        },
        dequeu() {
            return this.array.shift();
        },
        entries() {
            return [...this.array];
        }
    };
    return Queue;
})();

const queue = new Queue([1,2]);
console.log(queue.entries());  //[1,2]
queue.enqueue(3);
console.log(queue.entries());  //[1,2,3]
queue.dequeu();
console.log(queue.entries());  //[2,3]

//6)
var arr7 = [1,2];
var arr8 = [3,4];

var result = arr7.concat(arr8);
console.log(result); //[1,2,3,4]

const arr = [3,4];

arr.unshift([1,2]);
arr.push([5,6]);
console.log(arr);  //[[1,2],3,4,[5,6]];

var result = [1,2].concat([3,4]);
result = result.concat([5,6]);
console.log(result); //[1,2,3,4,5,6]

//7)
const todos = [
    {id: 1, content: 'HTML', completed: false},
    {id: 2, content: 'CSS', completed: true},
    {id: 3, content: 'Javascript', completed: false},
];
const _todos = todos.slice();  //얕은 복사
console.log(_todos === todos);  //false
console.log(_todos[0] === todos[0]);  //true 배열의 참조 값이 같다 (얕은 복사)

//8)
[1,[2,[3,[4]]]].flat(); //[1,2,[3,4]]  기본 값은 1임
[1,[2,[3,[4]]]].flat(1); //[1,2,[3,4]]

[1,[2,[3,[4]]]].flat(2);  //[1,2,3,[4]]
[1,[2,[3,[4]]]].flat(2).flat();  //[1,2,3,[4]]

[1,[2,[3,[4]]]].flat(Infinity);  //[1,2,3,4]


//9. 배열 고차 함수
const fruits = ['Banana', 'Orange', 'Apple'];
fruits.sort();  //오름차순
fruits.reverse();  //내림차순

const points = [40, 100, 1, 5, 2, 25, 10];
points.sort((a,b) => a - b); //비교함수의 반환값이 0보다 작으면 a를 우선하여 정렬

//객체를 요소로 갖는 배열 정렬
const todos = [
{id: 4, content: 'JavaScript'},
{id: 1, content: 'HTML'},
{id: 2, content: 'CSS'}
];

function compare(key){
    return (a,b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1: 0));
}
//id를 기준으로 오름차순 정렬
todos.sort(compare('id'));
//content를 기준으로 오름차순 정렬
todos.sort(compare('content'));

//forEach
[1,2,3].forEach((item, index, arr) => {
    console.log(`요소값 ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
});
/*
요소값: 1, 인덱스: 0, this: [1,2,3]
요소값: 2, 인덱스: 1, this: [1,2,3]
요소값: 3, 인덱스: 2, this: [1,2,3]
*/

//map
const numbers = [1,4,9];
const roots = numbers.map(item => Math.sqrt(item));
console.log(roots);  //[1,2,3] 새로운 배열 반환
console.log(numbers);  //[1,4,5] 원본은 변경되지 않음

class Prefixer {
    construntor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        return arr.map(function (item){
            return this.prefix + item;
        }, this); //map 메서드의 콜백함수 내부에서 this로 사용할 객체를 전달
    }
}
const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select']));

//filter
const numbers = [1,2,3,4,5];
const odds = numbers.filter(item => item % 2);
console.log(odds);  //[1,3,5]

//reduce
//1) 두개의 인수 콜백함수와 초기값 0을 전달받아 자신을 호출한 배열의 모든 요소를 누적한 결과를 반환한다.
const sum = [1,2,3,4].reduce((accmulator, currentValue, index, array) => accmulator + currentValue, 0);
console.log(sum);  //10

//2) 평균구하기
const values = [1,2,3,4,5,6];
const average = values.reduce((acc, cur, i, { length}) =>{
    return i === length - 1 ? (acc+cur) / length : acc + cur;
}, 0);
console.log(average);

//3) 최대값
const max = values.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
console.log(max);  //6

//4) 중첩 배열 평탄화
const values = [1, [2, 3], 4, [5, 6]];
const flatten = values.reduce((acc, cur) => acc.concat(cur), []);
console.log(flatten);  // [1,2,3,4,5,6]

//some
[5,10,15].some(item => item > 10);  //true
[5,10,15].some(item => item <  0);  //false

//every
[5,10,15].every(item => item > 3);  //true
[5,10,15].every(item => item > 10);  //false

//find
const users = [
    {id: 1, name: 'Lee'},
    {id: 2, name: 'Kim'},
    {id: 3, name: 'Choi'},
    {id: 4, name: 'Park'},
];
users.find(user => user.id === 2);  //{id: 2, name: 'Kim'}

//findIndex
users.findIndex(users => users.id === 2);  //1
users.findIndex(users => users.name === 'Park');  //3

//flatMap
const arr = ['hello', 'world'];
arr.map(x => x.split('')).flat(); //['h','e','l','l','o','w','o','r','l','d']
arr.flatMap(x => x.split('')); // ['h','e','l','l','o','w','o','r','l','d']