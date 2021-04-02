//함수 호출
var result = add(2, 5);
console.log(result);  //7

//1. 함수 리터럴
var f = function add(x, y){
    return x + y;
}
f(2,5);


//2. 함수 정의
//함수 선언문
function add(x, y){
    return x + y;
}
console.dir(add);        //f add(x, y)
console.log(add(2, 5));  //7

//error 선언문은 이름 생략 불가
function(x, y){
    return x + y;
}

//함수 선언문은 변수에 할당할 수 없다.
//기명함수 리터럴은 함수 선언문, 함수리터럴 표현식으로 해석될 가능성이 있다
var add = function add(x, y){
    return x + y;
};
console.log(add(2, 5));

function foo() { console.log('foo'); }
foo();

//()그룹연산자 내에 함수리터럴은 함수 리터럴 표현식으로 해석됨 그래서 함수선언문은 피연산자로 사용할 수 없다.
(function bar() { console.log('bar'); });
bar();  //error

//함수 표현식
//익명
var add = function(x, y){
    return x + y;
};
console.log(add(2, 5));

//기명
var add = function foo(x, y){
    return x + y;
};
console.log(add(2, 5));  //7  식별자로 호출해야 한다.
console.log(foo(2, 5));  //error

//함수 호이스팅
console.dir(add2);  // f add(x, y)
console.dir(sub);   //undefined

console.log(add2(2, 5));  //7
console.log(sub(2, 5));  //undefined 

function add2(x, y){
    return x + y;
}

var sub = function(x, y){
    return x - y;
};

//function생성자 함수
var add3 = new Function('x', 'y', 'return x + y');
console.log(add3(2, 5));

var add4 = (function () {
    var a = 10;
    return function(x, y) {
        return x + y + a;
   };
}());
console.log(add4(1, 2));

var add5 = (function () {
    var a = 10;
    return new Function('x', 'y', 'return x + y + a;');
}());
console.log(add5(1,2));  //error : a is not defined

//화살표 함수
const add6 = (x, y) => x + y;
console.log(add6(2, 5));   //7


//3. 함수 호출
function add7(x, y) {
    console.log(arguments);
    return x + y;
}

//인수가 매개변수 보다 적은 경우
console.log(add7(2));  //NaN

//인수가 매개변수보다 많은 경우
console.log(add7(2, 5, 10));  // 7

//인수확인
function add8(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
    }
    return x + y;
}
console.log(add8(2));        //errer
console.log(add('a', 'b'));  //error

function add8(a, b, c){
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}
console.log(add8(1, 2, 3));  //6
console.log(add8(1, 2));     //3
console.log(add8(1));        //1
console.log(add8());         //0

//ES6도입
function add9(a=0, b=0, c=0){
    return a + b + c;
}
console.log(add8(1, 2, 3));  //6
console.log(add8(1, 2));     //3
console.log(add8(1));        //1
console.log(add8());         //0

//객체를 인수로 전달
$.ajax({
    method: 'POST',
    url: '/user',
    data: { id: 1, name: 'Lee' },
    cache: false
});

//반환문
function multiply(x, y){
    return x * y;
    console.log('실행되지 않는다.');  //반환문 이후의 문장은 실행되지 않음.
}
console.log(multiply(3, 5));  //15

function foo() {
    return;
}
console.log(foo());  //undefined

function multiply2(x, y){
    return  //세미콜론 자동 삽입 기능
     x * y;
}
console.log(multiply(3, 5));  //undefined

 
//4. 참조에 의한 전달과 외부 상태 변경
function changeVal(primitive, obj){
    primitive += 100;
    obj.name = 'Kim';
}

var num = 100;
var person = { name: 'Lee' };

console.log(num);     //100
console.log(person);  //{name: 'Lee'}

changeVal(num, person);
console.log(num);     //100 원시 값은 원본 훼손X
console.log(person);  //{name: 'Kim'} 참조 값은 원본 훼손O


//5. 다양한 함수의 형태
//즉시 실행 함수
(function() {  //익명
    var a = 3;
    var b = 5;
    return a * b;
}());

(function foo() {  //기명
    var a = 3;
    var b = 5;
    return a * b;
}());
foo() //error 한 번밖에 호출 못함
 
//다양한 방법으로 사용가능
//1) 가장 일반적인 방식
(function() { .... }());

//2) 
(function() { ... })();

//3)
!function() { ... }();

//4)
+function() { ... }();

//일반 함수처럼 값 반환도 가능
var res = (function () {
    var a = 3;
    var b = 5;
    return a * b;
}());
console.log(res);  //15

res = (function (a, b) {
    return a * b;
}(3, 5));
console.log(res);  //15

//재귀함수
function countdown(n){  //일반 함수의 반복문 사용
    for(var i = n; i >= 0; i--) console.log(i);
}
countdown(10);

function countdown2(n){
    if(n < 0) return;
    console.log(n);
    countdown(n - 1);  //반복문 대신 재귀 호출 사용
}
countdown(10);

//팩토리얼 예제
function factorial(n) {
    if(n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(0)); // 0! = 1
console.log(factorial(1)); // 1! = 1
console.log(factorial(2)); // 2! = 2 * 1 = 2
console.log(factorial(3)); // 3! = 3 * 2 * 1 = 6
console.log(factorial(4)); // 4! = 4 * 3 * 2 * 1 = 24
console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 =120

//중첩함수
function outer() {
    var x = 1;

    function inner() {
        var y = 2;
        console.log(x + y);  //3
    }
    inner();  //외부함수 내에서만 호출가능
}
outer();

//콜백 함수
function repeat(n, f){
    for(var i = 0; i < n; i++){
        f(i);  //매개변수로 들어온 함수 호출
    }
}

var logAll = function(i){
    console.log(i);
};

repeat(5, logAll);  //0, 1, 2, 3, 4

var logOdds = function(i){
    if(i % 2) console.log(i);
};

repeat(5, logOdds);  //1, 3

//익명 함수 리터럴을 콜백함수로 전달
repeat(5, function(i){
    if(i % 2) console.log(i);
});  //1, 3

//콜백 함수를 사용한 이벤트 처리
document.getElementById('myButton').addEventListener('click', function(){
    console.log('button clicked!');
});

//콜백 함수를 사용한 비동기 처리
setTimeout(function(){
    console.log('1초 경과');
}, 1000);

//콜백 함수를 사용하는 고차함수
var res = [1, 2, 3].map(function(item){
    return item * 2;
});
console.log(res);  //[2, 4, 6]

res = [1, 2, 3].filter(function(item){
    return item % 2;
});
console.log(res);  //[1, 3]

res = [1, 2, 3].reduce(function(acc, cur){
    return acc + cur;
}, 0);
console.log(res);  //6

//순수함수
var count  = 0;

function increase(n) {
    return ++n;
}

count = increase(count);
console.log(count);  //1

count = increase(count);
console.log(count);  //2

//비순수함수
function increase2() {
    return ++count;
}

increase2();
console.log(count);  //1

increase2();
console.log(count);  //2
