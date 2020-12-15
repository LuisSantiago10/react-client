import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA
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
                tareas:[action.payload,...statet.tareas],
                errortarea:false
            }
        case VALIDAR_TAREA:
            return {
                ...statet,
                errortarea:true
            }
        case ELIMINAR_TAREA:
            return {
                ...statet,
                tareas:statet.tareas.filter(tarea => tarea.Id !== action.payload)
            }
        case ESTADO_TAREA:
            return {
                ...statet,
                tareas: statet.tareasproyecto.map(tarea => tarea.Id === action.payload.Id ? action.payload : tarea)
            }
        default:
            return statet
    }
}