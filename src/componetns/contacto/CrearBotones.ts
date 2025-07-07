import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Crear la línea de tiempo

export const CrearBotones = () => {
  const botones = document.querySelectorAll(".contacto .caja .btn");

  botones.forEach((boton) => {
    const cuadrados = boton.querySelectorAll(".cuadrado");

    cuadrados.forEach((cuadrado) => {
      gsap.to(cuadrado, {
        x: Math.random() * 400 - 200,
        y: Math.random() * 400 - 200,
        opacity: 0,
      });
    });

    const portafolioTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: boton, // Tu sección de portafolio
        start: "top bottom", // Comienza cuando el top está al centro
        end: "top center", // Termina cuando el bottom está al centro
        scrub: 1, // Animación suave
        markers: true, // Muestra marcadores (quitar en producción)
      },
    });

    portafolioTimeline
      .to(".contacto .caja .btn .cuadrado", {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
      })
      .from(".contacto .caja .btn .texto", {
        opacity: 0,
      });
  });

  // Añadir animaciones
};
