"use strict";
// 1. Напишіть функцію addThemAll яка буде знаходити сумму усіх своїх аргументів незалежно від їх кількості (але без використання вбутованого об'єкту Math).
// Використайте оператор розширення:

console.log(addThemAll(2,4)); // 6*
console.log(addThemAll(1,2,3,4)); // 10*
console.log(addThemAll(5,5,10)); // 20*

function addThemAll(...numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
}

// . Задача2 на використання замикання. Напишіть функцію яка працює таким чином: multiply(a)(b)// a * b

console.log(multiply(5)(5))		// 25*
console.log(multiply(2)(-2))	        // -4*
console.log(multiply(4)(3))		// 12*

function multiply(a, b) {
    
function getResult() {
    return a * b;
}
}