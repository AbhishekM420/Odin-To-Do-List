
import { ToDo } from "./ToDo";
import { displayProject } from "./domFactor";
import { IntakeToDo } from "./ToDo";
import { hideForm } from "./domFactor";
import { AddNewProject } from "./domFactor";

 
export class Araaaay{        //class that creates the conatiner ie array to hold the todos and the project name
  constructor(arrname){
      this.title = arrname;
      [arrname] = new Array();
      this.ary = [arrname];

  }
}


 export function AddTodo(arraay, Todoo) {       // accepts an array and a todo to be added to the array


 arraay.push(Todoo);
 return arraay;
}                                          

const ProjectContainerArray = new Array();    // create an array for the projects


  

export function createProject() {       // Adding a function to accept project name and create the project array
    
    
    const proName = document.querySelector("#ProjectName");
    if(proName.value != ""){
    const NewProjectName = proName.value;
    document.getElementById("ProjectName").value = "";
    const newProjectArray = new Araaaay(NewProjectName);    // Creates a container with the name and array ie araaay class
   
    console.log(newProjectArray.ary);
    console.log(newProjectArray.title);
   
    ProjectContainerArray.push(newProjectArray); // pushes the new project arraaay into the project container array
    document.querySelector(".ProjectLineup").innerHTML = "" ;
    displayProject();    // calls function that des dom manip to display project name.
    } 
    }
   
export function rtnProContArr(){
  return {ProjectContainerArray};    //exports the project container array so that it can be imported
}











