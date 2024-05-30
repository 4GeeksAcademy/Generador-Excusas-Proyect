/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const generarExcusa = () => {
    let sujetos = ["Mi perro", "El vecino", "Un alien", "Mi abuela", "El gato"];

    let Acciones = ["comió", "rompió", "robó", "perdió", "escondió"];

    let complementos = [
      "mi tarea",
      "las llaves",
      "mi cartera",
      "el coche",
      "mis zapatos"
    ];

    let sujetoAleatorio = sujetos[Math.floor(Math.random() * sujetos.length)];
    let AccionesAleatorio =
      Acciones[Math.floor(Math.random() * Acciones.length)];
    let complementoAleatorio =
      complementos[Math.floor(Math.random() * complementos.length)];

    return `${sujetoAleatorio} ${AccionesAleatorio} ${complementoAleatorio}.`;
  };

  document.querySelector("#excusa").innerHTML = generarExcusa();
};
