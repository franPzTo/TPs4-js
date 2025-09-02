class Producto {
    constructor(nombre, precio) {
        this.codigo = crypto.randomUUID();
        this.nombre = nombre;
        this.precio = precio;
    }
    impDatos() {
        document.write(`<h3>Nombre: ${this.nombre}</h3>`);
        document.write(`<p>Precio: $${this.precio}</p>`);
        document.write(`<p>Código: ${this.codigo}</p>`);
    }
}

let prod1 = new Producto("Notebook HP", 1200000);
let prod2 = new Producto("Coca Cola", 1500);
let prod3 = new Producto("Mouse Logitech", 7000);
let prod4 = new Producto("Monitor S1 Tablet IPS", 230000);
let prod5 = new Producto("Meclado Semitecnico Retroiluminado", 8000);

const productos = [prod1, prod2, prod3, prod4, prod5];
productos.forEach(i => i.impDatos());