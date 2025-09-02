class Persona{
    constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo.toUpperCase();
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
        this.DNI = this.generaDNI();
    }

    generaDNI() {
        return Math.floor(10000000 + Math.random() * 90000000);
    }

    mostrarGeneracion() {
        let generacion = "";
        let rasgo = "";
        if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            generacion = "Generación Z";
            rasgo = "Irreverencia";
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
            generacion = "Generación Y (Millennials)";
            rasgo = "Frustración";
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
            generacion = "Generación X";
            rasgo = "Obsesión por el éxito";
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
            generacion = "Baby Boom";
            rasgo = "Ambición";
        } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
            generacion = "Silent Generation (Niños de la posguerra)";
            rasgo = "Austeridad";
        } else {
        generacion = "Fuera del rango definido";
        rasgo = "Desconocido";
        }
    document.write(`<p>${this.nombre} pertenece a la ${generacion}, cuyo rasgo característico es: ${rasgo}.</p>`)
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            document.write(`<p>${this.nombre} es mayor de edad.</p>`);
        } else {
        document.write(`<p>${this.nombre} es menor de edad.</p>`);
        }
    }

    mostrarDatos() {
        document.write(`
            <h3>Nombre: ${this.nombre}</h3>
            <DNI:>Edad: ${this.edad} - DNI: ${this.DNI} - Sexo: ${this.sexo}</p>
            <Año>Peso: ${this.peso} kg - Altura: ${this.altura} m - Año de nacimiento: ${this.anioNacimiento}</p>
        `);
    }
}

let persona6 = new Persona("Santiago", 16, "H", 70, 1.50, 2009);
let persona1 = new Persona("Juan", 26, "H", 68, 1.89, 1999);
let persona2 = new Persona("Marcelo", 40, "H", 74, 1.85, 1985);
let persona3 = new Persona("Josefina", 55, "f", 54, 1.65, 1970);
let persona4 = new Persona("Martin", 75, "H", 56, 1.70, 1950);
let persona5 = new Persona("Lucrecia", 85, "f", 52, 1.58, 1940);

persona1.mostrarDatos();
persona1.esMayorDeEdad();
persona1.mostrarGeneracion();
persona2.mostrarDatos();
persona2.esMayorDeEdad();
persona2.mostrarGeneracion();
persona3.mostrarDatos();
persona3.esMayorDeEdad();
persona3.mostrarGeneracion();
persona4.mostrarDatos();
persona4.esMayorDeEdad();
persona4.mostrarGeneracion();
persona5.mostrarDatos();
persona5.esMayorDeEdad();
persona5.mostrarGeneracion();
persona6.mostrarDatos();
persona6.esMayorDeEdad();
persona6.mostrarGeneracion();