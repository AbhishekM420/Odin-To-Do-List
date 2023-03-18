import { displayProject } from "./domFactor";
import { rtnProContArr } from "./newProject";

export function DeleteProject(){           //function to delete project
    rtnProContArr().ProjectContainerArray.splice(this.value,1);
    document.querySelector(".ProjectLineup").innerHTML = "" ;
    displayProject();
}

export function DeleteTodo(){            //function to delete Todo
    rtnProContArr().ProjectContainerArray[this.id].ary.splice(this.value,1); 
    document.querySelector(".ProjectLineup").innerHTML = "" ;
    displayProject();  
}