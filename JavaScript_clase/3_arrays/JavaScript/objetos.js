//
// Objetos - JSON - Array asociativo
//
// Valores asociados a una clave concreta
//

const producto = {
    nombre: 'iPhone 15 Pro Max',
    precio: 1289.99,
    stock: 100,
    disponible: true
}

console.log(producto)


// Acceso a los valores
console.log(producto['precio'])
console.log(producto.nombre)

// Modificar valores
producto.precio = 1150
producto.codigo = 'AFFA560'

console.log(producto.precio)

console.log(producto);

// For in
for (let clave in producto) {
    console.log(clave, producto[clave]);

}

// 