
//creating a class to represent the to do individual items and exporting


import { AddTodo } from "./newProject";
import { rtnProContArr } from "./newProject";
import { Araaaay } from "./newProject"
import { displayProject } from "./domFactor";
import { hideForm } from "./domFactor";




export class ToDo  {                             
constructor (Title, Description, Duedate) {
    this.Title = Title;
    this.Description = Description;
    this.Duedate = Duedate;
    this.Done = "Undone"; // setting the value of done to undone by default
   
}}

export function IntakeToDo(){

    let title = document.getElementById("Title").value;
    let DueDate = document.getElementById("DueDate").value;               // gets the values of to do from the form 
    let Description = document.getElementById("Description").value;
    

    if( title == "" || DueDate == "" || Description == "" )
    return;
    else{
         let newTodo = new ToDo(title,Description,DueDate);   // creates new to do and pushes the newly created to do object in the array
        AddTodo(rtnProContArr().ProjectContainerArray[this.value].ary,newTodo);
        console.log("hello")
        console.log(rtnProContArr().ProjectContainerArray[this.value].ary);
        hideForm();
        document.querySelector(".ProjectLineup").innerHTML = "" ;//clearing the contents of the div so that projects dont get repeated
        displayProject();

        
    }


}
export function DoneUndone(){                //function to toggle the value of done and undone
    if (this.textContent == "Undone"){
        this.textContent ="Done";
        rtnProContArr().ProjectContainerArray[this.id].ary[this.value].Done = "Done"
    }
     else{
        this.textContent = "Undone"
        rtnProContArr().ProjectContainerArray[this.id].ary[this.value].Done = "Undone"

     }
}