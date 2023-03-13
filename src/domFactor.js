import { DoThis } from ".";
import { AddTodo } from "./newProject";
import { IntakeToDo } from "./ToDo";
// to add the various divs and other stuff to the content



export function newCard(){
                                                            
  // making cards for individual projects
    const content = document.querySelector('.content');
    const proCard = document.createElement('div');
    proCard.className = "ProCard";
    proCard.textContent = "Project Name : " +DoThis().ProjecTtitle;
    content.appendChild(proCard);


for(let i = 0; i< DoThis().arry.length;i++){
  const tit = document.createElement('div');
  tit.textContent = "Title"+" : " + DoThis().arry[i].title;
  const desc = document.createElement('div');
  desc.textContent = "Description"+" : " + DoThis().arry[i].description;
  const dudate = document.createElement('div');
  dudate.textContent = "Due Date"+" : " + DoThis().arry[i].duedate;
  const don = document.createElement('div');
  don.textContent = "Done"+" : " + DoThis().arry[i].done;

  proCard.appendChild(tit);
  proCard.appendChild(desc);
  proCard.appendChild(dudate);
  proCard.appendChild(don);
  


  }}
  export function displayProject( projectName){    // a dom manip function to display project titles and append create to do buttons

    const proDiv = document.querySelector(".ProjectLineup");
    const proTile = document.createElement('div');
    proTile.textContent = projectName
   // document.querySelector(".newButton").innerHTML= "";
    proDiv.appendChild(proTile);
    const ToDoBtn = document.createElement("button")
    ToDoBtn.textContent = "Create To Do"
    ToDoBtn.className = "CreateToDo"
    proDiv.appendChild(ToDoBtn)
    ToDoBtn.addEventListener("click", ShowToDoForm)
}
export function ShowToDoForm(){

  document.querySelector(".input").style.display = "";
  const SubitToDoBtn = document.createElement("button");
  SubitToDoBtn.textContent = "Submit To Do"
  document.querySelector(".input").appendChild(SubitToDoBtn);
  SubitToDoBtn.addEventListener("click",IntakeToDo)
}
 export function hideForm()
{
    document.querySelector(".input").style.display = "none";
   
}