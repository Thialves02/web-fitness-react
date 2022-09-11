import './App.css';
import GlobalStyle from './assets/styles/global'
import CtxApp from "../src/context/CtxApp";
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Cadastro from './pages/Cadastro/Cadastro';
import InformacoesUsuario from './pages/InformacoesUsuario/InformacoesUsuario';

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <CtxApp>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cadastro" element={<Cadastro />}></Route>
            <Route path="/infoUsuario" element={<InformacoesUsuario />}></Route>
          </Routes>
        </Router>
      </CtxApp>
    </>
  );
}

export default App;
