class Rectangulo{
    constructor(alto, ancho){
        this.alto=alto;
        this.ancho=ancho;
    }
    setAlto(nuevoAlto){
        this.alto=nuevoAlto;
    }
    setAncho(nuevoAncho){
        this.ancho=nuevoAncho;
    }
    propRect(){
        document.write(`<p>El Rectangulo tiene:</p>`)
        document.write(`<p>Alto: ${this.alto}, Ancho: ${this.ancho}</p>`)
    }
    calArea(){
        return this.alto*this.ancho
    }
    calPerm(){
        return 2 *(this.alto+this.ancho)
    }
}

let rect1 = new Rectangulo(+prompt("Alto"),+prompt("Ancho"));

rect1.propRect();
document.write(`<p>Perimetro: ${rect1.calPerm()}.</p>`)
document.write(`<p>Area: ${rect1.calArea()}.</p>`)
document.write(`<p>Nuevos valores</p>`)
rect1.setAlto(+prompt("<p>Nuevo valor de Alto</p>"))
rect1.setAncho(+prompt("<p>Nuevo valor de Ancho</p>"))
rect1.propRect();
document.write(`<p>Perimetro: ${rect1.calPerm()}</p>`)
document.write(`<p>Area: ${rect1.calArea()}</p>`)