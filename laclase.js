const nombreAlumnos = [
  "Juan Pérez",
  "Pedro Gómez",
  "Daniel Di Bartolo",
  "Pablo Díaz",
  "Alexis Pereyra",
  "Marcela Moreno",
];
const notasAlumnos = [6, 4, 10, 7, 2, 5];
console.log(`La cantidad de alumnos son ${nombreAlumnos.length}`);
let alumnosAprobados = 0; // Todos contadores
let alumnosDesaprobados = 0;
let sumaNotaAprobados = 0;
let sumaNotaDesaprobados = 0;
let notasPares = 0;
let notasImpares = 0;

for (i = 0; i < notasAlumnos.length; i++) {
  if (notasAlumnos[i] >= 6) {
    alumnosAprobados++;
    sumaNotaAprobados = notasAlumnos[i] + sumaNotaAprobados;
  } else {
    alumnosDesaprobados++;
    sumaNotaDesaprobados = notasAlumnos[i] + sumaNotaDesaprobados;
  }
}

for (i = 0; i < notasAlumnos.length; i++) {
  notasAlumnos[i] % 2 === 0 ? notasPares++ : notasImpares++;
}

document.write(
  `// La cantidad de alumnos promocionados es de: ${alumnosAprobados} // <br>`
);
document.write(
  `// La cantidad de alumnos desaprobados es de: ${alumnosDesaprobados} // <br>`
);

document.write(
  `// La suma de las notas de los alumnos aprobados es de: ${sumaNotaAprobados} // <br>`
);

document.write(
  `// La suma de las notas de los alumnos desaprobados es de: ${sumaNotaDesaprobados} // <br>`
);

document.write(
  `// La media de alumnos aprobados es: ${
    sumaNotaAprobados / alumnosAprobados
  } // <br>`
);

document.write(
  `// La media de alumnos desaprobados es: ${
    sumaNotaDesaprobados / alumnosDesaprobados
  } // <br>`
);

document.write(
  `// La cantidad de notas pares es de: ${notasPares} y de notas impares es de: ${notasImpares} // <br>`
);

console.log(nombreAlumnos);

console.log(nombreAlumnos.sort());

document.write(`// La nota mas alta es ${Math.max(...notasAlumnos)} //`);
