import { Item } from "./Item";

export abstract class Drink extends Item {
    
    private volume: number;

    constructor(cost: number, name: string, weight: number, volume: number) {
        super(cost, name, weight);

        this.volume = volume;
       
    }

    getInfo(): string {
        let baseInfo: string = super.getInfo(); // вызов метода родительского класса
        return `${baseInfo}, Volume = ${this.volume}`;
    }

    get className() {
        return "drink-item";
    }
}