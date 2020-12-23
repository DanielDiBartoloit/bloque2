let sueldoPrimero = parseFloat(
  prompt("Por favor ingrese su sueldo", "Sueldo Primer Trabajador")
);
let sueldoSegundo = parseFloat(
  prompt("Por favor ingrese su sueldo", "Sueldo Segundo Trabajador")
);
let sueldoTercero = parseFloat(
  prompt("Por favor ingrese su sueldo", "Sueldo Tercer Trabajador")
);
let sueldoCuarto = parseFloat(
  prompt("Por favor ingrese su sueldo", "Sueldo Cuarto Trabajador")
);
let sueldoQuinto = parseFloat(
  prompt("Por favor ingrese su sueldo", "Sueldo Quinto Trabajador")
);

if (sueldoPrimero > 300) {
  document.write("// El primer trabajador cobra un sueldo mayor a $300 //");
} else if (sueldoPrimero >= 100 && sueldoPrimero <= 300) {
  document.write(
    "// El primer trabajador cobra un sueldo entre $100 y $300 //"
  );
} else if (sueldoPrimero < 100) {
  document.write("// El primer trabajador cobra menos de $100 //");
} else {
  document.write("Hola manola");
}

if (sueldoSegundo > 300) {
  document.write("// El segundo trabajador cobra un sueldo mayor a $300 //");
} else if (sueldoSegundo >= 100 && sueldoSegundo <= 300) {
  document.write(
    "// El segundo trabajador cobra un sueldo entre $100 y $300 //"
  );
} else if (sueldoSegundo < 100) {
  document.write("// El segundo trabajador cobra menos de $100 //");
} else {
  document.write("Hola manola");
}

if (sueldoTercero > 300) {
  document.write("// El tercer trabajador cobra un sueldo mayor a $300 //");
} else if (sueldoTercero >= 100 && sueldoTercero <= 300) {
  document.write(
    "// El tercer trabajador cobra un sueldo entre $100 y $300 //"
  );
} else if (sueldoTercero < 100) {
  document.write("// El tercer trabajador cobra menos de $100 //");
} else {
  document.write("Hola manola");
}

if (sueldoCuarto > 300) {
  document.write("// El cuarto trabajador cobra un sueldo mayor a $300 //");
} else if (sueldoCuarto >= 100 && sueldoCuarto <= 300) {
  document.write(
    "// El cuarto trabajador cobra un sueldo entre $100 y $300 //"
  );
} else if (sueldoCuarto < 100) {
  document.write("// El cuarto trabajador cobra menos de $100 //");
} else {
  document.write("Hola manola");
}

if (sueldoQuinto > 300) {
  document.write("// El quinto trabajador cobra un sueldo mayor a $300 //");
} else if (sueldoQuinto >= 100 && sueldoQuinto <= 300) {
  document.write(
    "// El quinto trabajador cobra un sueldo entre $100 y $300 //"
  );
} else if (sueldoQuinto < 100) {
  document.write("// El quinto trabajador cobra menos de $100 //");
} else {
  document.write("Hola manola");
}

let sumaSueldos =
  sueldoPrimero + sueldoSegundo + sueldoTercero + sueldoCuarto + sueldoQuinto;

document.write(`// La suma total de todos los sueldos es $${sumaSueldos}`);
