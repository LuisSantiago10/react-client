import { 
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VAIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types/index';
export default (statef,action) => {
    switch (action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...statef,
                formulario:true
            }
        case OBTENER_PROYECTOS:
            return {
                ...statef,
                proyectos:action.payload
            }
        case AGREGAR_PROYECTO:
            return {
                ...statef,
                proyectos:[...statef.proyectos,action.payload],
                formulario:false,
                errorformulario:false
            }
        case VAIDAR_FORMULARIO:
            return {
                ...statef,
                errorformulario:true
            }
        case PROYECTO_ACTUAL:
            return {
                ...statef,
                proyecto: statef.proyectos.filter(proyecto => proyecto.Id === action.payload)
            }
        case ELIMINAR_PROYECTO:
            return {
                ...statef,
                proyectos: statef.proyectos.filter(proyecto => proyecto.Id !== action.payload),
                proyecto:null
            }
        default:
            return statef;
    }
}