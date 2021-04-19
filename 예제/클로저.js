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