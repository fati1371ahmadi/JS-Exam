"use strict";
let input1 = document.getElementById("input1");
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const min = 10000;
const max = 99999;
let array1 = [];
let number1 = 0;
const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0)
            return false;
    }
    return num > 1;
};
button1 === null || button1 === void 0 ? void 0 : button1.addEventListener('click', function handleClick(event) {
    number1 = Math.floor(Math.random() * (max - min) + min);
    input1.value = number1.toString();
});
button2 === null || button2 === void 0 ? void 0 : button2.addEventListener('click', function handleClick(event) {
    array1.splice(0);
    for (let i = 0; i < number1; i++) {
        if (isPrime(i)) {
            array1.push(i);
        }
    }
    console.log(array1);
});
button3 === null || button3 === void 0 ? void 0 : button3.addEventListener('click', function handleClick(event) {
    array1.splice(0);
    input1.value = "";
});
//# sourceMappingURL=index.js.map