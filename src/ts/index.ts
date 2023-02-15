import { Car } from "./car";
import { Graphics } from "./graphics";

const car = new Car();

function update(): void {
    car.update();
}

function render(): void {
    Graphics.clear();
    car.draw();
}

function gameLoop(): void {
    update();
    render();

    requestAnimationFrame(gameLoop);
}

gameLoop();