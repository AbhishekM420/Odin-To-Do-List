import { displayProject } from "./domFactor";
import { rtnProContArr } from "./newProject";

export function DeleteProject(){
    rtnProContArr().ProjectContainerArray.splice(this.value,1);
    document.querySelector(".ProjectLineup").innerHTML = "" ;
    displayProject();
}

export function DeleteTodo(){
    rtnProContArr().ProjectContainerArray[this.id].ary.splice(this.value,1); 
    document.querySelector(".ProjectLineup").innerHTML = "" ;
    displayProject();  
}