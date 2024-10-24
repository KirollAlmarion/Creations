import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Editeur from './pages/Editeur'

function App() {
  return (
    <Router>
      
      <Switch>
        {/* Version 1 */}
        <Route path="/editeur" component={Editeur} />
        {/* Version 2 */}
        {/* <Route path="/editeur">
          <Editeur />
        </Route> */}
        {/* Ici, le chemin de l'url doit correspondre EXACTEMENT à "/" car la propriété "exact" est présente */}
        <Route path="/" exact component={Accueil} />
      </Switch>
    </Router>
  );
}

export default App;
