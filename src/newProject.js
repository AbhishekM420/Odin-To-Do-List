
 
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

