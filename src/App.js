import React from 'react';
import './App.css';
import Notas from './Notas.js';

function App() {
  return (
    <div className="App">
      <div className="titulo">
        ¿Qué es esta página?
      </div>
      <div className="subtitulo">
        Esta página es una mini-herramienta que he hecho porque
        no entendía como funcionaba el sistema de tachar notas para subir la media.
        Quiero ver que asignaturas son inútiles (porque se pueden tachar) y cuales son muy importantes para poder entrar en la universidad.
        <br /><br />
        Todo el código de esta página se basa en <a href="">este</a> documento y en <a href="">este otro</a>. Puede haber algún error así que si te aburres y te apetece puedes leértelos para comprobar los resultados.
      </div>
      <Notas />
    </div>
  );
}

export default App;
