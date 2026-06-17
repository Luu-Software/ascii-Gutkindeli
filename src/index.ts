import { preguntar } from './lib/consola.ts';

function repetirLetra(letra: string, cantidad: number): string {
  consoleLog(letra * cantidad)
}

let caracter: string = preguntar('¿Con que caracter vas a dibujar el cuadrado? ');
let tamaño: number = Number(preguntar('¿De qué tamaño? '));

while (tamaño > 0){
  console.log(caracter)
 tamaño= tamaño -1
}

