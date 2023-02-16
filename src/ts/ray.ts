import { Graphics } from "./graphics";
import { Vector2D } from "./vector2d";

export class Ray{
    constructor(
        public position: Vector2D,
        public direction: Vector2D) { }

    public draw(): void { 
        Graphics.context.beginPath();
        Graphics.context.moveTo(this.position.x, this.position.y);
        this.drawRay();
        Graphics.context.stroke();

        this.drawIntersectionWithBorders();
    }

    // Temporary inefficient code
    private drawIntersectionWithBorders(): void{

        const borders = [
            new Ray(new Vector2D(0, 0), new Vector2D(1, 0)), // Border top
            new Ray(new Vector2D(0, 900), new Vector2D(1, 0)), // Border bottom
            new Ray(new Vector2D(0, 0), new Vector2D(0, 1)), // Border left
            new Ray(new Vector2D(900, 0), new Vector2D(0, 1)) // Border right
        ];

        borders.forEach(border => {
            const intersectionPoint = this.getIntersectionPoint(border);
            if(intersectionPoint !== undefined){
                Graphics.context.beginPath();
                Graphics.context.arc(intersectionPoint.x, intersectionPoint.y, 16, 0, 2 * Math.PI, false);
                Graphics.context.fillStyle = 'green';
                Graphics.context.fill();
            }
        });        
    }

    private drawRay(): void {
        Graphics.context.lineTo(
            this.position.x + (this.direction.x * 1000), 
            this.position.y + (this.direction.y * 1000));
    }

    // Returns undefined when the two rays are parallel or intersection behind strart
    public getIntersectionPoint(ray: Ray): (Vector2D | undefined) {

        const cross = this.direction.crossProduct(ray.direction);
        
        // 0 means lines are parallel
        if(cross === 0){
            return undefined;
        }

        const positionDiffence = ray.position.subtractVector(this.position);
        const t = -ray.direction.crossProduct(positionDiffence) / cross;

        // Intersection point behind line start
        if(t < 0){
            return undefined;
        }

        return this.position.addVector(this.direction.multiply(t));
    }
}