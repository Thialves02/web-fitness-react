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

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <CtxApp>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </CtxApp>
    </>
  );
}

export default App;
