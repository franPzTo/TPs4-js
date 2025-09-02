class Vehiculo{
    constructor(tipo, marca, color, modelo, amio){
        this.tipo=tipo;
        this.marca=marca;
        this.color=color;
        this.modelo=modelo;
        this.anio=anio;
        this.encendido=false;
    }
    encender(){
        if (this.encendido===false) {
            this.encendido = true;
            document.write(`<p>${this.tipo} encendido.</p>`)
        } else {
            document.write(`<p>${this.tipo}, ya estaba encendido.</p>`)
        }
    }
    agapar(){
        if (this.encendido===true) {
            this.encendido=false;
            document.write(`<p>${this.tipo} apagado.</p>`)
        } else {
            document.write(`<p>${this.tipo}, ya estaba apagado.</p>`)
        }
    }
    info(){
        const estado = this.encendido ? "encendido" : "apagado";
        document.write(`
            <ul>Vehiculo:${this.tipo}
            <li>Tipo: ${this.tipo}</li>
            <li>Marca: ${this.marca}</li>
            <li>Modelo: ${this.modelo}</li>
            <li>Anio: ${this.anio}</li>
            <li>Encendido: ${this.encendido}</li>
            </ul>`)
    }
}

const vehiculo1 = new Vehiculo("Auto", "Negro", "Lamborhgine", "Huracán STO", 2025);
const vehiculo2 = new Vehiculo("Camioneta", "Gris", "Lamborhgine", "Urus", 2024);

vehiculo1.info();
vehiculo1.encender();
vehiculo1.agapar();
vehiculo1.agapar();
vehiculo1.info();

vehiculo2.info();
vehiculo2.encender();
vehiculo2.encender();
vehiculo2.agapar();
vehiculo2.info();