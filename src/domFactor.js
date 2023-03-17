import { DeleteProject } from "./DelProjectTodo";
import { AddTodo } from "./newProject";
import { IntakeToDo } from "./ToDo";
import { rtnProContArr } from "./newProject";
import { DeleteTodo } from "./DelProjectTodo";
import { createProject } from "./newProject";

// to add the various divs and other stuff to the content






/*for(let i = 0; i< DoThis().arry.length;i++){
  const tit = document.createElement('div');
  tit.textContent = "Title"+" : " + DoThis().arry[i].title;
  const desc = document.createElement('div');
  desc.textContent = "Description"+" : " + DoThis().arry[i].description;    //code might be usefull later
  const dudate = document.createElement('div');
  dudate.textContent = "Due Date"+" : " + DoThis().arry[i].duedate;
  const don = document.createElement('div');
  don.textContent = "Done"+" : " + DoThis().arry[i].done;

  proCard.appendChild(tit);
  proCard.appendChild(desc);
  proCard.appendChild(dudate);
  proCard.appendChild(don);
  
*/

  
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
      ToDoBtn.addEventListener("click", ShowToDoForm,false);
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
        let para = document.createElement('p');
        para.textContent =`${key} : ${value}`;
        console.log(`${key} : ${value}`);
        ToDoTile.appendChild(para);
        }
        const DeletTodoBtn = document.createElement('button');
        DeletTodoBtn.value = j;
        DeletTodoBtn.id = i;     // this is so that the corresponding project number can be understood while deleting
        DeletTodoBtn.textContent = "Delete To Do"
        ToDoTile.appendChild(DeletTodoBtn);
        DeletTodoBtn.addEventListener("click",DeleteTodo, false)
      }
      
     } 


    
   // document.querySelector(".newButton").innerHTML= "";
   
    
    
   
   
   
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
  subpro.addEventListener("click",createProject)

  }