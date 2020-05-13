import React from 'react';
import './App.css';
import { message, Tag } from 'antd';
import Asignaturas from './Asignaturas.js';

/*
Deutsch, Español, English, Català, Francés
Mathe, Physik, Biologie, Chemie
Geschichte, Erdkunde, Filosofia,
Sport, Kunst, Musik
*/
const colores = ["magenta", "red", "volcano", "orange", "blue", "geekblue", "green", "cyan", "blue", "geekblue", "purple", "green", "volcano", "blue", "magenta", "cyan"];

export default class Seleccionar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            asignaturas: [
                "Deutsch", "Español", "English", "Català", "Francés",
                "Mathe", "Physik", "Biologie", "Chemie",
                "Geschichte", "Erdkunde", "Filosofía",
                "Sport",
                "Kunst", "Musik"
            ],
            asignaturasSeleccionadas: [
                "Deutsch", "Español", "English", "Mathe", "Geschichte", "Filosofía", "Sport"
            ],
        };
    }

    addAsignatura = (nombre) => {
        let asignaturasSeleccionadas = this.state.asignaturasSeleccionadas;
        asignaturasSeleccionadas.push(nombre);

        this.props.onChange(asignaturasSeleccionadas);
        this.setState({ asignaturasSeleccionadas: asignaturasSeleccionadas });
    }

    deleteAsignatura = (nombre) => {
        if(Asignaturas[nombre].required === true) {
            message.error("Esta asignatura es obligatoria");
            return;
        }
        let asignaturasSeleccionadas = [];
        for(let i = 0; i < this.state.asignaturasSeleccionadas.length; i++) {
            if(this.state.asignaturasSeleccionadas[i] !== nombre) {
                    asignaturasSeleccionadas.push(this.state.asignaturasSeleccionadas[i]);
            }
        }
        this.props.onChange(asignaturasSeleccionadas);
        this.setState({ asignaturasSeleccionadas: asignaturasSeleccionadas });
    }

    render() {
        return (<div className="divAsignaturas">
            {this.state.asignaturas.map((nombre, index) => {
                if(this.state.asignaturasSeleccionadas.includes(nombre)) {
                    return (
                        <Tag
                            key={nombre} className="asignatura"
                            color={colores[index]}
                            onClick={() => this.deleteAsignatura(nombre)}
                        >
                            {nombre}
                        </Tag>
                    );
                } else {
                    return (
                        <Tag
                            key={nombre} className="asignatura"
                            onClick={() => this.addAsignatura(nombre)}
                        >
                            {nombre}
                        </Tag>
                    );
                }
            })}
        </div>);
    }
}