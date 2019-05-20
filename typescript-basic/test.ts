class Test{
    constructor() {
       console.log('test');
    }

}
new Test();

let myName = 'songc';
myName.indexOf('');

let decimal: number = 6; // 10진수 리터럴
let hex: number = 0xf00d; // 16진수
let binary: number = 0b1010; // 2진수
let octal: number = 0o744; //8진수 리터럴

let fullName: string = `Bob Bobbington`;



let kk: string = null;
let age: number = undefined;
let sentence: string = `hello, my name is ${fullName} I'll be ${age} years old next month`;

// if strictNullChecks => true
// Type 'null' is not assignable to type 'string',
let aa: string = null; //(x)

// null => null  || void, undefined => undefined || void
// null 은 undefined 에 선언 할수 없다.
let uu: undefined = null; //(X)
let v: void = undefined; //(O)

let union: string | null | undefined = 'str';

let n: null = null;

console.log(n); // null

// interface Person {
//     name: string;
//    // hello(): void;
//     hello(): string
// };
// const person: Person = {
//     name: 'SONG',
//     // hello: function() {

//     // }
//     hello : (): string => {
//         return 'hello';
//     }
// }
// function hello(p: Person): void {
//     console.log(`안녕${p.name} 입니다.`);
// }

// interface IPerson {
//     name: string;
//     age?: string;
//     hello(): void;
// };

// class Person implements IPerson {
//     name: string;
//     constructor(name: string){
//         this.name = name;
//     }
//     hello(): void {
//         console.log(`안녕 ${this.name}이다.`);
//     }
//     public hi(): void {
//         console.log(`안녕${this.name} 임.`)
//     }
// }

// const person: IPerson = new Person('song');
// person.hello();

// interface Person {
//     name: string;
//     age?: number;
// }

// interface Korea extends Person {
//     city: string
// }
// const kkk: Korea = {
//     name: 'songminseok',
//     city: 'seoul',
// }

// interface HelloPerson {
//     (name: string, age?: number): void;
// }

// let helloPerson: HelloPerson = function (name: string) {
//     console.log(name);
// }

// helloPerson('song');
// // 함수의 타입 체크가 할당할 때가 아니라 사용할때 

// interface StringArray {
//     [index: number]: string;
// }

// const sa: StringArray = {}; // 옵션
// sa[100] = '백';

// interface StringDictionary {
//     [index: string]: string;
//     name: string;
// }

// const sd: StringDictionary = {
//     name: '이름' //필수
// };

// sd.any ='any';


// sd.hundred = '백';

// interface StringArrayDictionary {
//     [index: number]: string;
//     [index: string]: string;
// }

// const sad: StringArrayDictionary = {};
// sad[100] = '백';
// sad.hundred = '백';

// default public
class Person {
    name: string = 'SONG';
    age: number = null;

    constructor (name: string) {
        this.name = name;
    }
}

const person = new Person('SONG');

console.log(person);
