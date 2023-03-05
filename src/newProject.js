import { Araaaay } from ".";
import { ToDo } from "./ToDo";
 
export class makeArray{
    constructor(ProjecTtitle){                          //creates a project array
        const newArray = new Array();
        this.arry = newArray;
        this.ProjecTtitle = ProjecTtitle;
    }
  
}

 export function AddTodo(arraay, Todoo) {

 arraay.push(Todoo);
 return arraay;
}                                          // accepts an array and a todo to be added to the array

const nwPro = document.querySelector(".Project");
nwPro.addEventListener("click",AddNewProject);


export function AddNewProject(){
    hideForm()
    document.getElementById("newProjectBtn").disabled = true;
    const proDiv = document.querySelector(".newButton");
    const proForm = document.createElement("input");
    proForm.setAttribute("type", "text");
    proForm.setAttribute("id", "ProjectName");
    proForm.setAttribute("placeholder", "Project Name");
    proDiv.appendChild(proForm);
    const subpro = document.createElement('button');
    subpro.setAttribute("id","submitProject")
    subpro.textContent = "Create Project";
    proDiv.appendChild(subpro);
    subpro.addEventListener("click",CreateProject)


}
export function CreateProject(){
    
    document.getElementById("newProjectBtn").disabled = false;
    const proName = document.querySelector("#ProjectName");
    const proDiv = document.querySelector(".ProjectLineup");// Adding a function to accept project name and create the project array
    const NewProjectName = proName.value;
    const newProjectArray = new Araaaay(NewProjectName);
   
    console.log(newProjectArray.ary);
    console.log(newProjectArray.title);
    
    
    const proTile = document.createElement('div');
    proTile.textContent = proName.value;
   // document.querySelector(".newButton").innerHTML= "";
    proDiv.appendChild(proTile);
    const ToDoBtn = document.createElement("button")
    ToDoBtn.textContent = "Create To Do"
    ToDoBtn.className = "CreateToDo"
    proDiv.appendChild(ToDoBtn)
    ToDoBtn.addEventListener("click", ShowToDoForm)
    return{newProjectArray};


}
function hideForm()
{
    document.querySelector(".input").style.display = "none";
   
}


function ShowToDoForm(){

    document.querySelector(".input").style.display = "";
    const SubitToDoBtn = document.createElement("button");
    SubitToDoBtn.textContent = "Submit To Do"
    document.querySelector(".input").appendChild(SubitToDoBtn);
    SubitToDoBtn.addEventListener("click",IntakeToDo)
}



function IntakeToDo(){

    let title = document.getElementById("Title").value;
    let DueDate = document.getElementById("DueDate").value;
    let Description = document.getElementById("Description").value;
    let Done = document.getElementById("Done").value;

    if( title == "" || DueDate == "" || Description == "" || Done == "")
    return;
    else{
         let newTodo = new ToDo(title,Description,DueDate,Done);
        AddTodo(CreateProject().newProjectArray.ary,newTodo);
        console.log("hello")
        console.log(CreateProject().newProjectArray.ary);
    }


}







