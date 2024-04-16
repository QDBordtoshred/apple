import GameEnv from './GameEnv.js';
import GameObject from './GameObject.js';
export class Hole extends GameObject {
    constructor(canvas, image, data, xPercentage, yPercentage) {
        super(canvas, image, data);
        this.holeX = xPercentage * GameEnv.innerWidth;
        this.holeY = yPercentage;
    }
    // Required, but no update action
    update() {
        //console.log(this.platformY)
    }

    // Draw position is always 0,0
    draw() {
        this.ctx.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height);
    }
    // Set platform position
    size() {
        // Formula for Height should be on constant ratio, using a proportion of 832
        const scaledHeight = GameEnv.innerWidth * (1/27);
        const scaledWidth = scaledHeight;  // width of jump platform is 1/10 of height
        const holeX = this.holeX;
        const holeY = (GameEnv.bottom - scaledHeight) * this.holeY;
        // set variables used in Display and Collision algorithms
        this.bottom = holeY;
        this.collisionHeight = scaledHeight;
        this.collisionWidth = scaledWidth;
        //this.canvas.width = this.width;
        //this.canvas.height = this.height;
        this.canvas.style.width = `${scaledWidth}px`;
        this.canvas.style.height = `${scaledHeight}px`;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = `${holeX}px`;
        this.canvas.style.top = `${holeY}px`;
    }
}
export default Hole;