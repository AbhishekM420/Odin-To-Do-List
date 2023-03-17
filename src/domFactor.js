import { DeleteProject } from "./DelProjectTodo";
import { AddTodo } from "./newProject";
import { IntakeToDo } from "./ToDo";
import { rtnProContArr } from "./newProject";
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
      proTile.textContent = rtnProContArr().ProjectContainerArray[i].title;
      proTile.className = "ProjectTile"
      proDiv.appendChild(proTile);
      const ToDoBtn = document.createElement("button");
      ToDoBtn.textContent = "Create To Do";
      ToDoBtn.className = "CreateToDo";
      ToDoBtn.value = i;
      proDiv.appendChild(ToDoBtn);
      ToDoBtn.addEventListener("click", ShowToDoForm,false);
      const DelBtn = document.createElement('button');
      DelBtn.textContent ='Delete Project';
      DelBtn.value = i ;
      proDiv.appendChild(DelBtn);
      DelBtn.addEventListener('click',DeleteProject, false);

      for(const[key,value] of Object.entries(rtnProContArr().ProjectContainerArray[i]) ){
        let para = document.createElement('p');
        para.textContent =`${key} : ${value}`
        proDiv.appendChild(para);
      }
      
     } 


    
   // document.querySelector(".newButton").innerHTML= "";
   
    
    
   
   
   
}
export function ShowToDoForm(){

  document.querySelector(".input").style.display = "";
  const SubitToDoBtn = document.createElement("button");
  SubitToDoBtn.textContent = "Submit To Do"
  SubitToDoBtn.value= this.value;
  document.querySelector(".input").appendChild(SubitToDoBtn);
  SubitToDoBtn.addEventListener("click",IntakeToDo, false)
}
 export function hideForm()
{
    document.querySelector(".input").style.display = "none";
   
}