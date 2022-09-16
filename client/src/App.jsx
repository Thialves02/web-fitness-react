import './App.css';
import GlobalStyle from './assets/styles/global'
import CtxApp from "../src/context/CtxApp";
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Cadastro from './pages/Cadastro/Cadastro';
import InformacoesUsuario from './pages/InformacoesUsuario/InformacoesUsuario';
import Dieta from './pages/Dieta/Dieta';
import Login from './pages/Login/Login';
import RotaPrivada from './routes/RotaPrivada';
import RotaPrivadaLogado from './routes/RotaPrivadaLogado';

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <CtxApp>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route element={<RotaPrivada />}>
              <Route path="/infoUsuario" element={<InformacoesUsuario />}></Route>
              <Route path="/dieta" element={<Dieta />} />
            </Route>
            <Route element={<RotaPrivadaLogado />}>
              <Route path="/cadastro" element={<Cadastro />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Route>
          </Routes>
        </Router>
      </CtxApp>
    </>
  );
}

export default App;
