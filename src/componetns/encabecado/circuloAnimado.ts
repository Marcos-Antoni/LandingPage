import gsap from "gsap";

const circulo = document.querySelector(".circulo");

export const circuloAnimado = () => {
  for (let i = 0; i < 72; i++) {
    const borde = crearBorder(circulo, i);
    iniciarBordeAnimacion(borde);
  }

  gsap.to(".borde", {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: (index) => index * 5,
    duration: 1.5,
    stagger: 0.02,
  });
};

const crearBorder = (elemento: Element | null, i: number) => {
  const borde = document.createElement("span");
  borde.classList.add("borde");
  borde.style.filter = `hue-rotate(${i * 5}deg)`;
  elemento?.appendChild(borde);

  return borde;
};

const iniciarBordeAnimacion = (borde: Element | null) => {
  const angle = Math.random() * Math.PI * 2; // Ángulo aleatorio
  const distance = 100 + Math.random() * 100; // Distancia aleatoria
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;
  const scale = 0.5 + Math.random(); // Escala aleatoria entre 0.5 y 1.5

  gsap.set(borde, {
    x: x,
    y: y,
    opacity: 0,
    scale: scale,
    rotation: Math.random() * 360,
  });
};
