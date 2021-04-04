//전역변수의 문제점
function foo() {
    var x = 'local';
    console.log(x);
    return x;
}
foo();
//console.log(x);  error

var x = 'global';

function foo2(){
    console.log(x);  //undefined 호이스팅으로 인해 지역변수 선언이 호이스팅 되므로
    var x = 'local';
}
foo2();
console.log(x);

//즉시 실행 함수
(function () {
    var foo = 10;

});
console.log(foo);  //error

//네임스페이스 객체
var MYAPP = {};
MYAPP.name = 'Lee';
console.log(MYAPP.name); //Lee

//계층적으로 구성 가능
MYAPP.person = {
    name : 'Kim',
    address : 'Seoul'
};
console.log(MYAPP.person.name); //Kim

//모듈 패턴
var Counter = (function() {
    var num = 0;  //private

    //외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
    return {
        increase() {
            return ++num;
        },
        decrease() {
            return --num;
        }
    };
}());

console.log(Counter.num);  //undefined 프라이빗 변수는 외부로 노출되지 않는다.
console.log(Counter.increase());  //1
console.log(Counter.increase());  //2
console.log(Counter.decrease());  //1
console.log(Counter.decrease());  //0
