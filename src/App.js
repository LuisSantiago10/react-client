import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { Login } from './components/auth/Login';
import { NuevaCuenta } from './components/auth/NuevaCuenta';
import { Proyectos } from './components/proyectos/Proyectos';
import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareaState';


function App() {
  return (
    <div>
      <ProyectoState>
        <TareaState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
              <Route exact path="/proyecto" component={Proyectos}/>
            </Switch>
          </Router>
        </TareaState>
      </ProyectoState>
    </div>
  );
}

export default App;
