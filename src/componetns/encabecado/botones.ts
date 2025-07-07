import gsap from "gsap";

interface PropsBotonConfig {
  boton: HTMLElement;
  width: number;
  height: number;
  cuadradoSize: number;
  colorValue: string;
}

interface PropsCuadradoConfig {
  x: number;
  y: number;
  colorValue: string;
}

export const botonesAnimados = (): void => {
  const botonesAll = document.querySelectorAll<HTMLElement>(".btn");
  botonesAll.forEach(animarBoton);
};

const animarBoton = (boton: HTMLElement): void => {
  const { width, height } = boton.getBoundingClientRect();
  const { cuadradoSize, colorValue } = obtenerConfiguracionBoton(boton);

  crearCuadrados({ boton, width, height, cuadradoSize, colorValue });
  animarCuadrados();

  boton.onmouseenter = () => {
    animarHover(boton, 0);
  };

  boton.onmouseleave = () => {
    animarHover(boton, 1);
  };
};

const obtenerConfiguracionBoton = (
  boton: HTMLElement
): { cuadradoSize: number; colorValue: string } => {
  const color = boton.querySelector<HTMLElement>(".cuadrado");
  if (!color) return { cuadradoSize: 0, colorValue: "" };

  const style = getComputedStyle(color);
  return {
    cuadradoSize: Number(style.width.replace("px", "")),
    colorValue: style.backgroundColor,
  };
};

const crearCuadrados = ({
  boton,
  width,
  height,
  cuadradoSize,
  colorValue,
}: PropsBotonConfig): void => {
  for (let x = 0; x < width; x += cuadradoSize) {
    for (let y = 0; y < height; y += cuadradoSize) {
      const cuadrado = crearCuadrado({ x, y, colorValue });
      boton.appendChild(cuadrado);
      PrepararAnimarCuadrado(cuadrado);
    }
  }
};

const crearCuadrado = ({
  x,
  y,
  colorValue,
}: PropsCuadradoConfig): HTMLElement => {
  const cuadrado = document.createElement("span");
  cuadrado.classList.add("cuadrado");
  cuadrado.style.left = `${x}px`;
  cuadrado.style.top = `${y}px`;
  cuadrado.style.transition = `opacity ${
    Math.random() * 0.5 + 0.5
  }s ease-in-out`;
  cuadrado.style.background = colorValue;
  return cuadrado;
};

const PrepararAnimarCuadrado = (cuadrado: HTMLElement): void => {
  gsap.set(cuadrado, {
    opacity: 1,
    delay: Math.random() * 2 + 0.5,
  });
};

const animarCuadrados = (): void => {
  gsap.to(".cuadrado", {
    opacity: 0,
  });
};

const animarHover = (boton: HTMLElement, opacity: number): void => {
  gsap.to(boton.querySelectorAll(".cuadrado"), {
    opacity: opacity,
    delay: Math.random() * 0.5,
    duration: 0.2,
  });
};
