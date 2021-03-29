//1. 블록문
{
    var foo = 10;
}

var x = 1;
if(x < 10{
    x++
}

function sum(a, b){
    return a + b;
}

 
//2. 조건문
var num = 2;
var kind;

//if문
if(num > 0) {
    kind = '양수';
}
console.log(kind);  //양수

//if else문
if(num > 0) {
    kind = '양수';
}else {
    kind = '음수';
}
console.log(kind);  //양수

//if else if문
if(num > 0) {
    kind = '양수';
}else if(num < 0) {
    kind = '음수';
} else {
    kind = '영';
}
console.log(kind);  //양수

//블록내의 문이 하나라면 블록 생략 가능
if(num > 0)        kind = '양수';
else if(num < 0)   kind = '음수';
else               kind = '영';
console.log(kind);  //양수

//if else는 삼항 조건 연산자로 변경 가능
result = x % 2 ? '홀수' : '짝수';
console.log(result);  //짝수

//num이 0이면 false
result = num ? (num > 0 ? '양수' : '음수') : '영';
console.log(result);  //양수

//switch문
var month = 11;
var monthName;

switch(month){

    case 1: monthName = 'January';  break;
    case 2: monthName = 'February';  break;
    case 3: monthName = 'March';  break;
    case 4: monthName = 'April';  break;
    case 5: monthName = 'May';  break;
    case 6: monthName = 'June';  break;
    case 7: monthName = 'July';  break;
    case 8: monthName = 'August';  break;
    case 9: monthName = 'September';  break;
    case 10: monthName = 'October';  break;
    case 11: monthName = 'November';  break;
    case 12: monthName = 'December';  break;
    default : monthName = 'Invalid month'; 
}
console.log(monthName);  //November

//폴스루를 이용한 경우 (윤년인지 판단해서 2월 일수 계산)
var year = 2000;
var month = 2;
var days = 0;

switch(month) {

    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;

    case 4: case 6: case 9: case 11:
        days = 30;
        break;

    case 2:
        days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 ===0)) ? 29 : 28;
        break;

    default:
        console.log('Invalid month');
}
console.log(days);  //29


//3. 반복문
//for문
for(var i = 0; i <2; i++){
    console.log(i);  //0 1
}

//중첩for문 (두눈의 합이 6이되는 경우의 수)
for(var i = 1; i <= 6; i++){
    for(var j = 1; j <= 6; j++){
         if(i + j === 6) console.log(`[${i}, ${j}]`);
    }
}

//while문
var count = 0;

while(count < 3){
    console.log(count);
    count++;
}

while(true){
    console.log(count);
    count++;

    if(count === 3) break;
}

//do while문
do {
    console.log(count);
    count++;
}while(count < 3);

//4. break문
foo : {
    console.log(1);
    break foo;
    console.log(2);
}
    console.log('Done');

outer : for(ver i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++){
        if(i + j === 3) break outer;
        console.log(`inner[${i}, ${j}]`);
    }
}
console.log('Done');

var string = 'Hello World';
var search = 'l';
var index;

for(var i = 0; i < string.length; i++){
    if(string[i] === search){
        index = i;
        break;  //반복문 탈출
    }
}
console.log(index);  //2
console.log(string.indexOf(search));  //2


//5. continue문
count = 0;

for(var i = 0; i < string.length; i++){
    if(string[i] !== search)  continue;
    count++
}
console.log(count);  //3

//if문 내에 실행할 코드가 한 줄이라면 continue문 사용보다 아래와 같이 하는게 가독성이 좋다.
for(var i = 0; i < string.length; i++){
    if(string[i] === search)  count++;
}