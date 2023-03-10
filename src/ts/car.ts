import { Ray } from './ray';
import { Graphics } from './graphics';
import { Vector2D } from './vector2d';

export class Car{

    constructor(
        private position = new Vector2D(500, 500),
        private velocity = 4,
        private angle = 3.9269,
        private centerRay = new Ray(new Vector2D(), new Vector2D())
    ) {}

    update(): void {
        this.angle += 0.025;

        this.position.x += Math.sin(this.angle) * this.velocity;
        this.position.y -= Math.cos(this.angle) * this.velocity;

        this.centerRay.position = this.position.addVector(
            new Vector2D(
                Math.sin(this.angle) * 38,
                -Math.cos(this.angle) * 38));

        this.centerRay.direction = new Vector2D(
            Math.sin(this.angle),
            -Math.cos(this.angle)
        );
        
        this.updateVelocity();
    }

    updateVelocity(): void {
        this.velocity *= 0.9999;
        
        if(this.velocity <= 0.0001){
            this.velocity = 0;
        }    
    }

    draw(): void{
        Graphics.context.save();
        Graphics.context.translate(this.position.x, this.position.y);
        Graphics.context.rotate(this.angle);
        this.drawCar();
        Graphics.context.restore();
        this.centerRay.draw();
    }

    drawCar(): void {
        Graphics.filledRectangle('#AA0000', -16, -38, 32, 16);
        Graphics.filledRectangle('#FF0000', -16, -22, 32, 48);
        Graphics.filledRectangle('#AA0000', -16, 24, 32, 12);
    }
}