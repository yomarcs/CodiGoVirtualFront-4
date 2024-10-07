//<--================================-->
//<--------- CodiGo - Tecsup ---------->
//<----- Desarrollo Web FullStack ----->
//<------ FrontEnd - JavaScript ------->
//<-------------- Repaso -------------->
//<--================================-->

// Ejercicio 01 => Traer los usuarios activos
let usuariosActivos = users.filter((user) => {
    return user.active === true;
});
console.log(usuariosActivos);

let usuariosActivos2 = users.filter(user => user.active === false)
console.log(usuariosActivos2);

message('Ejercicio 1 :')
console.table(usuariosActivos)

message(`repaso callbacks Ejemplo`)
console.table(users)

function sum(a, b) {
  return a + b;
}
console.log(sum(1, 3));

function sum2(a, b, f) {
    f(a + b);
}
sum2(1, 2, (value) => {
  console.log(value);
});