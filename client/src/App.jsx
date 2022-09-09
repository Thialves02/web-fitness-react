import './App.css';
import GlobalStyle from './styles/global'
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
          </Routes>
        </Router>
      </CtxApp>
    </>
  );
}

export default App;
