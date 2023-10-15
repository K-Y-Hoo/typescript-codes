/*function getArrayLength(arr: number[] | string[] | boolean[]): number {
  return arr.length;
}*/

function getArrayLength<T>(arr: T[]): number {
  return arr.length;
}

const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];
const array3 = [true, false, false];

getArrayLength<number>(array1);
getArrayLength<string>(array2);
getArrayLength<boolean>(array3);


interface Vehicle<T> {
  name: string;
  color: string;
  option: T;
}
const car: Vehicle<{price: number}> = {
  name: 'car',
  color: 'red',
  option: {
    price: 1000
  }
}
const bike: Vehicle<boolean> = {
  name: 'Bike',
  color: 'blue',
  option: true
}


const makeArray1 = <X, Y>(x: X, y: Y):[X, Y] => {
  return [x, y];
}
const array4 = makeArray1<number, number>(4, 5);
const array5 = makeArray1<string, string>("4", "5");

const makeArray2 = <X, Y = string>(x: X, y: Y):[X, Y] => {
  return [x, y];
}
const array6 = makeArray2<string>("4", "5");


const makeFullName = <T extends {firstName: string, lastName: string}>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName
  }
}
makeFullName({firstName: "Kim", lastName: "Soo", location: "Seoul"});
makeFullName({firstName: "Kim", lastName: "Soo", hello: "Hi"});

