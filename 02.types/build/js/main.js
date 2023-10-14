"use strict";
let boolean;
let falseBoolean = true;
;
let number;
let integer = 6;
let float = 1.23456;
let string;
let firstName = 'Kim';
let names1 = ['Kim', 'Park'];
let names2 = ['Kim', 'Park'];
let array1 = ['Kim', 1, 2];
let array2 = ['Kim', 1, 2];
let someArray = ['Kim', 1, [], {}, true];
let stringArray = ['A', 'B'];
let numberArray = [1, 2];
//stringArray.push('C');
//numberArray[0] = 3;
let tuple1;
tuple1 = ['a', 1];
//tuple1 = ['a', 1, 2];
//tuple1 = [1, 'a'];
let users;
users = [[1, 'join'], [2, 'Kim']];
let tuple2;
tuple2 = ['a', 1];
tuple2.push(2);
//tuple2.push(true);
let any = 'abc';
any = 1;
any = [];
let unknown = 123;
//let string1: number = unknown;
let string1 = unknown;
let obj = {};
let arr = [];
//let null: object = null; // "strict": true in tsconfig.json
let date = new Date();
const obj1 = {
    id: 1,
    title: 'title1',
    description: 'description1',
};
let union;
union = 'hello';
union = 1234;
//union = [];
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2;
func2 = function () {
    console.log('hello');
};
let number1 = undefined;
/*let number2: number = undefined;  // "strictNullChecks": true in tsconfig.json
let string3: string = null;
let object: {a:10, b: false} = undefined;
let array: any[] = null;
let undefined1: undefined = null;
let null1: null = undefined;
let void1: void = null; */
let void2 = undefined;
function greeting() {
    console.log('hello');
}
const hello = greeting();
function throwError() {
    throw new Error('error');
}
function keepProcessing() {
    while (true) {
        console.log('hello');
    }
}
const never = [];
//never.push(1);
