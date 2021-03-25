//1. 변수선언 예제
// 하나의 값을 저장
var userId = 1;
var userName = 'Lee';

// 객체, 배열등의 자료구조를 사용하여 여러개의 값을 그룹화
var user = {id: 1, name: 'Lee'};

var users = [
    {id: 1, name: 'Lee'},
    {id: 2, name: 'Kim'}
];

console.log("userId="+userId);
console.log("userName="+userName);
console.log("user="+user.id+", "+user.name);
console.log("users="+users[0].id+", "+users[0].name+", "+users[1].id+", "+users[1].name);


//2. 호이스팅 예제
console.log(score);

var score;

//3. 값의 할당 시점
console.log(result); //undefined

var result; //변수선언
result = 80; //값의 할당

console.log(result); //80

//4. 변수명명규칙
var person, $elem, _name, first_name, val1; //쉼표로 구분해서 한 문장에 여러개 변수 선언 가능

//대소문자 구별된다.
var firstname;
var firstName;
var FIRSTNAME;

//변수이름은 변수의 존재 목적을 쉽게 이해할 수 있도록 의미를 명확히 표현해야한다.
var x = 3;  //변수가 의미하는 바를 알 수 없다.
var score = 100;  //score는 점수를 의미한다.

//카멜케이스
var firstName;

//스네이크 케이스
var first_name;

//파스칼 케이스
var FirstName;

//헝가리언 케이스
var strFirstName; //타입을 앞에 붙여준다
var $elem = document.getElementById('myId');  //DOM노드
var observerle$ = fromEvent(document, 'click'); //RxJS 옵저버블