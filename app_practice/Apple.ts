
import { Food } from "./Food";

export class Apple extends Food {
    
    private variety: string;

    constructor(cost: number, name: string, weight: number, volume: number, variety: string) {
        super(cost, name, weight, volume)

        this.variety = variety;
       
    }

    getInfo(): string {
        let baseInfo: string = super.getInfo(); // вызов метода родительского класса
        return `${baseInfo}, Type = ${this.variety}`;
    }

    // get className() {
    //     return "apple-item";
    // }
}