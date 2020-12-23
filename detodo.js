let suma = 0;
const numeroUsuario = parseFloat(
  prompt("Ingrese por favor un numero", "Ingrese su numero")
);

for (i = 1; i <= 10; i++) {
  let multiplicador = numeroUsuario * i;
  console.log(`${numeroUsuario} X ${i} = ${multiplicador}`);
  suma = multiplicador + suma;
}

document.write(`La suma de todos los resultados es ${suma}`);
