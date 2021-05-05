//1. 정규 표현식이란?
const tel = '010-1234-567팔';
const regExp = /^\d{3}-\d{4}-\d{4}$/;
console.log(regExp.test(tel));  //false


//2. 정규 표현식의 생성
//리터럴 방식
var target = 'Is this all there is?';
// 패턴 : is
// 플래그 : i => 대소문자를 구별하지 않고 검색
var regexp = /is/i;
console.log(regexp.test(target));  //true

//생성자 함수방식
//new RegExp(pattern[, flags])
regexp = new RegExp(/is/i);  //ES6
regexp.test(target);  //true


//5. 패턴
//1)문자열 검색
regexp = /is/;
regexp.test(target);  //true

regexp = /is/i;
target.match(regexp);  //Is

regexp = /is/ig;  //대상 문자열내에 패턴과 일치하는 모든 문자열을 전역검색하고 대소문자 구별하지 않는다.
target.match(regexp); //["Is", "is", "is"]

//2) 임의의 문자열 검색
regexp = /.../g;
target.match(regexp); //["Is ", "thi", "s a", ....]

//3) 반복 검색
target = 'A AA B BB Aa Bb AAA';
regexp = /A{1,2}/g;
target.match(regexp);  //["A", "AA", "A", "AA", "A"]

regexp = /A{2}/g;  //A가 두번 반복되는 문자열을 전역검색
target.match(regexp);  //["AA", "AA"]

regexp = /A{2,}/g;  //A가 최소 두번이상 반복되는 문자열을 전역검색
regexp = /A+/g; //A가 최소 한번이상 반복되는 문자열
target = 'color colour';
regexp = /colou?r/g;  //colo 다음 u가 최대 한번이상 반복되고 r이 이어지는 문자
target.match(regexp);  //["color", "colour"]

//4) OR 검색
target = 'A AA B BB Aa Bb AAA';
regexp = /A|B/g;
regexp = /A+|B+/g;  //A 또는 B가 한번이상 반복되는 문자열
regexp = /[AB]+/g;  //A 또는 B가 한번이상 반복되는 문자열
regexp = /[A-Z]+/g;  //[], - 는 범위검색 A~Z가 한번이상 반복되는 문자열
regexp = /[A-Za-z]+/g;  //A~Z, a~z
regexp = /[0-9]+/g;
regexp = /[0-9,]+/g;  //0~9 또는 ,가 한번이상 반복되는 문자열 ex) ["12,345"]
regexp = /[\d,]+/g;  //0~9 또는 ,가 한번이상 반복되는 문자열
regexp = /[\D,]+/g;  //0~9가 아닌 문자 또는 ,가 한번이상 반복되는 문자열

//5) not
regexp = /[^0-9]+/g;  //숫자를 제외한 문자열

//6) 시작 위치로 검색
regexp = /^https/;  //https로 시작하는지 검사

//7) 마지막 위치로 검색
regexp = /com$/;  //com으로 끝나는지 검사