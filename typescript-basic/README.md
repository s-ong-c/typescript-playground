# 1. Typescript 란? 

    
*    프로그래밍 언어다.
*    타입스크립트는 ‘Compiled Language' 
    *  전통적인 compiled language 차이가 있다.  
    * 그래서 Transpile 용어를 사용
* 자바스크립트는 Interpreted Language 

# 2. 설치 및 실행
npm i -g typescript 

```js
$ ./node_modules/.bin/tsc test.js

"scripts": {
"transpile": "tsc test.ts",
"test": "echo \"Error: no test specified\" && exit 1"
},
$ npm run transpile
```
## 3.Compiler Options
        
*  compileOnSave
    * true / false (default false)
    * 최상단에 설정!
    * vscode & atom ( 저장시 자동 컴파일 기능)
*  extends
    * 파일 경로명 : string
    * 상속받아서 바꿔서 쓸 경우 사용 용이

셋다 설정이 없으면 모두다 컴파일
* files
    * files -> 상대 혹은 절대 경로의 리스트 배열 ( exclude 보다 강력)
* include
    * exclude보다 약하다
    * * 같은걸 사용하면 .ts / .tsx / .d.ts 만 include (allowJS)
* exclude
    * 설정 안하면 ( node_modules, bower_components, jspm_packages, <outDir>) default 로 제외
    * <outDir> 항상 제외 !!! ( include에 있어도 !!)
glob 패턴 .gitignore 유사)
   target이 ‘es5’ 이고 , default 로 dom , es5, scripthost 를 사용
          target이 ‘es3’ 이고 , default 로 dom , es5, scripthost, dom.iterable 를 사용
    - lib 를 지정하면 그 lib 배열로만 라이브러리를 사용한다.
        [] => ‘no definition found 블라블라'


@module
 
module
    - 컴파일이 된 모듈의 결과뭉을 어떤 모듈 시스템으로 할지 결정
    - target이 es6 -> es6 이 default
    - target 이 es6 이 아니면 ‘commonjs’가 default
    - AMD or System 사용하려면 outFilr 이 지정되어야 한다.
    - ES6  ES2015 를 사용하려면 target이 es5 이여야 한다.
moduleResolution
    - ts 소스에서 모듈을 사용하는 방식을 지정해야한다.
    - Classic 아니면 Node 
    - CommonJS 일때만 Node 라고 생각하면 된다.
paths & baseUrl
     - 상대경로 방식이 아닌 baseUrl 로 꼭지점과 paths안의 키 / 밸류로 모듈을 가져가는 방식
rootDirs 
    - 배열 안에서 상대 경로를 찾는 방식 
    

## 4. Basic Types
TypeScript 기본 데이터 타입 
ECMAScript 표준 포함
    -  Boolean
    -  Number
    -  String
    -  Null
    -  Undefined
    -  Symbol (ECMAScript 6 추가)
    -  Array : object 형

————추가로
    - Any
    - Void
    - Never
    - Enum
    - Tuple : object


Primitive Type

* 오브젝트 와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
* 프리미티브형의 내장 함수를 사용 가능한 것은 자바스크립트 처리 방식 덕분 

literal ?

* 값자체가 변하지 않는 값을 의미
*  상수와 다른 것은 상수는 가리키는 포인터가 고정 !  리터럴은 그 값자체가 값 그릇
Boolean 
* 가장 기본적인 데이터 타입
* 단순한 true 혹은 false
* Javascript / Typescript 에서 boolean

Number/ number

let decimal: number = 6; // 10진수 리터럴
let hex: number = 0xf00d; // 16진수
let binary: number = 0b1010; // 2진수
let octal: number = 0o744; //8진수 리터럴 
* javascript 와 같이 Typescript 의 모든 숫자는 부동 소수점 값이다.
* TS 는 16진수 및 10진수 리터럴 외에도 ECMAScript 2015에 도입된 2진수 및 8진수를 지원

