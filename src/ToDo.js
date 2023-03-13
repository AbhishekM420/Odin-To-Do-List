
//creating a class to represent the to do individual items and exporting

import { justReturnArraay } from "./misc";
import { AddTodo } from "./newProject";
import { createProject } from "./newProject";



export class ToDo  {                             
constructor (Title, Description, Duedate, Done) {
    this.title = Title;
    this.description = Description;
    this.duedate = Duedate;
    this.done = Done;
   
}}

export function IntakeToDo(){

    let title = document.getElementById("Title").value;
    let DueDate = document.getElementById("DueDate").value;               // gets the values of to do from the form 
    let Description = document.getElementById("Description").value;
    let Done = document.getElementById("Done").value;

    if( title == "" || DueDate == "" || Description == "" || Done == "")
    return;
    else{
         let newTodo = new ToDo(title,Description,DueDate,Done);   // creates new to do and pushes the newly created to do object in the array
        AddTodo(createProject().newProjectArray.ary,newTodo);
        console.log("hello")
        console.log(createProject().newProjectArray.ary);
    }


}