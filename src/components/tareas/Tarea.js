import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContex';
import TareaContext from '../../context/tareas/tareaContext';

export const Tarea = ({tarea}) => {
    const { nombre,estado,Id } = tarea;

    const proyectosContex = useContext(proyectoContext);
    const { proyecto } = proyectosContex;
    const [proyectoActual] = proyecto;


    const tareasContext = useContext(TareaContext);
    const { eliminarTarea,obtenerTareas,cambiarEstadoTarea } = tareasContext;


    const tareaEliminar = idtarea =>{
        eliminarTarea(idtarea);
        obtenerTareas(proyectoActual.Id)
    }
    const cambiarEstado = tarea =>{
        if (tarea.estado) {
            tarea.estado = false;
        }else{
            tarea.estado = true;
        }
        cambiarEstadoTarea(tarea)
    }
    return (
        <li className="tarea sombra">
            <p>{ nombre }</p>
            <div className="estado">
                {
                    estado 
                    ?
                    (
                        <button
                            type="button"
                            className="completo"
                            onClick={() => cambiarEstado(tarea)}
                        >
                            Completo
                        </button>
                    )
                    :
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => cambiarEstado(tarea)}
                        >
                            Incompleto
                        </button>
                    )
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={ () => tareaEliminar(Id) }
                >
                    Eliminar
                </button>
            </div>
        </li>
    )
}
