'use strict'
class Figure {
    static type = 'FIGURE'
    constructor(opts) {
        this.width = opts.width
        this.height = opts.height
        this.color = opts.color
    }

    infoSay() {
        console.log('I\'m a figure');
    }
}

const box = new Figure({
    width: 100,
    height: 100,
    color: 'red',
})
console.log(box);
box.infoSay();


class Circle extends Figure {
    static type = 'CIRCLE'
    constructor(opts) {
        super(opts)
        this.borderRadius = opts.borderRadius = 50
    }

    get actualWidth() {
        console.log(this.width);
    }

    set actualWidth(newWidth) {
        this.width = newWidth;
    }

    square() {
        return `${(`${this.width}` * `${this.width}` / 4) * 3.14}`;
    }
}
const circle = new Circle({
    width: 3,
    color: 'red',
})

console.log(circle);
console.log('circle square = ', circle.square());
console.log('init width ', circle.actualWidth);
console.log('new width ', circle.actualWidth = 5);
console.log('circle square = ', circle.square());
console.log('border radius = ', circle.borderRadius);
console.log(circle);

// const circle = new Circle({
//     width: 200,
//     height: 200,
//     color: 'green',
//     borderRadius: 50,
// })
// console.log(circle);
// circle.infoSay();