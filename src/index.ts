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


let caracter: string = preguntar('¿Con que caracter vas a dibujar el cuadrado? ');
let tamaño: number = Number(preguntar('¿De qué tamaño? '));
let resultado: string = repetirLetra (caracter, tamaño);
let vecesRepetido: number = 1;


while (vecesRepetido < tamaño) {
  console.log(resultado)
  vecesRepetido = vecesRepetido + 1;
}
  

