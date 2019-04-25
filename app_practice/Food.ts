import { Item } from "./Item";

export abstract class Food extends Item {

    private calories: number;

    constructor(cost: number, name: string, weight: number, calories: number) {
        super(cost, name, weight);

        this.calories = calories;

    }

    getInfo(): string {
        let baseInfo: string = super.getInfo(); // вызов метода родительского класса
        return `${baseInfo}, Calories = ${this.calories}`;
    }

    get className() {
        return "food-item";
    }
}