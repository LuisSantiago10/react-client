import React from 'react';
import { Sidebar } from '../auth/Sidebar';
import { Barra } from '../layout/Barra';
import { FormTarea } from '../tareas/FormTarea';
import { ListadoTareas } from '../tareas/ListadoTareas';

export const Proyectos = () => {
    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Barra />
                <main>
                    <FormTarea />
                    <div className="contenedor-tareas">
                        <ListadoTareas />
                    </div>
                </main>
            </div>
        </div>
    )
}
