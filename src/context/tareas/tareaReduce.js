import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA
} from '../../types/index';

export default (statet,action) => {

    switch (action.type) {
        case TAREAS_PROYECTO:
            return {
                ...statet,
                tareasproyecto: statet.tareas.filter(tarea => tarea.proyectoId === action.payload)
            }
        case AGREGAR_TAREA:
            return {
                ...statet,
                tareas:[...statet.tareas,action.payload]
            }    
        default:
            return statet
    }
}