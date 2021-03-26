//1. 표현식
var score = 100; //리터럴 100 자체로 표현식이다.

var score2 = 50+50; //리터럴과 연산자의 조합. 평가되어 결과값을 생성하므로 표현식

score; //식별자 참조는 값을 생성하지 않지만 값으로 평가됨 ->표현식ㅇ

//리터럴 표현식
10
'hello'

//식별자 표현식
sum
person.name
arr[1]

//연산자 표현식
10 + 20
sum = 10
sum != 10

//함수 메서드 호출 표현식
square()
person.getName()

//2. 문
//변수 선언문
var x;

//할당문
x = 5;

//함수 선언문
function foo() {}

//조건문
if (x > 1){ console.log(x); }

//반복문
for(var i = 0; i < 2; i++) { console.log(i); }

//3. 세미콜론
function foo2(){
    return
    {}
    //ASI의 동작결과 -> return; {};
    //개발자의 예측 -> return ();
    //이처럼 개발자의 의도와 다르게 동작할 수 있으므로 세미콜론을 사용하자
}

//4. 표현식인 문/ 표현식이 아닌문
var x; //변수 선언문은 값으로 평가X -> 표현식이 아님

x = 1 + 2; //표현식이면서 완전한 문이기도 하다.