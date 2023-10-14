"use strict";
const bodyElement = document.querySelector('body');
bodyElement.innerText = "Hello";
const bodyElement1 = document.querySelector('body');
bodyElement1.innerText = "Hello";
const bodyElement2 = document.querySelector('body');
if (bodyElement2) {
    bodyElement2.innerText = "Hello";
}
function func(arg) {
    if (arg) {
        return arg.toLowerCase();
    }
}
func('hello');
func(null);
