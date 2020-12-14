import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReduce from './tareaReduce';
import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA
} from '../../types/index';

const TareaState = props =>{
    const initialState = {
        tareas: [        
            {nombre: 'Elegir plataforma',estado:true,proyectoId:1},
            {nombre: 'Elegir coloeres',estado:false,proyectoId:2},
            {nombre: 'Elegir pago',estado:false,proyectoId:3},
            {nombre: 'Elegir hostinf',estado:true,proyectoId:4},
            {nombre: 'Elegir plataforma',estado:true,proyectoId:1},
            {nombre: 'Elegir coloeres',estado:false,proyectoId:2},
            {nombre: 'Elegir pago',estado:false,proyectoId:3},
            {nombre: 'Elegir plataforma',estado:true,proyectoId:4},
            {nombre: 'Elegir coloeres',estado:false,proyectoId:1},
            {nombre: 'Elegir pago',estado:false,proyectoId:2},
            {nombre: 'Elegir plataforma',estado:true,proyectoId:3},
            {nombre: 'Elegir coloeres',estado:false,proyectoId:4},
            {nombre: 'Elegir pago',estado:false,proyectoId:3},
        ],
        tareasproyecto : null
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
    return (
        <TareaContext.Provider
            value={{
                tareas: statet.tareas,
                tareasproyecto: statet.tareasproyecto,
                obtenerTareas,
                agregarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}
export default TareaState;