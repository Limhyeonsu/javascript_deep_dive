//1. strict mode
function foo() {
    x = 10;
}
foo();
console.log(x);  //10 암묵적 전역 생성


'use strict';  //전역의 선두에 선언
function foo2() {
    x = 10;  //error
}
foo2();

function foo3() {
    'use strict';  //함수 몸체의 선두에 선언
    x = 10;  //error
}
foo3();

function foo4() {
    x = 10;  //에러를 발생시키지 않는다
    'use strict'; 
}
foo3();


//2. strict mode는 즉시 실행 함수로 스코프를 구분하자
//전역에 선언대신 즉시 실행 함수 스코프로 감싸기
(function() {
    'use strict';
}());

//함수 단위 대신 즉시 실행 함수 스코프로 감싸기
(function () {
    var let = 10;

    function foo5() {
        'use strict';
        let = 20;  //error
    }

    foo5();
}());


//3.strict mode가 발생시키는 에러
//1) 암묵적 전역
(function() {
    'use strict';

    x = 1;
    console.log(x);  //error
}());

//2) 변수, 함수, 매개변수의 삭제
(function() {
    'use strict';

    var x = 1;
    delete x;  //error

    function foo6(a){
        delete a;  //error
    }

    delete foo6();  //error
}());

//3) 매개변수 이름의 중복
(function () {
    'use strict';

    function foo7(x, x) {  //error
        return x + x;
    }
    console.log(foo7(1, 2));
}());

//4) with문 사용
(function () {
    'use strict';

    with({x:1}){
        console.log(x);
    }
}());


//4. strict mode적용에 의한 변화
//일반 함수의 this에 undefined 바인딩
(function () {
    'use strict';

    function foo8() {
        console.log(this);  //undefined
    }
    foo8();

    function Foo() {
        console.log(this);  //Foo
    }
    new Foo();
}());

//arguments 객체
(function (a) {
    'use strict';
    //매개변수에 전달된 인수를 재할당
    a = 2;

    console.log(arguments);  //{0: 1, length: 1}  재할당이 반영되지 않는다.
}(1));