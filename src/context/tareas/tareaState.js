import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReduce from './tareaReduce';
import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA
} from '../../types/index';

const TareaState = props =>{
    const initialState = {
        tareas: [        
            { Id: 1, nombre: 'Elegir plataforma',estado:true,proyectoId:1},
            { Id: 2, nombre: 'Elegir coloeres',estado:false,proyectoId:2},
            { Id: 3, nombre: 'Elegir pago',estado:false,proyectoId:3},
            { Id: 4, nombre: 'Elegir hostinf',estado:true,proyectoId:4},
            { Id: 5, nombre: 'Elegir plataforma',estado:true,proyectoId:1},
            { Id: 6, nombre: 'Elegir coloeres',estado:false,proyectoId:2},
            { Id: 7, nombre: 'Elegir pago',estado:false,proyectoId:3},
            { Id: 8, nombre: 'Elegir plataforma',estado:true,proyectoId:4},
            { Id: 9, nombre: 'Elegir coloeres',estado:false,proyectoId:1},
            { Id: 10, nombre: 'Elegir pago',estado:false,proyectoId:2},
            { Id: 11, nombre: 'Elegir plataforma',estado:true,proyectoId:3},
            { Id: 12, nombre: 'Elegir coloeres',estado:false,proyectoId:4},
            { Id: 13, nombre: 'Elegir pago',estado:false,proyectoId:3},
        ],
        tareasproyecto : null,
        errortarea:false
    }

    const [statet,dispatch] = useReducer(TareaReduce,initialState);

    const obtenerTareas = proyectoId => {
        dispatch({
            type:TAREAS_PROYECTO,
            payload:proyectoId,
            tareasproyecto: statet.tareasproyecto
        })
    }

    const agregarTarea = tarea =>{
        dispatch({
            type:AGREGAR_TAREA,
            payload:tarea
        })
    }

    const validarTarea = () =>{
        dispatch({
            type:VALIDAR_TAREA
        })
    }

    const eliminarTarea = IdTarea =>{
        dispatch({
            type:ELIMINAR_TAREA,
            payload:IdTarea
        })
    }

    const cambiarEstadoTarea = tarea =>{
        dispatch({
            type:ESTADO_TAREA,
            payload:tarea
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: statet.tareas,
                tareasproyecto: statet.tareasproyecto,
                errortarea:statet.errortarea,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}
export default TareaState;