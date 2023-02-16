import { Graphics } from "./graphics";
import { Vector2D } from "./vector2d";

export class Ray{
    constructor(
        public startPosition: Vector2D,
        public direction: Vector2D) { }

    public draw(): void { 
        Graphics.context.beginPath();
        Graphics.context.moveTo(this.startPosition.x, this.startPosition.y);
        this.drawRay();
        Graphics.context.stroke();
    }

    private drawRay(): void {
        Graphics.context.lineTo(
            this.startPosition.x + (this.direction.x * 1000), 
            this.startPosition.y + (this.direction.y * 1000));
    }
}