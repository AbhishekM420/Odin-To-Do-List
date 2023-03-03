import { newProject, project, makeArray } from "./newProject";
import { ToDo } from "./ToDo";
import { newCard } from "./domFactor";
import { AddTodo } from "./newProject";









const todo1 = new ToDo("oh yah","to do is to shop grocery","today","not done"); // check instance of class is working
const todo2 = new ToDo("oh yh","to do is t shop grocery","toay","not dne"); // check instance of class is working

const newpr = new makeArray;
newpr.push(todo1);

AddTodo(newpr,todo2);
console.log(newpr);
