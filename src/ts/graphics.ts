const canvas = document.querySelector('canvas') as any;
const context = canvas.getContext("2d")!;

export class Graphics{
    public static get context(): any { return context; }

    public static clear(): void {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    public static filledRectangle(color: string, x: number, y: number, width: number, height: number): void {
        context.fillStyle = color;
        context.fillRect(x, y, width, height);
    }
}