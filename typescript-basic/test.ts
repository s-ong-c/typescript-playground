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
let aa: string = null; (x)

// null => null  || void, undefined => undefined || void
// null 은 undefined 에 선언 할수 없다.
let u: undefined = null; (X)
let v: void = undefined; (O)

let union: string | null | undefined = 'str';

let n: null = null;

console.log(n); // null