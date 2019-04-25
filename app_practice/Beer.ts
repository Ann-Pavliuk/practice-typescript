
import { Drink } from "./Drink";

export class Beer extends Drink {
    
    private type: string;

    constructor(cost: number, name: string, weight: number, volume: number, type: string) {
        super(cost, name, weight, volume)

        this.type = type;
       
    }

    getInfo(): string {
        let baseInfo: string = super.getInfo(); // вызов метода родительского класса
        return `${baseInfo}, Type = ${this.type}`;
    }

    get className() {
        return "beer-item";
    }
}