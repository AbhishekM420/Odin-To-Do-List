export const  newProject = (projectTitle, toDo) =>{
    let projectArray = [];
    let proTitle = projectTitle
    projectArray.push(toDo);
    return{ projectArray, proTitle};
}
 
export class makeArray{
    constructor(){                          //creates a project array
        const newArray = new Array();
        return newArray;
    }
  
}

 export function AddTodo(arraay, Todoo) {

 arraay.push(Todoo);
 return arraay;
}                                          // accepts an array and a todo to be added to the array
