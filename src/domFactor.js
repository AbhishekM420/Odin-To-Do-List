import { DeleteProject } from "./DelProjectTodo";
import { AddTodo } from "./newProject";
import { IntakeToDo } from "./ToDo";
import { rtnProContArr } from "./newProject";
import { DeleteTodo } from "./DelProjectTodo";
import { createProject } from "./newProject";
import { DoneUndone } from "./ToDo";

// to add the various divs and other stuff to the content

  
  export function displayProject(){    // a dom manip function to display project titles and append create to do buttons

    const proDiv = document.querySelector(".ProjectLineup");
  
     for(let i = 0; i< rtnProContArr().ProjectContainerArray.length; i++) {
      
      const proTile = document.createElement('div');
      proTile.textContent = "Project Name :   "+ rtnProContArr().ProjectContainerArray[i].title;
      proTile.className = "ProjectTile"
      const projectCard = document.createElement('div');
      projectCard.id = i;
      projectCard.className = 'projectCard';
      proDiv.appendChild(projectCard);
      projectCard.appendChild(proTile)
      const ToDoBtn = document.createElement("button");
      ToDoBtn.textContent = "Create To Do";
      ToDoBtn.className = "CreateToDo";
      ToDoBtn.value = i;
      projectCard.appendChild(ToDoBtn);
      ToDoBtn.addEventListener("click", ShowToDoForm,false);  // calls the function to display the to do entry form
      const DelBtn = document.createElement('button');
      DelBtn.textContent ='Delete Project';
      DelBtn.value = i ;
      projectCard.appendChild(DelBtn);
      DelBtn.addEventListener('click',DeleteProject, false);

      
      for(let j = 1; j <rtnProContArr().ProjectContainerArray[i].ary.length; j++){

        const ToDoTile = document.createElement('div');          //creating seperate cards for each todos          
        ToDoTile.className = 'TodoTile';
        document.getElementById(i).appendChild(ToDoTile);
        for(const[key,value] of Object.entries(rtnProContArr().ProjectContainerArray[i].ary[j])){
        if(key != "Done"){
          let para = document.createElement('p');
        para.textContent =`${key} : ${value}`;       //displaying the values of the object entries
        console.log(`${key} : ${value}`);
        ToDoTile.appendChild(para);
        }
        }
        const Donebtn = document.createElement("button");
        Donebtn.className = "Done";
        Donebtn.textContent = rtnProContArr().ProjectContainerArray[i].ary[j].Done;
        Donebtn.value = j;
        Donebtn.id = i;
        ToDoTile.appendChild(Donebtn);
        Donebtn.addEventListener("click",DoneUndone,false);  //triggers function to toggle between done and undone
        const DeletTodoBtn = document.createElement('button');
        DeletTodoBtn.value = j;
        DeletTodoBtn.id = i;     // this is so that the corresponding project number can be understood while deleting
        DeletTodoBtn.textContent = "Delete To Do"
        ToDoTile.appendChild(DeletTodoBtn);
        DeletTodoBtn.addEventListener("click",DeleteTodo, false)

      }
      
     } 
}
export function ShowToDoForm(){

  document.querySelector(".input").style.display = "";
  const SubitToDoBtn = document.getElementById('SubmitToDoBtn');
  SubitToDoBtn.value= this.value;
  SubitToDoBtn.addEventListener("click",IntakeToDo, false)
}
 export function hideForm()
{   
  document.getElementById("addProject").reset();
    document.querySelector(".input").style.display = "none";
   
}



export function AddNewProject(){                       //displays form to add new project
  hideForm()
  document.getElementById("newProjectBtn").disabled = true;    //once clicked, the create project input appears and new project button is not required
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
  subpro.addEventListener("click",createProject)

  }