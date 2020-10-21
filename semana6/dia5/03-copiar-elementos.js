// Formas de copiar arreglos de objetos

let edades = [50, 12, 36, 80, 20];

// Como copiar un arreglo a otra variable

// ERROR
let nuevasEdades = edades;
console.log(edades);
console.log(nuevasEdades);

edades[0] = 1;
console.log(nuevasEdades);

console.log("Modificando");

edades[0] = 51;
console.log(edades);
console.log(nuevasEdades);

// CORRECTO
console.log("Forma Correcta");
let edadesCopiadas = [...edades];
console.log(edades);
console.log(edadesCopiadas);
console.log("Modificando");
edades[1] = 2;
console.log(edades);
console.log(edadesCopiadas);