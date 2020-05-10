import React from 'react';
import './App.css';
import Table from './Pages/Table/index'
import { Router } from "@reach/router"

function App() {
  return (
    <Router>
      <Table path="/" titulo="Prueba de título"></Table>
    </Router>
  );
}

export default App;
