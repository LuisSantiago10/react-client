import React, { useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContex';
import TareaContext from '../../context/tareas/tareaContext';

export const FormTarea = () => {

    const proyectosContex = useContext(proyectoContext);
    const { proyecto } = proyectosContex;

    const [tarea, setTarea] = useState({
        nombre:''
    })

    const tareasContext = useContext(TareaContext);
    const { agregarTarea } = tareasContext;

    const { nombre } = tarea;

    if (!proyecto) return null;

    const [proyectoActual] = proyecto;

    const handleChange = e =>{
        setTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();

        tarea.proyectoId = proyectoActual.Id;
        tarea.estado = false;
        agregarTarea(tarea);
    }
    return (
        <div className="formulario">
            <form
                onSubmit={handleSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar tarea"
                    />
                </div>
            </form>
        </div>
    )
}
