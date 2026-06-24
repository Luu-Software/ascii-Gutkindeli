import { preguntar } from './lib/consola.ts';

function repetirLetra(letra: string, cantidad: number): string {
 let resultado : string= "";

  let vecesRepetido: number = 0
 
  while (vecesRepetido < cantidad){
    resultado= resultado + letra
    vecesRepetido = vecesRepetido + 1
  }
  return resultado;
}

function filaTrianguloIsoceles(letra: string, fila: number, tamaño: number): string {
  // COMPLETAR
  /* fila n: 2*n+1 asteriscos, con espacios a izquierda a derecha 
  Pueden asumir que el tamaño es impar, así el triángulo queda centrado. */
  let f: number = 0;
  let resultado: string = "";
  while(f <= tamaño ){
   console.log(repetirLetra("",(tamaño-f)/2) + repetirLetra(letra, 2*f+1) + repetirLetra("",(tamaño-f)/2))
   f=f+1;
  }


let caracter: string = preguntar('¿Con que caracter vas a dibujar el triángulo? ');
let tamaño: number = Number(preguntar('¿De qué tamaño? '));
let tipo: string = preguntar('¿Qué tipo de triángulo? (isoceles, rectangulo) ');
let vecesRepetida: number = 0;

if (tipo === "isoceles") {
  while (vecesRepetida <= tamaño) {
    console.log(filaTrianguloIsoceles(caracter,vecesRepetida,tamaño))
    vecesRepetida = vecesRepetida + 1
  }
}

if (tipo === "rectangulo") {
  while (vecesRepetida <= tamaño) {
    console.log(repetirLetra(caracter,vecesRepetida))
    vecesRepetida = vecesRepetida + 1
  }
}
