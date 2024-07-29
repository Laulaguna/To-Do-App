import Tarea from "./tarea.js"
import Lista from "./lista.js";

const listaPpal = new Lista();

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(event.target.accion.value);
    const nuevaTarea = new Tarea(event.target.accion.value);

    listaPpal.agregarTarea(nuevaTarea);
    listaPpal.pintarLista(
        document.getElementById('items')
    );


});

//  

const addInput = document.querySelector("input");
const addButton = document.querySelector(".btn-add");
const ulList = document.querySelector("ul");
const empty = document.querySelector(".empty");

let counter = 0;
const date = new Date();
let taskDate;
empty.style.display = "block";

function quitarTarea() {
    // GET DE TODAS LAS LI
    const allLiItems = document.querySelectorAll("li");
    if (allLiItems.length == 1) {
        empty.innerHTML = `<p>No tasks.</p>`;
        empty.style.display = "block";
        counter = 0;
    }
    else {
        counter--;
        empty.innerHTML = `<p>Pending tasks: ${counter}.</p>`;
    }
    //console.log(allLiItems);
}

function addToLista(event) {
    //ulList.innerHTML = `<li class="li-container"><p>${addInput.value}</p><button class="btn-delete">x</button></li>`;
    event.preventDefault();

    // CREA  LI CON UNA CLASE Y AÑADE VALOR DEL INPUT
    const myLi = document.createElement("li");
    //myLi.className = "li-container";
    taskDate = "Added date " + date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + "---" + date.getHours() + ":" + date.getMinutes();
    myLi.innerHTML = `<p>${addInput.value}<br><span>${taskDate}</span></p>`;
    //myLi.textContent = addInput.value;

    // CREA EL BOTON DE ELIMINAR CON UNA CLASE
    const btnDelete = document.createElement("button");
    btnDelete.className = "btn-delete";
    btnDelete.textContent = "x";

    // AÑADE EL BOTON AL LI
    myLi.append(btnDelete);

    //AÑADE EL LI A LA UL
    ulList.appendChild(myLi);

    // AUMENTA CONTADOR PARA NUMERO DE TAREAS Y AÑADE TEXTO A DIV CON CLASE EMPTY
    counter++;
    empty.innerHTML = `<p>Pending tasks: ${counter}.</p>`;
    addInput.value = "";
    addInput.placeholder = "Add task...";

    console.log(taskDate);


    // EVENTO DEL BOTON DE ELIMINAR QUE LLAMA PRIMERO A LA FUNCION QUITARTAREA   
    btnDelete.addEventListener("click", function () {
        quitarTarea()
        myLi.remove();

    });

    //  ulList.append(myLi.className("li-container"));
    //  ulList.append(addInput.value);


    //console.log(event);
    //ulList.innerHTML = `<li class="li-container"><p>${addInput.value}</p><button class="btn-delete">x</button></li>`;
}

addButton.addEventListener("click", addToLista);
