//1. 배열 디스트럭처링 할당
//ES5
var arr = [1,2,3];
var one = arr[0];
var two = arr[1];
var three = arr[2];

console.log(one, two, three);  //1 2 3

//ES6
[one, two, three] = arr;
console.log(one, two, three)  //1 2 3

const [x, y] = [1,2];
console [a,b] = [1];  //1 undefined

const[e,f=10,g=3] = [1,2];  //기본값 설정
console.log(e,f,g);  //1 2 3

//Rest 요소 
const[x, ...y] = [1,2,3];
console.log(x,y);  //1[2,3]


//2. 객체 디스트럭처링 할당
//ES5
var user = {firstName: 'Ungmo', lastName: 'Lee'};
var firstName = user.firstName;
var lastName = user.lastName;

//ES6
const user2 = {firstName: 'Ungmo', lastName: 'Lee'};
const {lastName2, firstName2} = user2;

//객체의 프로퍼티 키와 다른 변수이름으로 할당받기
const {lastName3: ln, firstName3: fn} = user;
console.log(ln, fn);

//기본값 설정
const{firstName4:'glidong', lastName4} = {lastName4: 'Hong'};

//객체에서 필요한 프로퍼티 값만 추출
const str = 'Hello';
const{length} = str;
console.log(length);  //5

//배열의 요소가 객체인 경우
const todos = [
    {id:1, content: 'HTML', completed: true},
    {id:2, content: 'CSS', completed: false},
    {id:3, content: 'JS', completed: false}
];
const[,{id}] = todos;
console.log(id); //2

//중첩객체
const user3 = {
    name: 'Lee',
    address: {
        zipCode: '03068',
        city: 'Seoul'
    }
};
const{address: {city}} = user;
console.log(city);  //Seoul

//Rest 프로퍼티
const{x, ...rest} = {x:1, y:2, z:3};
console.log(x, rest);  //1 {y:2, z:3}