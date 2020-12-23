let primerNumero = parseInt(prompt("Elija su primer numero"));
let segundoNumero = parseInt(prompt("Elija su segundo numero"));
let tercerNumero = parseInt(prompt("Elija su tercer numero"));
let cuartoNumero = parseInt(prompt("Elija su cuarto numero"));

primerNumero < 23 &&
segundoNumero < 23 &&
tercerNumero < 23 &&
cuartoNumero < 23
  ? document.write("Todos los números son menores al 23")
  : document.write("Algún numero es mayor a 23");
