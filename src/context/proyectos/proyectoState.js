import React, { useReducer } from 'react';

import proyectoContext from './proyectoContex';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO,OBTENER_PROYECTOS,AGREGAR_PROYECTO, VAIDAR_FORMULARIO,PROYECTO_ACTUAL,ELIMINAR_PROYECTO } from '../../types/index';

const ProyectoState = props =>{

    const proyectos = [
        { Id:1,nombre:'tienda virtual'},
        { Id:2,nombre:'internet'},
        { Id:3,nombre:'Diseño'}
    ];
    
    const initialState = {
        proyectos : [],
        formulario: false,
        errorformulario:false,
        proyecto: null
    };

    const [statef,dispatch] = useReducer(proyectoReducer,initialState);

    const mostrarFormulario = ()=>{
        dispatch({
            type:FORMULARIO_PROYECTO
        })
    }
    const obtenerProyectos = () => {
        dispatch({
            type:OBTENER_PROYECTOS,
            payload:proyectos
        })
    }
    const agregarProyecto = proyecto =>{
        proyectos.Id = 354678;

        dispatch({
            type:AGREGAR_PROYECTO,
            payload:proyecto
        })
    }
    const mostrarError = ()=>{
        dispatch({
            type: VAIDAR_FORMULARIO
        })
    }

    const proyectoActual = proyectoId =>{
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }
    const eliminarProyecto = proyectoId =>{
        dispatch({
            type:ELIMINAR_PROYECTO,
            payload:proyectoId
        })
    }
    return(
        <proyectoContext.Provider
            value={{
                proyectos: statef.proyectos,
                formulario: statef.formulario,
                errorformulario: statef.errorformulario,
                proyecto: statef.proyecto,
                mostrarError,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;