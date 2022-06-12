export class Point {
    constructor(index, x, y) {
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.1;
        this.cur = index;
        this.max = Math.random() * 100 + 150;

        this.stageHeight = document.body.clientHeight;
        this.center_pos = this.stageHeight / 2;
        
        this.mouse = {
            x: null,
            y: this.center_pos
        }

        window.addEventListener('mousemove', e => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
            console.log(this.mouse.x, this.mouse.y);
        })
    }

    update() {
        this.cur += this.speed;
        this.max = this.center_pos - this.mouse.y;
        this.y = this.fixedY + (Math.sin(this.cur) * this.max);
    }
} 