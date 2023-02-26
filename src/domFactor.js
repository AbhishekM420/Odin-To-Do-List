import { newProject } from "./newProject";


// to add the various divs and other stuff to the content


export function newCard(){
                                                    // making cards for individual projects
    console.log(newProject().projectArray.length);

const content = document.querySelector('.content');

for(let i = 0; i< newProject().projectArray.length;i++){
  const proCard = document.createElement('div');
  proCard.className = "ProCard";
    proCard.textContent = newProject().proTitle;
    content.appendChild(proCard);
}
}