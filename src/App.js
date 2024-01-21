
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './views/Inicio';
import Nota from './views/Notas';
import Especialista from './views/Especialistas';
import Ayuda from './views/Ayuda';
import Contacto from './views/Contacto';
import Loginn from './views/Login';
import Adminn from './views/Admin';
import Cita from './views/Citas';
import Difusionn from './views/Difusion';
import Expedientess from './views/Expedientes';
import Pacientes from './views/Pacientes';
import Terminos from './views/Terminos';
import Privacidad from './views/Politicas';
import Cookie from './views/Cookies';
import error404 from './componentes/Error404';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/Notas" Component={Nota}></Route>
        <Route path="/Especialistas" Component={Especialista}></Route>
        <Route path="/Ayuda" Component={Ayuda}></Route>
        <Route path="/Contacto" Component={Contacto}></Route>
        <Route path="/Login" Component={Loginn}></Route>
        <Route path="/Terminos" Component={Terminos}></Route>
        <Route path="/Privacidad" Component={Privacidad}></Route>
        <Route path="/Cookies" Component={Cookie}></Route>
        <Route path="/Ad" Component={Adminn}></Route>
        <Route path="/Ad/Citas" Component={Cita}></Route>
        <Route path="/Ad/Difusion" Component={Difusionn}></Route>
        <Route path="/Ad/Expediente" Component={Expedientess}></Route>
        <Route path="/Ad/Pacientes" Component={Pacientes}></Route>
        <Route path='/*' Component={error404}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
