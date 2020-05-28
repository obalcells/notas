import React from 'react';
import './App.css';
import { message, AutoComplete, Tag } from 'antd';
import { CloseCircleOutlined, PlusOutlined, PlayCircleOutlined, SyncOutlined, CheckCircleOutlined } from '@ant-design/icons';
import Asignaturas from './Asignaturas.js';

const colores = ["magenta", "red", "volcano", "orange", "blue", "geekblue", "green", "cyan", "blue", "geekblue", "purple", "green", "volcano", "blue", "magenta", "cyan"]

const CompleteAsignatura = (props) => (
    <AutoComplete
        style={{ width: "100px" }}
        className="asignatura"
        onSelect={props.onSelect}
        options={props.options}
        placeholder="Asignatura"
        filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
    />
);

export default class Tachar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tachadas: ["Sport"],
            showInput: false,
            isReady: true, //three phases
            isLoading: false,
            isAfterLoading: false,
            message: ""
        };
    }

    cntTachada(nombre) {
        let cnt = 0;
        this.state.tachadas.forEach((asignatura) => {
            if(asignatura === nombre) cnt++;
        });
        return cnt;
    }

    addTachada(nombre) {
        if(this.cntTachada(nombre) >= 4) {
            message.error("No puedes tachar más de 4 notas para una misma asignatura");
            return;
        }
        let tachadas = this.state.tachadas;
        tachadas.push(nombre);
        this.props.onChange(tachadas);
        this.setState({ tachadas: tachadas, showInput: false });
    }

    deleteTachada(index) {
        if(index === 0) {
            message.error("Se tiene que tachar como mínimo una nota de deporte");
            return;
        }
        let tachadas = [];
        for(let i = 0; i < this.state.tachadas.length; i++) if(i !== index) {
            tachadas.push(this.state.tachadas[i]);
        }
        this.props.onChange(tachadas);
        this.setState({ tachadas: tachadas });
    }

    renderMessage() {
        if(this.state.isLoading || this.state.message === "") {
            return (<div></div>);
        }
    }

    afterLoading() {
        this.setState({ isAfterLoading: false, isReady: true });
    }

    finishLoading() {
        this.setState({ isLoading: false, isAfterLoading: true });
        setTimeout(this.afterLoading.bind(this), 3000);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.asignaturasSeleccionadas.length > this.props.asignaturasSeleccionadas.length) {
            let tachadas = [];
            for(let i = 0; i < this.state.tachadas.length; i++) {
                if(this.props.asignaturasSeleccionadas.includes(this.state.tachadas[i])) {
                    tachadas.push(this.state.tachadas[i]);
                }
            }
            this.setState({ tachadas: tachadas });
        }
    }

    comprobar() {
        if(!this.state.isReady) return;
        let message = "";
        let types = {
            "Deutsch": 0, "Mathe": 0, "Language": 0,
            "Science": 0, "SScience": 0, "Geschichte": 0,
            "Kunst": 0, "Sport": 0
        };
        this.props.asignaturasSeleccionadas.forEach((nombre) => {
            if(Asignaturas[nombre].type !== "Language") types[Asignaturas[nombre].type] += 4;
            else if(!this.state.tachadas.includes(nombre)) types["Language"] += 4;
            if(nombre === "Geschichte") types["Geschichte"] += 4;
        });
        this.state.tachadas.forEach((nombre) => {
            if(Asignaturas[nombre].type !== "Language") types[Asignaturas[nombre].type] -= 1;
            if(nombre === "Geschichte") types["Geschichte"] -= 1;
        });

        //1. 4 de alemán
        if(types["Deutsch"] < 4) message += "No puedes tachar ninguna nota de alemán\n";
        //2. 4 de mates
        if(types["Mathe"] < 4) message += "No puedes tachar ninguna nota de mates\n";
        //3. 4 de algún idioma (no alemán)
        if(types["Language"] < 4) message += "Necesitas las 4 notas semestrales de al menos un idioma (que no sea alemán)\n";
        //4. minimo 4 de ciencias
        if(types["Science"] < 4) message += "Necesitas como mínimo 4 notas de ciencias (PHY, BIO o CHM)\n";
        //5. minimo 4 de ciencias sociales
        if(types["Science"] < 4) message += "Necesitas como mínimo 4 notas de ciencias sociales (PHI, ERK o GES)\n";
        //6. minimo 2 de geschichte
        if(types["Geschichte"] < 2) message += "Necesitas como mínimo 2 notas de Geschichte\n";
        //7. minimo 3 de kunst o musik
        if(types["Kunst"] < 3) message += "Necesitas como mínimo 3 notas de Kunst o Musik\n";
        //8. maximo 3 de deporte
        //implicito
        //9. minimo 2 de todos los idiomas QUE TENGAS NUEVOS DE LA FASE INTRODUCTORIA
        /*
        De momento no aplica porque no tenemos fase introductoria (tenemos la 9 y la 10) bueno esto es muy raro nosé
        let done = false;
        this.props.asignaturasSeleccionadas.forEach((nombre) => {
            if(!done && Asignaturas[nombre].type === "Language" && this.cntTachada(nombre) > 2 && (nombre === "Català" || nombre === ) {
                console.log(nombre);
                message += "Para cada asignatura de idiomas has de contabilizar (no tachar) por lo menos 2 notas\n";
                done = true;
            }
        });
        */
        //10. minimo 14 entre ciencias e idiomas
        let oneLeft = 0;
        types["Language"] = 0;
        this.props.asignaturasSeleccionadas.forEach((nombre) => {
            if(Asignaturas[nombre].type === "Language" || Asignaturas[nombre].type === "Science") {
                if(this.cntTachada(nombre) === 3) oneLeft += 1;
            }
            if(Asignaturas[nombre].type === "Language") {
                types["Language"] += 4;
                types["Language"] -= this.cntTachada(nombre);
            }
        });
        if(types["Science"] + types["Language"] - oneLeft < 14) {
            message += "Entre ciencias naturales e idiomas (exceptuando alemán) has de contabilizar 14 notas semestrales. Solo contabilizan las notas de las asignaturas que no tengan 3 o más notas tachadas, de momento tienes " + (types["Science"] + types["Language"] - oneLeft).toString() + ".\n";
        }

        if(message === "") message = "Combinación válida";
        this.setState({ isReady: false, isLoading: true, message: message });
        setTimeout(this.finishLoading.bind(this), 2000, this);
    }

    renderComprobacion() {
        if(this.state.message === "" || this.state.isLoading) {
            return (<div></div>);
        }
        if(this.state.message === "Combinación válida") {
            return(
                <div className="resultadoComprobacion"
                    style={{
                        border: "1px solid green",
                        backgroundColor: "rgba(115, 240, 115, 0.1)"
                    }}
                >
                    <CheckCircleOutlined />
                    &nbsp;
                    La combinación es válida
                </div>
            );
        }
        const lines = this.state.message.split("\n");
        return (
            <div className="resultadoComprobacion"
                style={{
                    border: "1px solid red",
                    backgroundColor: "rgba(240, 110, 110, 0.1)"
                }}
            >
                <CloseCircleOutlined />
                &nbsp;
                Combinación inválida
                <br />
                {lines.map((linea, index) => {
                    if(linea.length <= 2) return (<span key={index}></span>);
                    else return (
                        <span key={index}><br />{(index + 1).toString() + "."} &nbsp; {linea}</span>
                    );
                })}
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="subtitulo" style={{ marginBottom: "20px" }}>
                    Para cada nota semestral que quieras sacar añade la asignatura. Solo puedes tachar notas de asignaturas que no tengas como examen del Abitur. Es obligatorio tachar como mínimo una nota de deporte, por eso está ahí puesta.
                    <br /><br />
                    <span style={{ fontSize: "1.1rem", lineHeight: "0.05 rem" }}>
                    Solo cuentan <b style={{ color: "#4633FF" }}>36</b> notas.
                    De momento tienes <b style={{ color: "#3361FF" }}>{this.props.asignaturasSeleccionadas.length * 4 - this.state.tachadas.length}</b> notas,
                    por lo que te quedan <b style={{ color: (this.props.asignaturasSeleccionadas.length * 4 - this.state.tachadas.length - 36 > 0 ? "green" : "#F43939") }}>
                        {(this.props.asignaturasSeleccionadas.length * 4 - this.state.tachadas.length - 36 > 0
                        ? this.props.asignaturasSeleccionadas.length * 4 - this.state.tachadas.length - 36 : 0)}
                    </b> tachadas disponibles.
                    </span>
                </div>
                {this.state.tachadas.map((nombre, index) => {
                    return (
                        <Tag
                            key={nombre + index.toString()}
                            color={colores[index]}
                            className="asignatura"
                            onClick={() => this.deleteTachada(index)}
                        >
                            {nombre}
                        </Tag>
                    );
                })}
                {!this.state.showInput && (this.props.asignaturasSeleccionadas.length * 4 - this.state.tachadas.length - 36 > 0) &&
                    <Tag
                        className="nuevaAsignatura"
                        onClick={() => this.setState({ showInput: true })}
                    >
                        <PlusOutlined /> &nbsp; Añadir
                    </Tag>
                }
                {this.state.showInput &&
                    <CompleteAsignatura
                        onSelect={(option) => this.addTachada(option)}
                        options={this.props.asignaturasSeleccionadas.map((asignatura) => {
                            return({ "value": asignatura });
                        })}
                    />
                }
                {this.state.isReady &&
                    <Tag color="processing"
                        className="botonComprobacion"
                        onClick={() => this.comprobar()}
                    >
                       <PlayCircleOutlined /> &nbsp;
                       Comprobar
                    </Tag>
                }
                {this.state.isLoading &&
                    <Tag color="processing"
                        className="botonComprobacion"
                        onClick={() => this.comprobar()}
                    >
                        <SyncOutlined spin />
                        &nbsp;
                        Procesando
                    </Tag>
                }
                {this.state.isAfterLoading && this.state.message === "Combinación válida" &&
                    <Tag color="success"
                        className="botonComprobacion"
                        style={{ width: "200px" }}
                    >
                        <CheckCircleOutlined />
                        &nbsp;
                        Combinación correcta
                    </Tag>
                }
                {this.state.isAfterLoading && this.state.message !== "Combinación válida" &&
                    <Tag color="error"
                        className="botonComprobacion"
                        style={{ width: "200px" }}
                    >
                        <CloseCircleOutlined />
                        &nbsp;
                        Combinación incorrecta
                    </Tag>
                }
                {this.renderComprobacion()}
            </div>
        );
    }
}