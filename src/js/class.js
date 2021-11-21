'use strict'
// class Figure {
//     static type = 'FIGURE'
//     constructor(opts) {
//         this.width = opts.width
//         this.height = opts.height
//         this.color = opts.color
//     }

//     infoSay() {
//         console.log('I\'m a figure');
//     }
// }

// const box = new Figure({
//     width: 100,
//     height: 100,
//     color: 'red',
// })
// console.log(box);
// box.infoSay();


// class Circle extends Figure {
//     static type = 'CIRCLE'
//     constructor(opts) {
//         super(opts)
//         this.borderRadius = opts.borderRadius = 50
//     }

//     get actualWidth() {
//         console.log(this.width);
//     }

//     set actualWidth(newWidth) {
//         this.width = newWidth;
//     }

//     square() {
//         return `${(`${this.width}` * `${this.width}` / 4) * 3.14}`;
//     }
// }
// const circle = new Circle({
//     width: 3,
//     color: 'red',
// })

// console.log(circle);
// console.log('circle square = ', circle.square());
// console.log('init width ', circle.actualWidth);
// console.log('new width ', circle.actualWidth = 5);
// console.log('circle square = ', circle.square());
// console.log('border radius = ', circle.borderRadius);
// console.log(circle);

// const circle = new Circle({
//     width: 200,
//     height: 200,
//     color: 'green',
//     borderRadius: 50,
// })
// console.log(circle);
// circle.infoSay();

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }
    hide() {
        this.$el.style.display = 'none'
    }
    show() {
        this.$el.style.display = 'box'
    }
}

class Circle extends Component {
    constructor(opts) {
        super(opts.selector)
        this.$el.style.width = this.$el.style.height = `${opts.size}px`
        this.$el.style.backgroundColor = opts.color
        this.$el.style.border = `3px solid black`
        this.$el.style.borderRadius = `50%` //borderRadius - camelCase, иначе не работает!!!
        this.size = opts.size
        this.color = opts.color
    }
    showEl() { console.log(this.$el); }

    square() {
        this.$el.style.borderRadius = 0
        // this.$el.style.backgroundColor = 'yellow'
    }
    circle() {
        this.$el.style.borderRadius = `50%`
        // this.$el.style.backgroundColor = opts.color
    }

    showMessage() {
        console.log('Hi')
    }
}

const circle1 = new Circle({
    selector: '#circle1',
    size: 300,
    color: 'red',
})

circle1.showEl();
const circle1El = document.querySelector('#circle1')
// circle1El.addEventListener('click', circle1.hide); //при передаче метода circle1.hide не работает... при вызове метода circle1.hide() сразу прячет элемент
const circleHide = () => {
    circle1.hide()
}
circle1El.addEventListener('mouseenter', () => circle1.square()); //передача функции circleHide, заменена на часть - анонимную стрелочную функцию

circle1El.addEventListener('mouseleave', () => circle1.circle());

circle1El.addEventListener('click', () => circle1.showMessage());