export default class Tarea {
    constructor(accion) {
        this.accion = accion;
    }

    pintarTarea(domElement) {
        const li = document.createElement('li');
        li.textContent = `Tarea "${this.accion}"`;
        domElement.appendChild(li);
    }


}
