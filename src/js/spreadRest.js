'use strict'
//=======...REST=======
const sum = function (...args) {
    return args.reduce(function (s, num) {
        return s + num;
    }, 0);
};
// console.log(sum(1, 2, 3, 4, 5));
// // Ещё короче с использованием стрелочных функций
// const sum1 = (...args) => args.reduce((s, num) => s + num, 0);
// console.log(sum1(10, 20, 30, 40, 50));
// console.log(sum1);
// console.dir(sum1);
//===================
let day = [2021, 3, 24]; //переменная в виде массива
console.log(`значение переменной ${day}, видимое кодом:`, day);
const date = new Date(day) //=> Wed Mar 24 2021 00:00:00 GMT+0200 (Восточная Европа, стандартное время)
console.log('direct use of array: ', date);
// console.dir(date);

const date1 = new Date(...day) //=> Sat Apr 24 2021 00:00:00 GMT+0300 (Восточная Европа, летнее время)
console.log('use ...rest to modify array: ', date1);
// console.dir(date1);
