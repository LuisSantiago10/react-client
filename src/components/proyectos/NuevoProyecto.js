import React, { useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContex';

export const NuevoProyecto = () => {

    const proyectosContex = useContext(proyectoContext);
    const { formulario,mostrarFormulario,agregarProyecto,mostrarError,errorformulario } = proyectosContex;

    const [proyecto, setProyecto] = useState({
        nombre:''
    });

    const { nombre } = proyecto;

    const onChangeProyecto = e =>{
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitProyecto = e =>{
        e.preventDefault();
        
        if (nombre === '') {
            mostrarError();
            return;
        }

        agregarProyecto(proyecto);
        
        setProyecto({
            nombre:''
        })
    }
    return (
        <>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={ () => mostrarFormulario() }
            >
                Nuevo proyecto
            </button>
            {
                formulario
                ?
                (
                    <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitProyecto}
                >
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Proyecto"
                        name="nombre"
                        value={nombre}
                        onChange={onChangeProyecto}
                    />
                    <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar Proyecto"
                    />
                </form>
                )
                :
                null
            }
            {
                errorformulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null
            }
        </>
    )
}
