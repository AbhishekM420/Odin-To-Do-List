import { makeArray } from "./newProject";
import { ToDo } from "./ToDo";
import { newCard } from "./domFactor";
import { AddTodo } from "./newProject";

const todo1 = new ToDo("oh yah","to do is to shop grocery","today","not done"); // check instance of class is working
const todo2 = new ToDo("oh yh","to do is t shop grocery","toay","not dne"); // check instance of class is working


export function DoThis(){
const todo1 = new ToDo("oh yah","to do is to shop grocery","today","not done"); // check instance of class is working
const todo2 = new ToDo("oh yh","to do is t shop grocery","toay","not dne"); // check instance of class is working

const newpr = new makeArray ("fake pro");
newpr.arry.push(todo1);

AddTodo(newpr.arry,todo2);
console.log(newpr.arry);
return newpr;

}
//newCard();

export class Araaaay{
    constructor(arrname){
        this.title = arrname;
        [arrname] = new Array();
        this.ary = [arrname];

    }
}

const nwww = new Araaaay("fakename");
nwww.ary.push(todo1);
AddTodo(nwww.ary,todo2)

