(this.webpackJsonpnotas=this.webpackJsonpnotas||[]).push([[0],{116:function(e,a,t){e.exports=t(204)},121:function(e,a,t){},204:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),o=t(6),r=t.n(o),i=(t(121),t(46),t(27)),c=t(28),l=t(30),u=t(31),d=t(208),h=t(210),m=t(206),g=t(209),p=t(211),b=t(212),f=d.a.Panel,E=function(e){Object(u.a)(t,e);var a=Object(l.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={notas:{h1:{},h2:{},h3:{},h4:{}},registradas:[],resultado:{puntos:0,alemana:0,"espa\xf1ola":0,exists:!1,isLoading:!1}},n.rangoAlemana={900:1,822:1.1,804:1.2,786:1.3,768:1.4,750:1.5,732:1.6,714:1.7,696:1.8,678:1.9,660:2,642:2.1,624:2.2,606:2.3,588:2.4,570:2.5,552:2.6,534:2.7,516:2.8,498:2.9,480:3,462:3.1,444:3.2,426:3.3,408:3.4,390:3.5,372:3.6,354:3.7,336:3.8,318:3.9,300:4},n.rangoEspa\u00f1ola={1:10,1.1:9.83,1.2:9.67,1.3:9.5,1.4:9.33,1.5:9.17,1.6:9,1.7:8.83,1.8:8.67,1.9:8.5,2:8.33,2.1:8.17,2.2:8,2.3:7.83,2.4:7.67,2.5:7.5,2.6:7.33,2.7:7.17,2.8:7,2.9:6.83,3:6.67,3.1:6.5,3.2:6.33,3.3:6.17,3.4:6,3.5:5.83,3.6:5.67,3.7:5.5,3.8:5.33,3.9:5.17,4:5},n}return Object(c.a)(t,[{key:"cntTachada",value:function(e){var a=0;return this.props.tachadas.forEach((function(t){t===e&&a++})),a}},{key:"componentDidMount",value:function(){var e=this.state.notas,a=[];this.props.asignaturasSeleccionadas.forEach((function(t){e.h1[t]=5,e.h2[t]=5,e.h3[t]=5,e.h4[t]=5,a.push(t)})),this.setState({notas:e,registradas:a})}},{key:"componentDidUpdate",value:function(){var e=this,a=this.state.registradas,t=this.state.notas;this.props.asignaturasSeleccionadas.forEach((function(n){e.state.registradas.includes(n)||(a.push(n),t.h1[n]=5,t.h2[n]=5,t.h3[n]=5,t.h4[n]=5)})),a.length>this.state.registradas&&this.setState({registradas:a,notas:t})}},{key:"handleChange",value:function(e,a,t){var n=this.state.notas;n[e][a]=t,this.setState({notas:n})}},{key:"calcular",value:function(){var e=this;console.log(this.props.tachadas,this.props.asignaturasSeleccionadas);var a=0,t=0;if(this.props.asignaturasSeleccionadas.forEach((function(n){var s=[e.state.notas.h4[n],e.state.notas.h1[n],e.state.notas.h2[n],e.state.notas.h3[n]];s.sort();for(var o=e.cntTachada(n);o<4&&t<36;o+=1)a+=s[o],t+=1})),t<36)h.a.error("No llegas a las 36 notas necesarias, tienes tan solo "+t.toString());else{var n=Math.round(a/36*40*1.5),s=0,o=0;if(300===n)s="4,0",o="5,0";else if(n<300)s="> 4,0",o="< 5,0 (Suspenso)";else{var r=Object.keys(this.rangoAlemana);r.sort();for(var i=r.length-1;i>=0;i--){if(n>r[i]){o="< 1.0"===(s=i+1===r.length?"< 1,0":this.rangoAlemana[r[i+1]])?"> 10,0":this.rangoEspa\u00f1ola[s];break}console.log("Nope",r[i])}}var c={puntos:Math.round(a/36*40),alemana:s,"espa\xf1ola":o,exists:!0,isLoading:!0};this.setState({resultado:c}),setTimeout(this.afterLoading.bind(this),3e3)}}},{key:"afterLoading",value:function(){var e=this.state.resultado;e.isLoading=!1,this.setState({resultado:e})}},{key:"render",value:function(){var e=this;if(0===Object.keys(this.state.notas.h1).length)return s.a.createElement("div",null);return s.a.createElement("div",null,s.a.createElement("div",{className:"subtitulo"},"Con los ajustes que has realizado podr\xe1s calcular la nota media que tendr\xe1s de todos los semestres. Las cuatro notas semestrales son 2 tercios de tu nota global, 600 de los 900 puntos que puedes conseguir en total. Las notas de este \xfaltimo semestre son bastante predecibles con la mayor\xeda de profes por lo que esta nota se supone que se tiene que acercar bastante a la realidad.",s.a.createElement("br",null),s.a.createElement("br",null),"Por cierto, tambi\xe9n es importante mencionar el punto 1) c) del apartado \xa77 de ",s.a.createElement("a",{href:""},"este")," documento, que creo que quiere decir que es muy est\xfapido no esforzarse este \xfaltimo semestre:",s.a.createElement("br",null),s.a.createElement("b",null,"En caso de que una asignatura obligatoria extracurricular aprobada sobre la base de una regulaci\xf3n de caso individual no se incluya en las asignaturas del examen Abitur del examinando, el examinando deber\xe1 obtener m\xe1s de 0 puntos en dicha asignatura en cualquier semestre de la fase de cualificaci\xf3n y ",s.a.createElement("span",{style:{color:"red"}}," el resultado obtenido en como m\xednimo el \xfaltimo semestre deber\xe1 computarse para la calificaci\xf3n.")),s.a.createElement("br",null),s.a.createElement("br",null),'De momento esta \xfaltima condici\xf3n no la aplico porque no tengo muy clara la definici\xf3n de "asignatura obligatoria extracurricular aprobada sobre la base de una regulaci\xf3n de caso individual" pero la menciono por si acaso.',s.a.createElement("br",null),s.a.createElement("br",null),"Por \xfaltimo, este programa tambi\xe9n hace una conversi\xf3n autom\xe1tica de los puntos raros del abitur (0 - 900) a nota espa\xf1ola (0 - 10) y a nota tradicional alemana (1 - 6) con comas."),s.a.createElement(d.a,{accordion:!0,style:{marginBottom:"15px"}},[1,2,3,4].map((function(a){var t;return 1===a?t="Primer Halbjahr Clase 11":2===a?t="Segundo Halbjahr Clase 11":3===a?t="Primer Halbjahr Clase 12":4===a&&(t="Segundo Halbjahr Clase 12 (Predicciones)"),s.a.createElement(f,{key:a,header:t},e.props.asignaturasSeleccionadas.map((function(t){return s.a.createElement("div",{key:t},s.a.createElement("div",null," ",t,": ",e.state.notas["h"+a.toString()][t]),s.a.createElement(m.a,{min:0,max:15,onChange:function(n){return e.handleChange("h"+a.toString(),t,n)},value:e.state.notas["h"+a.toString()][t]}))})))}))),s.a.createElement(g.a,{color:"processing",className:"botonComprobacion",style:{marginTop:"15px"},onClick:function(){return e.calcular()}},this.state.resultado.isLoading&&s.a.createElement("span",null,s.a.createElement(p.a,{spin:!0})," \xa0 Calculando"),!this.state.resultado.isLoading&&s.a.createElement("span",null,s.a.createElement(b.a,null)," \xa0 Calcular")),!0===this.state.resultado.exists&&!this.state.resultado.isLoading&&s.a.createElement("div",{className:"resultadoComprobacion",style:{border:"1px solid green",backgroundColor:"rgba(115, 240, 115, 0.1)"}},"Puntos de Abitur: ",this.state.resultado.puntos,"/600 (tranqui que te faltan todavia los 300 de las Abipr\xfcfungen)",s.a.createElement("br",null),"Nota alemana: ",this.state.resultado.alemana,s.a.createElement("br",null),"Nota espa\xf1ola: ",this.state.resultado.espa\u00f1ola))}}]),t}(s.a.Component),v={Deutsch:{required:!0,type:"Deutsch"},"Espa\xf1ol":{required:!0,type:"Language"},English:{required:!0,type:"Language"},"Catal\xe0":{required:!1,type:"Language"},"Franc\xe9s":{required:!1,type:"Language"},Mathe:{required:!0,type:"Mathe"},Physik:{required:!1,type:"Science"},Biologie:{required:!1,type:"Science"},Chemie:{required:!1,type:"Science"},Geschichte:{required:!0,type:"SScience"},Erdkunde:{required:!1,type:"SScience"},"Filosof\xeda":{required:!0,type:"SScience"},Sport:{required:!1,type:"Sport"},Kunst:{required:!1,type:"Kunst"},Musik:{required:!1,type:"Kunst"}},S=["magenta","red","volcano","orange","blue","geekblue","green","cyan","blue","geekblue","purple","green","volcano","blue","magenta","cyan"],y=function(e){Object(u.a)(t,e);var a=Object(l.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).addAsignatura=function(e){var a=n.state.asignaturasSeleccionadas;a.push(e),n.props.onChange(a),n.setState({asignaturasSeleccionadas:a})},n.deleteAsignatura=function(e){if(!0!==v[e].required){for(var a=[],t=0;t<n.state.asignaturasSeleccionadas.length;t++)n.state.asignaturasSeleccionadas[t]!==e&&a.push(n.state.asignaturasSeleccionadas[t]);n.props.onChange(a),n.setState({asignaturasSeleccionadas:a})}else h.a.error("Esta asignatura es obligatoria")},n.state={asignaturas:["Deutsch","Espa\xf1ol","English","Catal\xe0","Franc\xe9s","Mathe","Physik","Biologie","Chemie","Geschichte","Erdkunde","Filosof\xeda","Sport","Kunst","Musik"],asignaturasSeleccionadas:["Deutsch","Espa\xf1ol","English","Mathe","Geschichte","Filosof\xeda","Sport"]},n}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"divAsignaturas"},this.state.asignaturas.map((function(a,t){return e.state.asignaturasSeleccionadas.includes(a)?s.a.createElement(g.a,{key:a,className:"asignatura",color:S[t],onClick:function(){return e.deleteAsignatura(a)}},a):s.a.createElement(g.a,{key:a,className:"asignatura",onClick:function(){return e.addAsignatura(a)}},a)})))}}]),t}(s.a.Component),k=t(205),C=t(213),q=t(214),L=t(215),N=["magenta","red","volcano","orange","blue","geekblue","green","cyan","blue","geekblue","purple","green","volcano","blue","magenta","cyan"],A=function(e){return s.a.createElement(k.a,{style:{width:"100px"},className:"asignatura",onSelect:e.onSelect,options:e.options,placeholder:"Asignatura",filterOption:function(e,a){return-1!==a.value.toUpperCase().indexOf(e.toUpperCase())}})},O=function(e){Object(u.a)(t,e);var a=Object(l.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={tachadas:["Sport"],showInput:!1,isReady:!0,isLoading:!1,isAfterLoading:!1,message:""},n}return Object(c.a)(t,[{key:"cntTachada",value:function(e){var a=0;return this.state.tachadas.forEach((function(t){t===e&&a++})),a}},{key:"addTachada",value:function(e){if(this.cntTachada(e)>=4)h.a.error("No puedes tachar m\xe1s de 4 notas para una misma asignatura");else{var a=this.state.tachadas;a.push(e),this.props.onChange(a),this.setState({tachadas:a,showInput:!1})}}},{key:"deleteTachada",value:function(e){if(0!==e){for(var a=[],t=0;t<this.state.tachadas.length;t++)t!==e&&a.push(this.state.tachadas[t]);this.props.onChange(a),this.setState({tachadas:a})}else h.a.error("Se tiene que tachar como m\xednimo una nota de deporte")}},{key:"renderMessage",value:function(){if(this.state.isLoading||""===this.state.message)return s.a.createElement("div",null)}},{key:"afterLoading",value:function(){this.setState({isAfterLoading:!1,isReady:!0})}},{key:"finishLoading",value:function(){this.setState({isLoading:!1,isAfterLoading:!0}),setTimeout(this.afterLoading.bind(this),3e3)}},{key:"componentDidUpdate",value:function(e){if(e.asignaturasSeleccionadas.length>this.props.asignaturasSeleccionadas.length){for(var a=[],t=0;t<this.state.tachadas.length;t++)this.props.asignaturasSeleccionadas.includes(this.state.tachadas[t])&&a.push(this.state.tachadas[t]);this.setState({tachadas:a})}}},{key:"comprobar",value:function(){var e=this;if(this.state.isReady){var a="",t={Deutsch:0,Mathe:0,Language:0,Science:0,SScience:0,Geschichte:0,Kunst:0,Sport:0};this.props.asignaturasSeleccionadas.forEach((function(a){"Language"!==v[a].type?t[v[a].type]+=4:e.state.tachadas.includes(a)||(t.Language+=4),"Geschichte"===a&&(t.Geschichte+=4)})),this.state.tachadas.forEach((function(e){"Language"!==v[e].type&&(t[v[e].type]-=1),"Geschichte"===e&&(t.Geschichte-=1)})),t.Deutsch<4&&(a+="No puedes tachar ninguna nota de alem\xe1n\n"),t.Mathe<4&&(a+="No puedes tachar ninguna nota de mates\n"),t.Language<4&&(a+="Necesitas las 4 notas semestrales de al menos un idioma (que no sea alem\xe1n)\n"),t.Science<4&&(a+="Necesitas como m\xednimo 4 notas de ciencias (PHY, BIO o CHM)\n"),t.Science<4&&(a+="Necesitas como m\xednimo 4 notas de ciencias sociales (PHI, ERK o GES)\n"),t.Geschichte<2&&(a+="Necesitas como m\xednimo 2 notas de Geschichte\n"),t.Kunst<3&&(a+="Necesitas como m\xednimo 3 notas de Kunst o Musik\n");var n=!1;this.props.asignaturasSeleccionadas.forEach((function(t){!n&&"Language"===v[t].type&&e.cntTachada(t)>2&&(console.log(t),a+="Para cada asignatura de idiomas has de contabilizar (no tachar) por lo menos 2 notas\n",n=!0)}));var s=0;t.Language=0,this.props.asignaturasSeleccionadas.forEach((function(a){"Language"!==v[a].type&&"Science"!==v[a].type||3===e.cntTachada(a)&&(s+=1),"Language"===v[a].type&&(t.Language+=4,t.Language-=e.cntTachada(a))})),t.Science+t.Language-s<14&&(a+="Entre ciencias naturales e idiomas (exceptuando alem\xe1n) has de contabilizar 14 notas semestrales. Solo contabilizan las notas de las asignaturas que no tengan 3 o m\xe1s notas tachadas, de momento tienes "+(t.Science+t.Language-s).toString()+".\n"),n=!1,this.props.asignaturasSeleccionadas.forEach((function(t){n||4!==e.cntTachada(t)||(a+="Has de contabilizar como m\xednimo una nota de cada asignatura\n",n=!0)})),""===a&&(a="Combinaci\xf3n v\xe1lida"),this.setState({isReady:!1,isLoading:!0,message:a}),setTimeout(this.finishLoading.bind(this),2e3,this)}}},{key:"renderComprobacion",value:function(){if(""===this.state.message||this.state.isLoading)return s.a.createElement("div",null);if("Combinaci\xf3n v\xe1lida"===this.state.message)return s.a.createElement("div",{className:"resultadoComprobacion",style:{border:"1px solid green",backgroundColor:"rgba(115, 240, 115, 0.1)"}},s.a.createElement(C.a,null),"\xa0 La combinaci\xf3n es v\xe1lida");var e=this.state.message.split("\n");return s.a.createElement("div",{className:"resultadoComprobacion",style:{border:"1px solid red",backgroundColor:"rgba(240, 110, 110, 0.1)"}},s.a.createElement(q.a,null),"\xa0 Combinaci\xf3n inv\xe1lida",s.a.createElement("br",null),e.map((function(e,a){return e.length<=2?s.a.createElement("span",{key:a}):s.a.createElement("span",{key:a},s.a.createElement("br",null),(a+1).toString()+"."," \xa0 ",e)})))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"subtitulo",style:{marginBottom:"20px"}},"Para cada nota semestral que quieras sacar a\xf1ade la asignatura. Solo puedes tachar notas de asignaturas que no tengas como examen del Abitur. Es obligatorio tachar como m\xednimo una nota de deporte, por eso est\xe1 ah\xed puesta.",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{style:{fontSize:"1.1rem",lineHeight:"0.05 rem"}},"Solo cuentan ",s.a.createElement("b",{style:{color:"#4633FF"}},"36")," notas. De momento tienes ",s.a.createElement("b",{style:{color:"#3361FF"}},4*this.props.asignaturasSeleccionadas.length-this.state.tachadas.length)," notas, por lo que te quedan ",s.a.createElement("b",{style:{color:4*this.props.asignaturasSeleccionadas.length-this.state.tachadas.length-36>0?"green":"#F43939"}},4*this.props.asignaturasSeleccionadas.length-this.state.tachadas.length-36>0?4*this.props.asignaturasSeleccionadas.length-this.state.tachadas.length-36:0)," tachadas disponibles.")),this.state.tachadas.map((function(a,t){return s.a.createElement(g.a,{key:a+t.toString(),color:N[t],className:"asignatura",onClick:function(){return e.deleteTachada(t)}},a)})),!this.state.showInput&&4*this.props.asignaturasSeleccionadas.length-this.state.tachadas.length-36>0&&s.a.createElement(g.a,{className:"nuevaAsignatura",onClick:function(){return e.setState({showInput:!0})}},s.a.createElement(L.a,null)," \xa0 A\xf1adir"),this.state.showInput&&s.a.createElement(A,{onSelect:function(a){return e.addTachada(a)},options:this.props.asignaturasSeleccionadas.map((function(e){return{value:e}}))}),this.state.isReady&&s.a.createElement(g.a,{color:"processing",className:"botonComprobacion",onClick:function(){return e.comprobar()}},s.a.createElement(b.a,null)," \xa0 Comprobar"),this.state.isLoading&&s.a.createElement(g.a,{color:"processing",className:"botonComprobacion",onClick:function(){return e.comprobar()}},s.a.createElement(p.a,{spin:!0}),"\xa0 Procesando"),this.state.isAfterLoading&&"Combinaci\xf3n v\xe1lida"===this.state.message&&s.a.createElement(g.a,{color:"success",className:"botonComprobacion",style:{width:"150px"}},s.a.createElement(C.a,null),"\xa0 Combinaci\xf3n correcta"),this.state.isAfterLoading&&"Combinaci\xf3n v\xe1lida"!==this.state.message&&s.a.createElement(g.a,{color:"error",className:"botonComprobacion",style:{width:"160px"}},s.a.createElement(q.a,null),"\xa0 Combinaci\xf3n incorrecta"),this.renderComprobacion())}}]),t}(s.a.Component),j=function(e){Object(u.a)(t,e);var a=Object(l.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={seleccionadas:["Deutsch","Espa\xf1ol","English","Mathe","Geschichte","Filosof\xeda","Sport"],tachadas:["Sport"]},n}return Object(c.a)(t,[{key:"changeSeleccionadas",value:function(e){this.setState({seleccionadas:e})}},{key:"changeTachadas",value:function(e){this.setState({tachadas:e})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"titulo"},"Selecciona tus asignaturas:"),s.a.createElement(y,{onChange:function(a){return e.changeSeleccionadas(a)}}),s.a.createElement("div",{className:"titulo"},"\xbfQu\xe9 combinaci\xf3n de asignaturas puedo tachar?"),s.a.createElement(O,{asignaturasSeleccionadas:this.state.seleccionadas,onChange:function(a){return e.changeTachadas(a)}}),s.a.createElement("div",{className:"titulo"},"\xbfQu\xe9 media me queda tachando estas notas?"),s.a.createElement(E,{asignaturasSeleccionadas:this.state.seleccionadas,tachadas:this.state.tachadas}))}}]),t}(s.a.Component);var x=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"titulo"},"\xbfQu\xe9 es esta p\xe1gina?"),s.a.createElement("div",{className:"subtitulo"},"Esta p\xe1gina es una mini-herramienta que he hecho porque no entend\xeda como funcionaba el sistema de tachar notas para subir la media. Me sigue pareciendo muy raro este sistema pero al menos ahora s\xe9 en qu\xe9 asignaturas tengo que esforzarme mucho este \xfaltimo semestre.",s.a.createElement("br",null),s.a.createElement("br",null),"Todo el c\xf3digo de esta p\xe1gina se basa en ",s.a.createElement("a",{href:"https://github.com/OscarBalcells/notas/blob/master/public/Normativa_para_la_obtenci\xf3n_del_Allgemeine_Hochschulreife.pdf"},"este")," documento y en ",s.a.createElement("a",{href:"https://github.com/OscarBalcells/notas/blob/master/public/Ordnung_zur_Erlangung_der_Allgemeinen_Hochschulreife an_Deutschen_Schulen_im_Ausland.pdf"},"este otro")," (lo mismo en alem\xe1n pero con tablas conversi\xf3n) y en ",s.a.createElement("a",{href:"https://www.dsbilbao.org/oferta-educativa/equivalencia-sistema-educativo-aleman-y-espanol/"},"esta")," web. Puede haber alg\xfan error as\xed que si te aburres y te apetece puedes le\xe9rtelos para comprobar los resultados."),s.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,a,t){}},[[116,1,2]]]);
//# sourceMappingURL=main.faede41c.chunk.js.map