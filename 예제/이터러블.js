//1.
//1) 이터러블
var isIterable = v => v !== null && typeof v[Symbol.iterator] === 'function';
isIterable([]);  //true
isIterable('');  //true
isIterable(new Map());  //true
isIterable(new Set());  //true
isIterable({});  //false

var arr = [1,2,3];
console.log(Symbol.iterator in arr);  //true
console.log([...arr]);  //[1,2,3]

var obj = {a: 1, b: 2};
console.log({...obj});  //{a:1, b:2}

//2) 이터레이터
var iterator = arr[Symbol.iterator]();  //이터레이터 반환
//next 호출시 순회하며 이터레이터 리절트 객체를 반환, 리절트 객체는 value, done 프로퍼티를 갖는 객체이다.
console.log(iterator.next());  //{ value: 1, done: false }
console.log(iterator.next());  //{ value: 2, done: false }
console.log(iterator.next());  //{ value: 3, done: false }
console.log(iterator.next());  //{ value: undefined, done: true }


//3. for... of 문
for(const item of [1,2,3]){
    console.log(item);  //1 2 3
}


//6. 사용자 정의 이터러블
//1)
const fibonacci = {
    [Symbol.iterator]() {
        let[pre, cur] = [0, 1];
        const max = 10;

        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                return{ value: cur, done: cur >= max}
            }
        }
    }
}
for( const num of fibonacci) {
    console.log(num);  //1 2 3 5 8
}
//스프레드 문법의 대상이 될 수 있다.
arr = [...fibonacci];
console.log(arr);  //[ 1, 2, 3, 5, 8 ]
//배열 디스트럭처링 할당의 대상이 될 수 있다.
const [first, second, ...rest] = fibonacci;
console.log(first, second, rest);  //1 2 [ 3, 5, 8 ]

//2) 이터러블을 생성하는 함수
const fibonacciFunc = function(max){
    let[pre, cur] = [0, 1];

    return {
        [Symbol.iterator]() {
            return {
                next() {
                    [pre, cur] = [cur, pre + cur];
                    return{ value: cur, done: cur >= max}
                }

            };

        }
    }
};

for( const num of fibonacciFunc(10)) {
    console.log(num);  //1 2 3 5 8
}