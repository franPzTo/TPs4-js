class Agenda {
    constructor(tamano = 10) {
        this.tamano = tamano;
        this.contactos = [];
    }

    aniadirContacto(contacto) {
        if (this.agendaLlena()) {
            alert("La agenda está llena, no se puede añadir más contactos.");
            return;
        }
        if (this.existeContacto(contacto)) {
            alert(`El contacto con nombre "${contacto.nombre}" ya existe.`);
            return;
        }
        this.contactos.push(contacto);
        alert(`Contacto "${contacto.nombre}" añadido correctamente.`);
    }

    existeContacto(contacto) {
        return this.contactos.some(c => c.nombre.toLowerCase() === contacto.nombre.toLowerCase());
    }

    listarContactos() {
        if (this.contactos.length === 0) {
            alert("La agenda está vacía.");
        } else {
            let lista = "Contactos en la agenda:";
            this.contactos.forEach(c => { lista +=  `${c.nombre}: ${c.telefono}\n`; });
            alert(lista);
            console.log(lista);
        }
    }

    buscarContacto(nombre) {
        let contacto = this.contactos.find(c => c.nombre.toLowerCase() === nombre.toLowerCase());
        if (contacto) {
            alert(`El teléfono de ${contacto.nombre} es: ${contacto.telefono}`);
        } else {
            alert(`No se encontró un contacto con el nombre "${nombre}"`);
        }
    }

    eliminarContacto(nombre) {
        let index = this.contactos.findIndex(c => c.nombre.toLowerCase() === nombre.toLowerCase());
        if (index !== -1) {
            this.contactos.splice(index, 1);
            alert(`Contacto "${nombre}" eliminado correctamente.`);
        } else {
            alert(`No se encontró un contacto con el nombre "${nombre}".`);
        }
    }

    agendaLlena() {
        return this.contactos.length >= this.tamano;
    }

    huecosLibres() {
        return this.tamano - this.contactos.length;
    }
}

class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

function menu() {
    let agenda = new Agenda(); // agenda de 10 por defecto
    let opcion;

    do{
        opcion = prompt(
        "Menú Agenda Telefónica\n" +
        "1. Añadir contacto\n" +
        "2. Listar contactos\n" +
        "3. Buscar contacto\n" +
        "4. Eliminar contacto\n" +
        "5. Ver si agenda está llena\n" +
        "6. Ver huecos libres\n" +
        "0. Salir\n" +
        "Elige una opción:"
        );

        switch(opcion) {
            case "1":
                let nombre = prompt("Introduce el nombre del contacto:");
                let telefono = prompt("Introduce el teléfono del contacto:");
                let nuevoContacto = new Contacto(nombre, telefono);
                agenda.aniadirContacto(nuevoContacto);
                break;

            case "2":
                agenda.listarContactos();
                break;

            case "3":
                let buscarNombre = prompt("Introduce el nombre del contacto a buscar:");
                agenda.buscarContacto(buscarNombre);
                break;

            case "4":
                let eliminarNombre = prompt("Introduce el nombre del contacto a eliminar:");
                agenda.eliminarContacto(eliminarNombre);
                break;

            case "5":
                if (agenda.agendaLlena()) {
                    alert("La agenda está llena.");
                } else {
                    alert("La agenda aún tiene espacio.");
                }
                break;

            case "6":
                alert(`Quedan ${agenda.huecosLibres()} huecos libres en la agenda.`);
                break;

            case "0":
                alert("Saliendo de la agenda. ¡Hasta luego!");
                break;

            default:
                alert("Opción no válida, intenta de nuevo.");
            }
        } while (opcion !== "0");
}

menu();