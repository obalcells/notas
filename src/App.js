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
        Me sigue pareciendo muy raro este sistema pero al menos ahora sé en qué asignaturas
        tengo que esforzarme mucho este último semestre.
        <br /><br />
        Todo el código de esta página se basa en <a href="https://github.com/OscarBalcells/notas/blob/master/public/Normativa_para_la_obtención_del_Allgemeine_Hochschulreife.pdf">este</a> documento y en <a href="https://github.com/OscarBalcells/notas/blob/master/public/Ordnung_zur_Erlangung_der_Allgemeinen_Hochschulreife an_Deutschen_Schulen_im_Ausland.pdf">este otro</a> (lo mismo en alemán pero con tablas conversión) y en <a href="https://www.dsbilbao.org/oferta-educativa/equivalencia-sistema-educativo-aleman-y-espanol/">esta</a> web. Puede haber algún error así que si te aburres y te apetece puedes leértelos para comprobar los resultados.
      </div>
      <Notas />
      <div style="height:20px;"></div>
    </div>
  );
}

export default App;
