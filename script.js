"use strict";
// 1. Напишіть функцію addThemAll яка буде знаходити сумму усіх своїх аргументів незалежно від їх кількості (але без використання вбутованого об'єкту Math).
// Використайте оператор розширення:

// console.log(addThemAll(2,4)); // 6*
// console.log(addThemAll(1,2,3,4)); // 10*
// console.log(addThemAll(5,5,10)); // 20*

// function addThemAll(...numbers) {
//     let sum = 0;
//     for (const number of numbers) {
//         sum += number;
//     }
//     return sum;
// }

// // . Задача2 на використання замикання. Напишіть функцію яка працює таким чином: multiply(a)(b)// a * b

// console.log(multiply(5)(5))		// 25*
// console.log(multiply(2)(-2))	        // -4*
// console.log(multiply(4)(3))		// 12*

// function multiply(a) {
//   return function(b) {
//     return a * b;
//     // твій код
//   };
// };


// 3. Напишіть функцію яка буде використовуватись для сортування масиву фільмів. Функція буде приймати два аргумента:

// властивість за якою треба посортувати2. опцію напрямку сортування, зростання чи спадання

const movies = [
{
movieName: 'The Thing',
releaseYear: 1982,
directedBy: 'Carpenter',
runningTimeInMinutes: 109,
},
{
movieName: 'Aliens',
releaseYear: 1986,
directedBy: 'Cameron',
runningTimeInMinutes: 137,
},
{
movieName: 'Men in Black',
releaseYear: 1997,
directedBy: 'Sonnenfeld',
runningTimeInMinutes: 98,
},
{
movieName: 'Predator',
releaseYear: 1987,
directedBy: 'McTiernan',
runningTimeInMinutes: 107,
},
];

// console.log(movies.sort(byProperty('releaseYear', '>'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
// console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку*

function byProperty(property, direction) {
// тут ваш код*
if (direction === ">") {
    return ((a, b) => a[property] - b[property]);
}
if (direction === "<") {
    return ((a, b) => b[property] - a[property]);
}





// movies.sort((a, b) => a.releaseYear - b.releaseYear);
// movies.sort((a, b) => b.runningTimeInMinutes - a.runningTimeInMinutes);
// movies.sort((a, b) => a.movieName.localeCompare(b.movieName));
}