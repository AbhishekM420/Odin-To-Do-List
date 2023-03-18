import { ToDo } from "./ToDo";
import { AddTodo } from "./newProject";
import { hideForm } from "./domFactor";
import { AddNewProject } from "./domFactor";
import './style.css';

const nwPro = document.querySelector(".Project");
nwPro.addEventListener("click",AddNewProject);  //gets things started when the new project button is clicked

hideForm();  // keeps the submit todo form hidden till the create to do button is clicked





