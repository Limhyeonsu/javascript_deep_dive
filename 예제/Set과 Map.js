//1 Set
//1) Set 생성
var set = new Set();
console.log(set);  // Set(0) {}

const set1 = new Set([1,2,3,3]);
console.log(set1);  // Set(3) { 1, 2, 3 }

const set2 = new Set('hello');
console.log(set2); // Set(4) { 'h', 'e', 'l', 'o' }

const uniq = array => array.filter((v, i, self) => self.indexOf(v) === i);
console.log(uniq([2,1,2,3,4,3,4]));  //[ 2, 1, 3, 4 ]
const uniq1 = array => [...new Set(array)];
console.log(uniq1([2,1,2,3,4,3,4]));  //[ 2, 1, 3, 4 ]

//2) size 요소 개수 확인
const {size} = new Set([1,2,3,3]);
console.log(size);  //3

set1.size = 10;  //무시
console.log(set1.size);  //3

//3) add 요수 추가
set.add(1);
console.log(set);  //Set(1) { 1 }
set.add(1).add(2);
console.log(set);  //Set(2) { 1, 2 }
set.add('a').add(true).add(undefined).add(null).add({}).add([]);
console.log(set);  //Set(8) { 1, 2, 'a', true, undefined, null, {}, [] }

//4) has 요소 존재여부 확인
console.log(set.has(1));  //true
console.log(set.has(4));  //false

//5) delete 요소 삭제
set.delete(1);
console.log(set);  //Set(7) { 2, 'a', true, undefined, null, {}, [] }
set.delete(0);  //존재하지 않는 요소는 무시됨

//6) clear 요소 일괄 삭제
set.clear();
console.log(set);  //Set(0) {}

//7) forEach 요소 순회
set = new Set([1,2,3]);
set.forEach((v, v2, set) => console.log(v, v2, set));
/*
첫번째 인수와 두번째 인수는 같은 값임
1 1 Set(3) { 1, 2, 3 }
2 2 Set(3) { 1, 2, 3 }
3 3 Set(3) { 1, 2, 3 }
*/
for(const value of set){
    console.log(value);  //1 2 3 
}
console.log([...set]);  //[1, 2, 3]
const[a, ...rest] = set;
console.log(a, rest); //1, [2, 3]

//8) 집합연산
//8-1) 교집합
Set.prototype.intersection = function(set){
    const result = new Set();

    for(const value of set) {
        if(this.has(value)) result.add(value);
    }
    return result;
};

const setA = new Set([1,2,3,4]);
const setB = new Set([2,4]);
console.log(setA.intersection(setB));  //Set(2) { 2, 4 }
console.log(setB.intersection(setA));  //Set(2) { 2, 4 }

//8-2) 합집합
Set.prototype.union = function(set){
    const result = new Set(this);

    for(const value of set) {
        result.add(value);
    }
    return result;
};

console.log(setA.union(setB));  //Set(4) { 1, 2, 3, 4 }
console.log(setB.union(setA));  //Set(4) { 2, 4, 1, 3 }

//8-3) 차집합
Set.prototype.difference = function(set){
    const result = new Set(this);

    for(const value of set) {
        result.delete(value);
    }
    return result;
};

console.log(setA.difference(setB));  //Set(2) { 1, 3 }
console.log(setB.difference(setA));  //Set(0) {}

//8-4) 부분집합과 상위집합
Set.prototype.isSuperset = function(subset){
    for(const value of subset) {
        if(!this.has(value)) return false;
    }
    return true;
};

console.log(setA.isSuperset(setB));  //true
console.log(setB.isSuperset(setA));  //false


//2. Map
//1) Map객체 생성
var map = new Map();
console.log(map);  // Map(0){}

const map1 = new Map([['key1', 'value1'],['key2', 'value2']]);
console.log(map1); // Map(2) {"key1" => "value1", "key2" => "value2"}
const map2 = new Map([1,2]);  //error

map = new Map([['key1', 'value1'],['key1', 'value2']]);
console.log(map); //Map(1) {"key1" => "value1"}

//2) 요소 개수 확인
const {size} = new Map([['key1', 'value1'],['key2', 'value2']]);
console.log(size); //2

map.size = 10;  //무시
console.log(map.size); //1

//3) 요소 추가
map.set('key2','value2');
console.log(map); // Map(2) {"key1" => "value1", "key2" => "value2"}

map = new Map();
const lee = {name: 'Lee'};
const kim = {name:'Kim'};
map.set(lee, 'developer'),set(kim, 'desiger');
console.log(map);  //Map(2) { {name:"Lee"} => "developer", {name: "Kim"} => "designer"}

//4) 요소 취득
map = new Map();
map.set(lee, 'developer').set(kim, 'designer');

console.log(map.get(lee));  //developer
console.log(map.get('key'));  //undefined

//5) 요소 존재 여부 확인
map = new Map([[lee, 'developer'], [kim, 'designer']]);
console.log(map.has(lee));  //true
console.log(map.has('key'));  //false

//6) 요소 삭제
map.delete(kim);
console.log(map);  // Map(1) { {name: "Lee" => "developer"}}

//7) 요소 일괄 삭제
map.clear();
console.log(map); //Map(0) {}

//8) 요소 순회
map = new Map([['key1', 'value1'],['key2', 'value2']]);
map.forEach((v, k, map) => console.log(v, k, map));

console.log(Symbol.iterator in map);  //true
