// CSS
import "./componetns/encabecado/encabecado.css";
import "./componetns/proyectos/proyectos.css";
import "./componetns/footer/footer.css";
import "./componetns/contacto/contacto.css";

// TS
import { circuloAnimado } from "./componetns/encabecado/circuloAnimado";
import { botonesAnimados } from "./componetns/encabecado/botones";
// import { CrearBotones } from "./componetns/contacto/CrearBotones";
import { crearIconos } from "./componetns/Icons";

document.addEventListener("DOMContentLoaded", () => {
  circuloAnimado();
  botonesAnimados();
  crearIconos();
  // CrearBotones();
});
