import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContex';
import { Tarea } from './Tarea';
import TareaContext from '../../context/tareas/tareaContext';
import { CSSTransition,TransitionGroup } from 'react-transition-group';

export const ListadoTareas = () => {
    const proyectosContex = useContext(proyectoContext);
    const { proyecto,eliminarProyecto } = proyectosContex;

    const tareasContext = useContext(TareaContext);
    const { tareasproyecto } = tareasContext;
    if (!proyecto) return <h2>Selecciona un proyecto</h2>

    const [proyectoActual] = proyecto;

    const DeleteProyect = ()=>{
        eliminarProyecto(proyectoActual.Id);
    }

    return (
        <>
            <h2>{ proyectoActual.nombre }</h2>   

            <ul className="listado-tareas">
                {
                    tareasproyecto.length === 0
                    ?
                    (<li className="tarea"> <p>No hay tareas</p></li>)
                    : 
                    <TransitionGroup>
                        { tareasproyecto.map( tarea =>(
                           <CSSTransition
                                key={tarea.Id}
                                timeout={200}
                                classNames="tarea"
                           >
                                <Tarea
                                    tarea = { tarea }
                                />
                           </CSSTransition>
                        ))}
                    </TransitionGroup>
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={ DeleteProyect }
            >
                Eliminar Proyecto &times;
            </button>
        </>
    )
}
