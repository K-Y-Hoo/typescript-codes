let boolean: boolean;
let falseBoolean: boolean = true;;

let number: number;
let integer: number = 6;
let float: number = 1.23456;

let string: string;
let firstName: string = 'Kim';

let names1: string[] = ['Kim', 'Park'];
let names2: Array<string> = ['Kim', 'Park'];

let array1: (string | number)[] = ['Kim', 1, 2];
let array2: Array<string | number> = ['Kim', 1, 2];

let someArray: any[] = ['Kim', 1, [], {}, true];

let stringArray: readonly string[]= ['A', 'B'];
let numberArray: ReadonlyArray<number> = [1, 2];
//stringArray.push('C');
//numberArray[0] = 3;

let tuple1: [string, number];
tuple1 = ['a', 1];
//tuple1 = ['a', 1, 2];
//tuple1 = [1, 'a'];

let users: [number, string][];
users = [[1, 'join'], [2, 'Kim']];

let tuple2: [string, number];
tuple2 = ['a', 1];
tuple2.push(2);
//tuple2.push(true);

let any: any = 'abc';
any = 1;
any = [];

let unknown: unknown = 123;
//let string1: number = unknown;
let string1: number = unknown as number;

let obj: object = {};
let arr: object = [];
//let null: object = null; // "strict": true in tsconfig.json
let date: object = new Date();
const obj1: {id: number, title: string, description: string} = {
  id: 1,
  title: 'title1',
  description: 'description1',
}

let union: (string | number);
union = 'hello';
union = 1234;
//union = [];

let func1: (arg1: number, arg2: number) => number;
func1 = function (x, y) {
  return x * y
}
let func2: () => void;
func2 = function () {
  console.log('hello');
}

let number1= undefined;
/*let number2: number = undefined;  // "strictNullChecks": true in tsconfig.json
let string3: string = null;
let object: {a:10, b: false} = undefined;
let array: any[] = null;
let undefined1: undefined = null;
let null1: null = undefined;
let void1: void = null; */
let void2: void = undefined;

function greeting(): void {
  console.log('hello');
}
const hello: void = greeting();

function throwError(): never {
  throw new Error('error');
}
function keepProcessing(): never {
  while(true) {
    console.log('hello');
  }
}
const never: [] = [];
//never.push(1);