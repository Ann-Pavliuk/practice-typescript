import { IWritable } from "./IWritable";
import { ContentGenerator } from "./ContentGenerator";
import { Beer } from "./Beer";
import { Sprite } from "./Sprite";
import { Apple } from "./Apple";

window.onload = function(){
    let items: IWritable[] = []; 
    items.push(new Beer(50, "CBS_Beer", 850, 0.75, "Light"));
    items.push(new Sprite(25, "CBS_Sprite_Lemon", 350, 0.25, 10));
    items.push(new Sprite(35, "CBS_Sprite", 350, 0.25, 10));
    items.push(new Sprite(40, "CBS_Sprite", 750, 0.55, 10));
    items.push(new Beer(30, "CBS_Beer_Origin", 750, 0.5, "Black"));
    items.push(new Beer(70, "CBS_Beer_Anniversary", 1000, 0.85, "Lager"));
    items.push(new Apple(10, "CBS_Apple", 100, 0.5, "Red"));
    items.push(new Apple(20, "CBS_Apple", 100, 0.5, "Green"));
    items.push(new Apple(15, "CBS_Apple", 100, 0.5, "Yellow"));


    let div = <HTMLDivElement> document.getElementById("section");
    ContentGenerator.print(div, items);
}
