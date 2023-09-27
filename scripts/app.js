//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");
/** @type {CanvasRenderingContext2D} */
//@ts-ignore we know ctx is not null
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;


class Shape {
    constructor(startX, startY) {

        this.x = startX;
        this.y = startY;

        this.width = 100;
        this.height = 100;

        this.color = "red";
        this.speed = 10;
        this.xDirection = 1;
        this.yDirection = 1;
    }
    update() {
        if (this.x < 0 || this.x + this.width > canvas.width) {
            this.xDirection *= -1;
        }
        if (this.y < 0 || this.y + this.height > canvas.height) {
            this.yDirection *= -1;
        }
        this.x += this.speed * this.xDirection;
        this.y += this.speed * this.yDirection;
    }
    draw() {

        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.height, this.width)
    }
}
let shapes = []
for (let i = 0; i < 20; i++) {
    shapes.push(new Shape(0, i))

}

let shape1 = new Shape(0, 0)

shape1.draw();

// canvas.addEventListener("click", () => {

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     shape1.update();
//     shape1.draw();
// })

let animationLoop = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shape1.update();
    shape1.draw();
    window.requestAnimationFrame(animationLoop);
}
window.requestAnimationFrame(animationLoop);