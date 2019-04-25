import { IWritable } from "./IWritable";

export abstract class Item implements IWritable {
    private cost: number;
    private name: string;
    private weight: number;

    constructor( cost: number, name: string, weight: number) {
        this.cost = cost;
        this.name = name;
        this.weight = weight;
    }

    getInfo(): string {
        return `This is ${this.name}, Cost = ${this.cost}, Weight = ${this.weight}`;
    }

    get className() {
        return "item";
    }

}