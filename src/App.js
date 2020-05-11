import React from 'react';
import './App.css';
import { Router } from "@reach/router"
import Table from './Pages/Table/index'
import Game from './Pages/Game/index'

function App() {
  return (
    <Router>
      <Table path="/" titulo="Prueba de título"></Table>
      <Game path="/game"></Game>
    </Router>
  );
}

export default App;
