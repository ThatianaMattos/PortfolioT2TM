import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Inicio from './Componentes/Inicio';
import Sobre from './Componentes/Sobre';
import Projetos from './Componentes/Projetos';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/projetos">Projetos</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Inicio} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/projetos" component={Projetos} />
    </Router>
  );
}

export default App;
