//1. 스코프
function add(x, y){
    console.log(x, y);
    return x + y;
}
add(2, 5);
//console.log(x, y); 매개변수는 함수 몸체 내부에서만 참조할 수 있다.

var var1 = 1;

if(true){
    var var2 = 2;
    if(true){
        var var3 = 3;
    }
}

function foo(){
    var var4 = 4;

    function bar(){
        var var5 = 5;
    }
}

console.log(var1);  //1
console.log(var2);  //2
console.log(var3);  //3
console.log(var4);  //error
console.log(var5);  //error

var x = 'global';

function foo(){
    var x = 'local';  //foo함수 내부에서만 사용가능
    console.log(x);
}
foo();  //local
console.log(x);  //global

function foo2(){
    var x = 1;

    var x = 2;
    console.log(x);  //2 재할당 되어 값이 변경된다.
}
foo2();

function bar2(){
    let x = 1;

    let x = 2;  //error
}
bar2();


//2. 전역스코프, 지역스코프
//전역 변수 a, b
var a = 'global a';
var b = 'global b';

function outer(){
    //지역 변수 c
    var c = "outer's local c";
    console.log(a);  //global a
    console.log(b);  //global b
    console.log(c);  //outer's local c

    function inner(){
        //지역 변수 a
        var a = "inner's local a";

        console.log(a);  //inner's local a
        console.log(b);  //global b
        console.log(c);  //outer's local c
    }
    inner();
}

outer();
console.log(a);  //global a
console.log(c);  //error


//3. 함수 레벨 스코프
var g = 1; 

if(true){
    var g = 10; 
//var키워드는 전역변수(블록 레벨 스코프X), 중복 선언되고 재할당 된다.
}
console.log(g);  //10

var i = 10;
for(var i = 0; i < 5; i++){  //i는 전역변수로 재할당 된다.
    console.log(i);  //0, 1, 2, 3, 4
}
console.log(i);  //5


//4. 렉시컬 스코프
var x = 1;
function foo() {
    var x = 10;
    bar();
}
function bar(){
    console.log(x);
}
foo();  //1
//함수가 호출된 위치가 아닌 정의된 위치를 보고 상위 스코프를 기억하므로
//bar()함수의 상위 스코프는 전역 스코프이다.
bar();  //1
