export default class Lista {

    constructor() {
        this.tareas = [];
    }

    agregarTarea(tarea) {
        this.tareas.push(tarea);
    }

  

    eliminarTarea(accion) {
        this.tareas = this.tareas.filter(tarea => tarea.accion !== accion);
    }

 
    pintarLista(domElement) {
        domElement.innerHTML = '';
        for (let tarea of this.tareas) {
            tarea.pintarTarea(domElement);
        }
    }

}