import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContex';
import TareaContext from '../../context/tareas/tareaContext';

export const Proyecto = ({proyecto}) => {

    const proyectosContex = useContext(proyectoContext);
    const { proyectoActual } = proyectosContex;

    const tareasContext = useContext(TareaContext);
    const { obtenerTareas } = tareasContext;

    const { nombre,Id } = proyecto;

    const seleccionarProyecto = id =>{
        proyectoActual(id);
        obtenerTareas(id);
    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick= { ()=> seleccionarProyecto(Id) }
            >
                { nombre }
            </button>
        </li>
    )
}
