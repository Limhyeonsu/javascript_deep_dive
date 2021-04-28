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
