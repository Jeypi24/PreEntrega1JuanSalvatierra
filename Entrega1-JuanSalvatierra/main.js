//ejercicio 1

function ingresoUser(user, pass) {
    this.user = user;
    this.pass = pass;
}

const usuario = new ingresoUser(prompt("ingresar usuario"), parseInt(prompt("Ingresar contraseña")));

while(usuario.user !== "user" && usuario.pass !== 1234) {
    console.log("usuario incorrecto")
    usuario.user = prompt("Ingresar usuario");
    usuario.pass = prompt("ingrese contraseña");

}

if (usuario.user == "user" && usuario.pass == 1234) {
    console.log("bienvenido");
}   

// lista productos
let producto1= {
    nombre: "Chanel",
    precio: 200
}

let producto2= {
    nombre: "Armani",
    precio: 150
}

let producto3= {
    nombre: "Louis Vuitton",
    precio: 300
}


// funcion compra
function compra() {

    alert(`Lista de perfumes: \n1: ${producto1.nombre} precio: ${producto1.precio} \n2: ${producto2.nombre} precio: ${producto2.precio} \n3: ${producto3.nombre} precio: ${producto3.precio}`);

    let promptProducto = prompt("Ingrese el número del producto que desea comprar (1, 2 o 3)");
    let promptCantidad = prompt("Ingrese la cantidad que desea comprar");
    
    if (promptProducto === "1") {
        alert("El perfume es: " + producto1.nombre);
        let total = (producto1.precio * promptCantidad);
        alert("El total es: " + total)
    } else if (promptProducto === "2") {
        alert("El perfume es: " + producto2.nombre);
        let total = (producto2.precio * promptCantidad); 
        alert("El total es: " + total);
    } else if (promptProducto === "3") {
        alert("El perfume es: " + producto3.nombre);
        let total = (producto3.precio * promptCantidad);
        alert("El total es: " + total);
    } else {
        alert("No se ha seleccionado un producto válido");
    }
}

// bucle deseas seguir comprando?
while(true) {
    compra();
    if(confirm("¿Desea seguir comprando?")) {
        compra();
    } else {
        break;
    }
}
