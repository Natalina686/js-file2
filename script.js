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
// console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку*

// function byProperty(property, direction) {
// // тут ваш код*
// if (direction === ">") {
//     return ((a, b) => a[property] - b[property]);
// }
// if (direction === "<") {
//     return ((a, b) => b[property] - a[property]);
// }





// movies.sort((a, b) => a.releaseYear - b.releaseYear);
// movies.sort((a, b) => b.runningTimeInMinutes - a.runningTimeInMinutes);
// // movies.sort((a, b) => a.movieName.localeCompare(b.movieName));
// }


// продвинута робота з функціями 2


// detonatorTimer(3);
// 3
// 2
// 1
// BOOM!*

// function detonatorTimer(delay) {
// if (delay > 0) {
//     console.log(delay);
//     delay --;
//     setTimeout(detonatorTimer, 1000, delay);
// } else if (delay === 0) {
// console.log(`BOOM!`);
// }
// }


// function detonatorTimer(from) {
//     let current = from;
  
//     let timerId = setInterval(function() {

//       if (current != 0) {
//         console.log(current);
//       }

//       if (current == 0) {
//         console.log(`BOOM!`);
//         clearInterval(timerId);
//       }
//       current--;
//     }, 1000);
//   }
  
//   detonatorTimer(3);

// 2 задача

// let dog = {
//     name: "Baddy",
//     breed: "Cane Corso",
//     gender: "male",
//     age: 3,
//     nativeCountry: "Italy",
//     bestCountry: "Ukraine",
//     currentCountry: "Germany",
//     hobby: "snap",
//     introduce() {
//     console.log(`My name is ${this.name}, and I am living in ${this.currentCountry}.`);
//     },
//     wishes() {
//         console.log(`I am sure that in age ${this.age+1}, I am gonna be a Daddy!`);
//     },
//     hopes () {
//         console.log(`I am going to visit ${this.nativeCountry} and come back to ${this.bestCountry}.`);
//     },
// }

// dog.introduce();
// dog.wishes();
// dog.hopes();

// let securedSelfIntroduce = dog.introduce.bind(dog);
// let securedWishes = dog.wishes.bind(dog);
// let securedHopes = dog.hopes.bind(dog);

// setTimeout(securedSelfIntroduce, 1000); 
// setTimeout(securedWishes, 2000); 
// setTimeout(securedHopes, 3000); 



// 4 задача
 
// let interval = setInterval(function(greet, name) {
// let g = greet;
// let n = name;

// console.log(g, n);
// clearInterval(interval);
// }, 5000, "Hello, ", "Sergiy!");

// function wish() {
//  let message = "Chill out, you will get you result in 5 seconds.";
//   console.log(message);
// }
// wish();

function someFunction(greet, name) {
let g = greet;
let n = name;
console.log(g, n);
}

// создаём обёртки
let slowedSomeFunction = slower(someFunction, 5000);


slowedSomeFunction("Hello, ", "Sergiy!"); // показывает "test" после 1000 мс


function slower(someFunction, ms) {
  console.log("Chill out, you will get you result in 5 seconds")
  return function() {
    setTimeout(() => someFunction.apply(this, arguments), ms);
  };

}
