"use strict";
/*function getArrayLength(arr: number[] | string[] | boolean[]): number {
  return arr.length;
}*/
function getArrayLength(arr) {
    return arr.length;
}
const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];
const array3 = [true, false, false];
getArrayLength(array1);
getArrayLength(array2);
getArrayLength(array3);
const car = {
    name: 'car',
    color: 'red',
    option: {
        price: 1000
    }
};
const bike = {
    name: 'Bike',
    color: 'blue',
    option: true
};
const makeArray1 = (x, y) => {
    return [x, y];
};
const array4 = makeArray1(4, 5);
const array5 = makeArray1("4", "5");
const makeArray2 = (x, y) => {
    return [x, y];
};
const array6 = makeArray2("4", "5");
const makeFullName = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + " " + obj.lastName });
};
makeFullName({ firstName: "Kim", lastName: "Soo", location: "Seoul" });
makeFullName({ firstName: "Kim", lastName: "Soo", hello: "Hi" });
