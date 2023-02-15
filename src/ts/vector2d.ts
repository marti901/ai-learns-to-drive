export class Vector2D {
    constructor(public x = 0, public y = 0) { }

    add(f: number): Vector2D { 
        return new Vector2D(this.x + f, this.y + f);
    }

    addVector(v: Vector2D): Vector2D { 
        return new Vector2D(this.x + v.x, this.y + v.y);
    }

    multiply(f: number) : Vector2D {
        return new Vector2D(this.x * f, this.y * f);
    }

    multiplyByVector2D(v: Vector2D) : Vector2D {
        return new Vector2D(this.x * v.x, this.y * v.y);
    }

    toString(): string {
        return `{ x: ${this.x}, y: ${this.y} }`;
    }
}