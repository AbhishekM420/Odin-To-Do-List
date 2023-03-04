
 
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
    const proDiv = document.querySelector(".ProjectLineup");
    const proTile = document.createElement('div');
    proTile.textContent = proName.value;
    document.querySelector(".newButton").innerHTML= "";
    proDiv.appendChild(proTile);


}