import React from 'react';
import './App.css';
import Media from './Media.js';
import Seleccionar from './Seleccionar.js';
import Tachar from './Tachar.js';

export default class Notas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seleccionadas: [
        "Deutsch", "Español", "English", "Mathe", "Geschichte", "Filosofía", "Sport"
      ],
      tachadas: [
        "Sport"
      ],
    }
  }

  changeSeleccionadas(nuevas) {
    this.setState({ seleccionadas: nuevas });
  }

  changeTachadas(nuevas) {
    this.setState({ tachadas: nuevas });
  }

  render() {
    return (
      <div>
        <div className="titulo">
          Selecciona tus asignaturas:
        </div>
        <Seleccionar
          onChange={(nuevas) => this.changeSeleccionadas(nuevas)}
        />
        <div className="titulo">
          ¿Qué combinación de asignaturas puedo tachar?
        </div>
        <Tachar
          asignaturasSeleccionadas={this.state.seleccionadas}
          onChange={(nuevasTachadas) => this.changeTachadas(nuevasTachadas)}
        />
        <div className="titulo">
          ¿Qué media me queda tachando estas notas?
        </div>
        <Media
          asignaturasSeleccionadas={this.state.seleccionadas}
          tachadas={this.state.tachadas}
        />
      </div>
    );
  }
}