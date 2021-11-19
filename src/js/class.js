'use strict'
class Figure {
    static type = 'FIGURE'
    constructor(parameters) {
        this.width = parameters.width
        this.height = parameters.height
        this.color = parameters.color
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
    constructor(parameters) {
        super(parameters)

        this.borderRadius = parameters.borderRadius
    }
}

// const circle = new Circle({
//     width: 200,
//     height: 200,
//     color: 'green',
//     borderRadius: 50,
// })
// console.log(circle);
// circle.infoSay();