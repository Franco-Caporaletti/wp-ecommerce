import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Home} from '../src/components/Home';
import Guest from '../src/pages/Guest.js';
import ProductComplete from '../src/pages/ProductComplete.js';
import NotFound from '../src/pages/NotFound.js'
import './App.css';
import FormIngresos from './pages/FormIngresos.js';
import AppBar from '../src/components/AppBar';
import Rights from '../src/components/Rights';

function App() {
  return (
    <React.StrictMode>
      <AppBar/>
      <Home/>
      <Guest/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Guest} />
          <Route path="/producto" component={ProductComplete} />
          <Route path='/formulario' component={FormIngresos} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      <Rights/>
    </React.StrictMode>
  );
}
export default App;
