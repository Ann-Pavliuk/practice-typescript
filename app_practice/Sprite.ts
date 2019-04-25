
import { Drink } from "./Drink";

export class Sprite extends Drink {
    
    private suggar: number;

    constructor(cost: number, name: string, weight: number, volume: number, suggar: number) {
        super(cost, name, weight, volume)

        this.suggar = suggar;
       
    }

    getInfo(): string {
        let baseInfo: string = super.getInfo(); // вызов метода родительского класса
        return `${baseInfo}, Suggar = ${this.suggar}`;
    }
}
