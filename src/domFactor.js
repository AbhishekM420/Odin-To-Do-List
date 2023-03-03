import { DoThis } from ".";
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