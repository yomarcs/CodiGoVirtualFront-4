let objProducto = {
    nombre: "Smartphone",
    marca: "Xiomi",
    modelo: "Mate 10 pro",
    caracteristicas: {
        color: "azul",
        imei: "101142731171",
        ram: "6gb",
        memoria: "128gb"
    }
}

// Para imprimir todas la caracteristicas

for(const clave in objProducto){
    // console.log(clave);
    let claveMostrar = clave.charAt(0).toLocaleUpperCase() + clave.substring(1);
    console.log(claveMostrar + " " + objProducto[clave]);
}