Template String
* 행에 걸처 있거나, 표현식을 넣을 수 있는 문자열
* 이 문자열은 backtick  (= backquote) 기호에 둘려 쌓여 있다.
* 포함된 표현식은 `${expr}` 와 같은 형태로 사용
```javascript
let fullName: string = `Bob Bobbington`;
let age: number = 36;

let sentence: string = `hello, my name is ${fullName} I'll be ${age} years old next month`;
```
Undefined & Null
* Typescript 에서 undefined 와 null 은 각각  undefined 와 null 이라는  고유한 타입을 가진다.
* ‘ Void’와 마찬가지로  undefined 와 null 그 자체로는 쓸모가 없다.

undefined & null are subtypes of all other types
*  기본설정
* number  undefined 와 null 할당할수 있다.
* 단 컴파일 옵션에서 ‘—strictNullChecks’ 를 사용하면  undefined 와 null 은 void 와 같이 자기 자신들에게만 할당 가능 
    * 이때는 null, undefined 를 할당할 수 있게 하려면 union type 를 이용해야 한다.
let kk: string = null;
let age: number = undefined;

// if strictNullChecks => true
// Type 'null' is not assignable to type 'string',
let aa: string = null; (x)

// null => null  || void, undefined => undefined || void
// null 은 undefined 에 선언 할수 없다. 
let u: undefined = null; (X)
let v: void = undefined; (O)

let union: string | null | undefined = ‘str'

null in Javascript
* null 이라는 값으로 할당된 것을 null 이라고 한다.
* 무언가 있는데 사용할 준비가 덜 된 상태
* null 이라는 타입은 null 이라는 값만 가질수 있다.
* 런타임에서 typeof 연산자를 이용해서 알아내면 ,object 


void 
* 타입이 없는 상태
* ‘any’ 와 반대의 의미
* Void 는 X ( void)
* 함수의 리턴이 없을 때 사용
```javascript
function returnVoid(message): void {
    console.log(message);
}
returnVoid('리턴이 없디');
```
Any
* 어떤 타입이어도 상관없는 타입
* 컴파일 타입에 타입체크가 정상적으로 이뤄지지 않으므로 최대한 안쓰도록 하는게 핵심
* 컴파일 옵션중에서도 any 를 쓰면 오류를 반환하는 옵션도 있다
    * noImplicitAny
```javascript
function returnAny(message): any {
    console.log(message);
}
returnAny('아무거나’);
```
Array
* 자바스크립트 동일한 Array 객체
* 사용밥법
    * Array<타입>
    * 타입[ ]
```javascript
let list: number[] = [1,2,3];
let list2: Array<number> = [1,2,3,];


Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Blue;

enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green
```
symbol
* es6 symbol
* 프리미티브 타입의 값을 담아서 사용
* 고유하고 수정 불가능한 값
* 접근제어할 때 사용
```javascript
let sym = Symbol();

let obj = {
    [sym]: 'value'
};

console.log(obj[sym]); //' value
```
var vs let, const

var
* ES5
* 변수의 유효 범위: 함수 스코프
* 호이스팅(O)
* 재선언 가능
let, const
* ES6
* 변수의 유효 범위 : 블록 스코프( 친숙)
* 호이스팅(x)
* 재선언 불가 
```javascript
let aaa: string = 'A'; // 명시적으로 지정된 타입
let bb = 'bc'; // 타입 추론에 의한 타입

const cb:string ='abc'; // 명시적으로 지정된 타입
const ca = 'abc'; // 타입추론에 의한 리터럴 타입 
```
Type assertions , Type alias

Type assertions
* 형변환과는 다른 ( 형변환은 실제 데이터 구조를 바꾸는거)
* 타입이 이거다 라는것을 컴파일러에게 알려주는것
* 문법
    * 변수 as 강제할타입
    * <강제할타입>변수

let someValue: any = 'this is a string';

let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;

// 넓은 타입에서 좁은 타입으로 강제 하는 경우
// jsx 에서 as 쓴다.

Type alias
* 인터페이스와 비슷
* Primitive, Union Type , Tuple
* 기타 직접 작성해야하는 타입을 다른 이름으로 지정
* 만들어진 타입의 refer 로 사용하는 것이지 타입을 만드는 것은 아니다.

Aliasing primitive
```javascript
type MyStringType = string;

const str = 'world';

let myStr: MyStringType = 'hello';
myStr = str;
```
… 딱히 의미없다.

Aliasing UnionType
* 유니온 타입 은 A도 가능하고 B도 가능한 타입
* 길게 쓰는 걸 짧게
```javascript
let Person: string | number = 0;
Person = 'SONG';

type StringOrNumber = string | number;

let another: StringOrNumber = 0;
another = "SONGC";

  Aliasing TupleType
let test: [string, number] =['SONG', 10];

type testTuple = [string, number];

let another2: testTuple = ['songc',10];
 ```
 Aliasing Generic

Aliasing keyof


Interface & Aliasing type 차이
* type alias 는 Object literal type
* interface 는 interface

type Alias = { num: number}
interface Interface {
    num: number
}

declare function aliased(arg: Alias): Alias;
declare  function interfaced(arg: Interface): Interface;

* type alias 끼리는 extends , implements 불가
* interface extends type alias 가능
* class implements type alias 가능
* class extends type alias 불가 ( interface 도 동일)
* 마치 interface 처럼 동작

```javascript
type PersonAlias = {
    name: string;
    age: number;
}
interface IPerson extends  PersonAlias {

}

let ip: IPerson = {
    name: 'song',
    age: 28
};

class PersonImpl implements PersonAlias {
    name: string;
    age: number;

    hello(){
        console.log('안녕');
    }
}

let pi: PersonImpl = new PersonImpl();
pi.hello();

class PersonChild extends PersonAlias {

}

```
Interface

option property
//indexable type
```javascript
// 1Array
interface Person2 {
[index: number]: string;
}
const p2: Person2 = {};
p2[0] = 'hi';

interface Person {
name: string;
[index: string]: string;
};

const person: Person = {
name: 'SONG'
}

person.anybody = 'SONGC';

function hello(p: Person): void {
console.log(`안녕${p.name} 입니다.`);
}
```
function in interface
```javascript
interface Person {
name: string;
// hello(): void;
hello(): string
};
const person: Person = {
name: 'SONG',
// hello: function() {

// }
hello : (): string => {
return 'hello';
}
}
function hello(p: Person): void {
console.log(`안녕${p.name} 입니다.`);
}
```
class in interface
```javascript
interface IPerson {
name: string;
age?: string;
hello(): void;
};

class Person implements IPerson {
name: string;
constructor(name: string){
this.name = name;
}
hello(): void {
console.log(`안녕 ${this.name}이다.`);
}
public hi(): void {
console.log(`안녕${this.name} 임.`)
}
}

const person: IPerson = new Person('song');
person.hello();

```


extend interface
```javascript
interface Person {
name: string;
age?: number;
}

interface Korea extends Person {
city: string
}
const kkk: Korea = {
name: 'songminseok',
city: 'seoul',
}


function interface


interface HelloPerson {
(name: string, age?: number): void;
}

let helloPerson: HelloPerson = function (name: string) {
console.log(name);
}

helloPerson('song');
// 함수의 타입 체크가 할당할 때가 아니라 사용할때
```
Indexable Type
* string Or number
```javascript
interface StringArray {
[index: number]: string;
}

const sa: StringArray = {}; // 옵션
sa[100] = '백';

interface StringDictionary {
[index: string]: string;
}

const sd: StringDictionary = {}; // 옵션
sd.hundred = '백';

interface StringArrayDictionary {
[index: number]: string;
[index: string]: string;
}

const sad: StringArrayDictionary = {};
sad[100] = '백';
sad.hundred = '백';
```
* string index = optional property
```javascript
interface StringDictionary {
[index: string]: string;
name: string;
}

const sd: StringDictionary = {
name: '이름' //필수
};

sd.any ='any';
```



Class

* 생성자가 없으면 디폴트 생성자가 불린다.
* 클래스의 프로퍼티 혹은 멤버 변수가 정의 되어 있지만, 값을 대입하지 않으면 undefined 
* 접근제어가 (Access Modifier)는 public 은 default 이다.
```javascript
// default public
class Person {
name: string;
age: number;

constructor (name: string) {
this.name = name;
}
}

const person = new Person('SONG');

console.log(person.name);
```


class & 프로퍼티 
* 클래스의 프로퍼티를 선언과 동시에 값을 할당 방법
* 생성자가 불리지전에 이미 프로퍼티 값이 저장 되어있다.
```javascript
class Person {
    name: string = 'song';
    age: string = null;
    
    constructor(name : string){
        this.name = name;
    }
}

const person = new Person('Songc');

console.log(person)
```
class - 프로퍼티의 접근제어자 -1

* private 로 설정된 프로퍼티는 dot으로 접근 불가
* 클래스 내부에서는 private 프로퍼티를 사용 할 수 있다.
* private 붙은 변수나 함수는 _ 를 이름에 붙이는 데 문법 아니라 널리 쓰는 코딩 컨벤션이다. !! 

class - 프로퍼티의 접근제어자 -2

* 부모에서 private 로 설정된 프로퍼티는 상속을 받은 자식에서도 접근 할수 없다.
* 부모에서 protected 로 설정된 프로퍼티는 상속을 받은 자식에서 접근 가능 
* 상속을 받은 자식 클래스에서 부모 클래스에 this 를 통해 접근하려면 , super() 통해 초기화 

```javascript
class Person {
    protected _name: string = 'song';
    private _age: string = null;

}
class Child extends Person {
    constructor() {
        super();
        this._name = name;
    }
}

const person:Child = new Child();

console.log(person)
```
class - method 

* 클래스 내부에 작성된 메서드는 public  이다.
* arrow function으로 통해 작성 가능
* private 를 이용하면 클래스 외부에서 접근 불가
```javascript 
class Person {
    constructor(private _name: stirng, private  _age:number){}
    print(): void {
        console.log(`이름은 ${this._name} 이다.`);
    }
    printName = (): void => {
        console.log(`이름은 ${this._name} 이다.`);
    }
    private printAge(): void {
        console.log(`나이는 ${this._age} 이다.`);
    }
}
const person : Person = new Person('song',14);
person.print();
person.printName();
//person.printage(); 불가 하다. 
```

class - 상속 
* 상속은 extends
* 자식 클래스에서 디폴트 생성자는 부모의 생성자와입력 형태가 같다 
```javascript
class Person {
    constructor(protected _name: stirng, protected _age:number){}
    hello(): void {
        console.log(this._name);
}
}
const person : Person = new Person('song',14);
person.hello();

class Child extends Person {
    
}

const child: Child = new Child('song',14);
child.hello();
```