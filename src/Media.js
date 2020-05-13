import React from 'react';
import './App.css';
import { Tag, Collapse, Slider, message } from 'antd';
import { PlayCircleOutlined, SyncOutlined } from '@ant-design/icons'
const { Panel } = Collapse;

export default class Media extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notas: {
                h1: {}, h2: {},
                h3: {}, h4: {},
            },
            registradas: [],
            resultado: {
                puntos: 0,
                alemana: 0,
                española: 0,
                exists: false,
                isLoading: false
            },
        }
        this.rangoAlemana = {
            900: 1.0, 822: 1.1, 804: 1.2, 786: 1.3, 768: 1.4, 750: 1.5, 732: 1.6, 714: 1.7, 696: 1.8, 678: 1.9,
            660: 2.0, 642: 2.1, 624: 2.2, 606: 2.3, 588: 2.4, 570: 2.5, 552: 2.6, 534: 2.7, 516: 2.8, 498: 2.9,
            480: 3.0, 462: 3.1, 444: 3.2, 426: 3.3, 408: 3.4, 390: 3.5, 372: 3.6, 354: 3.7, 336: 3.8, 318: 3.9,
            300: 4.0
        };
        this.rangoEspañola = {
            1.0:  10.00, 1.1:  9.83, 1.2: 9.67, 1.3: 9.50, 1.4: 9.33, 1.5: 9.17, 1.6: 9.00, 1.7: 8.83, 1.8: 8.67, 1.9: 8.50,
            2.0: 8.33, 2.1: 8.17, 2.2: 8.00, 2.3: 7.83, 2.4: 7.67, 2.5: 7.50, 2.6: 7.33, 2.7: 7.17, 2.8: 7.00, 2.9: 6.83,
            3.0: 6.67, 3.1: 6.50, 3.2: 6.33, 3.3: 6.17, 3.4: 6.00, 3.5: 5.83, 3.6: 5.67, 3.7: 5.5, 3.8: 5.33, 3.9: 5.17,
            4.0: 5.00
        };
    }

    cntTachada(nombre) {
        let cnt = 0;
        this.props.tachadas.forEach((asignatura) => {
            if(asignatura === nombre) cnt++;
        });
        return cnt;
    }

	componentDidMount() {
		let notas = this.state.notas;
		let registradas = [];
		this.props.asignaturasSeleccionadas.forEach(asignatura => {
			notas.h1[asignatura] = 5;
			notas.h2[asignatura] = 5;
			notas.h3[asignatura] = 5;
			notas.h4[asignatura] = 5;
			registradas.push(asignatura);
		});
		this.setState({ notas: notas, registradas: registradas });
    }

    componentDidUpdate() {
        let registradas = this.state.registradas;
        let notas = this.state.notas;
        this.props.asignaturasSeleccionadas.forEach(asignatura => {
            if(!this.state.registradas.includes(asignatura)) {
                registradas.push(asignatura);
                notas.h1[asignatura] = 5;
                notas.h2[asignatura] = 5;
                notas.h3[asignatura] = 5;
                notas.h4[asignatura] = 5;
            }
        });
        if(registradas.length > this.state.registradas) this.setState({ registradas: registradas, notas: notas });
    }

	handleChange(h, asignatura, value) {
        let notas = this.state.notas;
        notas[h][asignatura] = value;
        this.setState({ notas: notas });
    }

    calcular() {
        console.log(this.props.tachadas, this.props.asignaturasSeleccionadas);
        //(valor medio de los resultados semestrales contabilizados) x 40
        let total = 0;
        let totalNotas = 0;
        this.props.asignaturasSeleccionadas.forEach(asignatura => {
            /*
            if( Asignaturas[asignatura].required) { //de momento no se aplica
                total += notas.h4[asignatura];
                let siguientes = [notas.h1[asignatura], notas.h2[asignatura], notas.h3[asignatura]];
                siguientes.sort();
                const cnt = this.tachadasCnt(asignatura);
                for(let i = cnt; i < 3 && totalNotas < 36; i += 1) {
                    total += siguientes[i];
                    totalNotas += 1;
                }
            } else {
            */
            let siguientes = [this.state.notas.h4[asignatura], this.state.notas.h1[asignatura], this.state.notas.h2[asignatura], this.state.notas.h3[asignatura]];
            siguientes.sort();
            for(let i = this.cntTachada(asignatura); i < 4 && totalNotas < 36; i += 1) {
                total += siguientes[i];
                totalNotas += 1;
            }
        });

        if(totalNotas < 36) {
            message.error("No llegas a las 36 notas necesarias, tienes tan solo " + totalNotas.toString());
            return;
        }
        const puntos = Math.round((total / 36) * 40 * 1.5); //1.5 para simular el otro tercio
        let alemana = 0.0, española = 0.0;

        if(puntos === 300) {
            alemana = "4,0";
            española = "5,0";
        } else if(puntos < 300) {
            alemana = "> 4,0";
            española = "< 5,0 (Suspenso)";
        } else {
            let rangos = Object.keys(this.rangoAlemana);
            rangos.sort();
            for(let i = rangos.length - 1; i >= 0; i--) {
                if(puntos > rangos[i]) {
                    alemana = (i + 1 === rangos.length ? "< 1,0" : this.rangoAlemana[rangos[i + 1]]);
                    española = (alemana === "< 1.0" ? "> 10,0" : this.rangoEspañola[alemana]);
                    break;
                } else { console.log("Nope", rangos[i]) }
            }
        }

        let resultado = {
            "puntos": Math.round((total / 36) * 40),
            "alemana": alemana,
            "española": española,
            "exists": true,
            "isLoading": true,
        }
        this.setState({ resultado: resultado });
        setTimeout(this.afterLoading.bind(this), 3000);
    }

    afterLoading() {
        let resultado = this.state.resultado;
        resultado.isLoading = false;
        this.setState({ resultado: resultado });
    }

    render() {
        if(Object.keys(this.state.notas.h1).length === 0) {
            return (<div></div>);
        }
        const halbajhrs = [1, 2, 3, 4];
        return (
            <div style={{marginBottom:"50px"}}>
                <div className="subtitulo">
                    Con los ajustes que has realizado podrás calcular la nota media que tendrás de todos los semestres.
                    Las cuatro notas semestrales son 2 tercios de tu nota global, 600 de los 900 puntos que puedes conseguir en total.
                    Las notas de este último semestre son bastante predecibles con la mayoría de profes por lo que esta nota se supone
                    que se tiene que acercar bastante a la realidad.
                    <br /><br />
                    Por cierto, también es importante mencionar el punto 1) c) del apartado §7 de <a href="">este</a> documento, que creo que quiere decir que es muy estúpido no esforzarse este último semestre:
                    <br />
                    <b>
                        En caso de que una asignatura obligatoria extracurricular aprobada sobre la base de una
                        regulación de caso individual no se incluya en las asignaturas del examen Abitur
                        del examinando, el examinando deberá obtener más de 0 puntos en dicha
                        asignatura en cualquier semestre de la fase de cualificación y <span style={{color:"red"}}> el resultado obtenido
                        en como mínimo el último semestre deberá computarse para la calificación.</span>
                    </b>
                    <br /><br />
                    De momento esta última condición no la aplico porque no tengo muy clara la definición de "asignatura obligatoria extracurricular aprobada
                    sobre la base de una regulación de caso individual" pero la menciono por si acaso.
                    <br /><br />
                    Por último, este programa también hace una conversión automática de los puntos raros del abitur (0 - 900) a nota española (0 - 10) y a nota tradicional alemana (1 - 6) con comas.
                </div>
				<Collapse accordion style={{ marginBottom: "15px" }}>
                    {halbajhrs.map(h => {
                        let headerString;
                        if(h === 1) headerString = "Primer Halbjahr Clase 11";
                        else if(h === 2) headerString = "Segundo Halbjahr Clase 11";
                        else if(h === 3) headerString = "Primer Halbjahr Clase 12";
                        else if(h === 4) headerString = "Segundo Halbjahr Clase 12 (Predicciones)";
                        return (
                            <Panel key={h} header={headerString}>
                                {this.props.asignaturasSeleccionadas.map(asignatura => {
                                    return (
                                        <div key={asignatura}>
                                            <div> {asignatura}: {this.state.notas["h"+h.toString()][asignatura]}</div>
                                            <Slider min={0} max={15} onChange={(value) => this.handleChange("h" + h.toString(), asignatura, value)} value={this.state.notas["h"+h.toString()][asignatura]} />
                                        </div>
                                    );
                                })}
                            </Panel>
                        );
                    })}
				</Collapse>
                <Tag
                    color="processing"
                    className="botonComprobacion"
                    style={{ marginTop: "15px" }}
                    onClick={() => this.calcular()}
                >
                    {this.state.resultado.isLoading &&
                        <span>
                            <SyncOutlined spin /> &nbsp;
                            Calculando
                        </span>
                    }
                    {!this.state.resultado.isLoading &&
                        <span>
                            <PlayCircleOutlined /> &nbsp;
                            Calcular
                        </span>
                    }
                </Tag>
                {this.state.resultado.exists === true && !this.state.resultado.isLoading &&
                    <div
                        className="resultadoComprobacion"
                        style={{
                            border: "1px solid green",
                            backgroundColor: "rgba(115, 240, 115, 0.1)",
                        }}
                    >
                        Puntos de Abitur: {this.state.resultado.puntos}/600 (tranqui que te faltan todavia los 300 de las Abiprüfungen)
                        <br />
                        Nota alemana: {this.state.resultado.alemana}
                        <br />
                        Nota española: {this.state.resultado.española}
                    </div>
                }
            </div>
        );
    }
}
