
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
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
import Registro from './views/Registro';
import Recuperacion from './views/Recuperacion';
import ResetPassword from './componentes/ResetPass';
import Usuarios from './views/Usuarios';
import { AuthContextProvider } from './Auth/AuthProvider';
import { CSPMetaTag } from './CSP/CspMetaTag';
import RecuperacionPreguntaa from './views/RecuperacionPregunta';
import CitasDisponibles from './views/citasDisponibles';
import Mate from './componentes/mate';
import HorariosAtencion from './views/HorariosAtencion';
import ClasificacionHeridas from './views/ClasificacionHeridas';
import EvaluacionSistematizada from './views/EvaluacionSitematizada';
import RegistroHeridas from './views/RegistroHeridas';
import EditarHeridas from './views/EditarHeridas';
import Perfil from './views/Perfil';
import EditPerfil from './views/EditPerfil';
import HistorialPagoss from './views/HistorialPagos';

import { initGA, logPageView } from './analytics';
function App() {
  useEffect(() => {
    const TRACKING_ID = "G-T0W08YDD32"; // Reemplaza con tu ID de Google Analytics
    initGA(TRACKING_ID);
  }, []);

  // Registrar la vista de página en cada cambio de ruta
  const location = useLocation();
  useEffect(() => {
    logPageView();
  }, [location]);
  return (  
    <AuthContextProvider>
          <BrowserRouter>
            <CSPMetaTag/>
            <Routes>
              <Route path="/" Component={Home}></Route>
              <Route path="/Notas" Component={Nota}></Route>
              <Route path="/Ad/Horario" Component={HorariosAtencion}></Route>
              <Route path="/Especialistas" Component={Especialista}></Route>
              <Route path="/Ayuda" Component={Ayuda}></Route>
              <Route path="/Contacto" Component={Contacto}></Route>
              <Route path="/Citas-Disponibles" Component={CitasDisponibles}></Route>
              <Route path="/Login" Component={Loginn}></Route>
              <Route path="/mate" Component={Mate}></Route>
              <Route path="/Terminos" Component={Terminos}></Route>
              <Route path="/Privacidad" Component={Privacidad}></Route>
              <Route path="/Cookies" Component={Cookie}></Route>
              <Route path="/Ad" Component={Adminn}></Route>
              <Route path="/Ad/Citas" Component={Cita}></Route>
              <Route path="/Ad/Difusion" Component={Difusionn}></Route>
              <Route path="/Ad/Expediente" Component={Expedientess}></Route>
              <Route path="/Ad/Pacientes" Component={Pacientes}></Route>
              <Route path='/*' Component={error404}></Route>
              <Route path='/Registro' Component={Registro}></Route>
              <Route path='/Recuperacion' Component={Recuperacion}></Route>
              <Route path='/reset-password/:Token' Component={ResetPassword}></Route>
              <Route path='/RecuperacionPregunta' Component={RecuperacionPreguntaa}></Route>
              <Route path='/Ad/ListaUser' Component={Usuarios}></Route>
              <Route path='/Ad/Heridas/:IdPaciente' Component={ClasificacionHeridas}></Route>
              <Route path='/Ad/EditarHeridas/:IdClasificacionHeridas' Component={EditarHeridas}></Route>
              <Route path='/Ad/RegistroHeridas' Component={RegistroHeridas}></Route>
              <Route path='/Ad/Evaluacion' Component={EvaluacionSistematizada}></Route>
              <Route path='/Ad/Perfil' Component={Perfil}></Route>
              <Route path='/Ad/EditPerfil' Component={EditPerfil}></Route>
              <Route path='/Ad/HistorialPagos' Component={HistorialPagoss}></Route>
            </Routes>
          </BrowserRouter>
    </AuthContextProvider>

  );
}

export default App;
