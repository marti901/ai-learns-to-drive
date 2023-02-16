export class Vector2D {
    constructor(public x = 0, public y = 0) { }

    public add(f: number): Vector2D { 
        return new Vector2D(this.x + f, this.y + f);
    }

    public addVector(v: Vector2D): Vector2D { 
        return new Vector2D(this.x + v.x, this.y + v.y);
    }

    public multiply(f: number) : Vector2D {
        return new Vector2D(this.x * f, this.y * f);
    }

    public multiplyByVector2D(v: Vector2D) : Vector2D {
        return new Vector2D(this.x * v.x, this.y * v.y);
    }

    public calculateLength(): number {
        return Math.sqrt((this.x*this.x)+(this.y*this.y));
    }

    public dotProduct(v: Vector2D): number{
        return this.x*v.x + this.y*v.y;
    }

    public getNomalized(): Vector2D{
        const length = this.calculateLength();
        return new Vector2D(this.x/length, this.y/length);
    }

    public  toString(): string {
        return `{ x: ${this.x}, y: ${this.y} }`;
    }
}