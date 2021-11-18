'use strict'

//===
//=====
//=======
// var myMethod = function () {
//      console.log(this);
// };
// // var myMethod = () => { //это определение дает при вызове undefined
// //      console.log(this);
// // };
// var myObject = {
//      myMethod: myMethod
// };
// myObject.myMethod() // {myMethod: ƒ}
// //=======================
// function foo(a) {
//      this.a = a;
// }
// let bar = new foo(2);
// console.log(bar.a); // 2
//==================================
// const myObject = {
//      myArrowFunction: null,
//      myMethod: function () {
//           this.myArrowFunction = () => { console.log(this) };
//      }
// };
// myObject.myMethod() // this === myObject - {myArrowFunction: ƒ, myMethod: ƒ}

// myObject.myArrowFunction() // this === myObject - {myArrowFunction: ƒ, myMethod: ƒ}

// const myArrowFunction = myObject.myArrowFunction;
// myArrowFunction() // this === myObject
//========================================
// // ES6
// var obj = {
//      btn: document.links[0], //document.links Возвращает объект всех элементов <area> и <a>, присутствующих на странице с значением атрибута href.
//      log: function (message) {
//           console.log(message);
//           return this;
//      },
//      init: function () {
//           this.btn.addEventListener('click', () => this.log('Button Clicked!'), false);
//      } //this вешает слушателя на btn, и вызывает метод log при клике на кнопку!
// };
// //============================================================
// (function () {
//      'use strict';
//      // Переменные a и b находятся в области видимости 
//      // самовызывающейся анонимной функции и не доступны
//      // на более высоких уровнях
//      var a = 10;
//      var b = 20;
//      // Для вывода переменной в глобальную область видимости
//      // используется подобная конструкция
//      window.b = b;
// })();

// // console.log(a); // undefined
// console.log(b); // 20
// // ==================================
// let x = 0;
// function foo() {
//      let x = 1;
//      if (x) {
//           (function () {
//                var x = 2;
//                console.log(x); //2
//           }());
//      }
//      console.log(x);// x всё ещё 1. 
// }
// console.log(x);
// foo()
// //======================
// if (false) {
//      var a = 10;
// }

// console.log(a);
//===========================
// {
//      let _nested = 'secret'
//      function nested() {
//           return _nested
//      }
// }
// console.log(nested()) //TypeError: nested is not a function
// // nested не определена
//================
// var nested
// {
//      let _nested = 'секрет'
//      nested = function () {
//           return _nested
//      }
// }
// console.log(nested()) // <- 'секрет'
//===================
// function code(groceries) {
//      return { eat }; // эквивалентно записи const newLocal = { eat }; return newLocal;
//      function eat() {
//           if (groceries.length === 0) {
//                throw new Error('Всё. Пожалуйста, купите больше продуктов, чтобы покормить код.')
//           }
//           return groceries.pop()
//      }
// }
// const groceries = ['морковь', 'лимон', 'картофель', 'индейка']
// console.log(code(groceries).eat()); //вызов метода eat() определенного функцией function eat()

// let eater = code(groceries)
// console.log(eater);
// console.log(eater.eat())
// console.log(groceries);
//==============================
// var foo = 1;
// function bar() {
//      if (!foo) {
//           var foo = 10; //глобальная обасть видимости
//      }
//      alert(foo);
// }
// bar();//10
//========================
// var math = {
//      factorial: function (num) {
//           console.log(this);
//           return num <= 0 ? 1 : num * math.factorial(num - 1);
//      }
// };
// console.log(math.factorial(5)); // 120
//======================
// var run = {
//      factorial: function factorial(num) {
//           // console.log(this);
//           return num <= 0 ? 1 : num * factorial(num - 1);
//      }
// };
// console.log(run.factorial(5)); // 120
//=======================
// Коллекции DOM элементов
// let result = [];
// for (let link of document.links) {
//      result.push(link.href);
// }
// console.log(result); // ['http://google.com', 'http://jsraccoon.ru', ...]
//===================
//===Class===
// class Person {
//      constructor(name) { //параметры, которые передаются в конструктор при вызове
//           this.name = name;
//      }
//      sayName() { //метод, описывающий действие. К нему можно обратиться при вызове объекта
//           console.log(`Person ${this.name} said his name`);
//      }
// }
// const john = new Person('John');
// john.sayName(); // Person John said his name

// class GreatPerson extends Person {
//      constructor(name, phrase, run) { //параметры, которые передаются в конструктор при вызове
//           super(name);
//           this.phrase = phrase;
//           this.run = run;
//      }
//      sayPhrase() { //метод, описывающий действие. К нему можно обратиться при вызове объекта
//           console.log(`${this.name} says: "${this.phrase}"`)
//      }
//      runSlow() {
//           console.log(`${this.name} runs ${this.run}`);
//      }

//      runFast() {
//           console.log(`${this.name} runs ${this.run}`);
//      }
// }
// const jane = new GreatPerson('Jane', 'Hello, World!', 'with spead 6 km/h');
// jane.sayName(); // Person Jane said his name
// jane.sayPhrase(); // Jane says: "Hello, World!"
// jane.runSlow();
// jane.runFast();

// const david = new GreatPerson('David', '', 'with spead 15 km/h'); //необходимо указать все 3 параметра, хоть пустые, определенные в constructor
// david.sayName();
// david.runFast();
//===================
// var obj = { a: 1 };
// // у объекта нет свойства b
// var { a: x, b: y } = obj;
// // переменной y будет присвоено undefined
// console.log(x, y); // 1 undefined