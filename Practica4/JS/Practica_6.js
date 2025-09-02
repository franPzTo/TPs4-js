class Libro {
    constructor(ISBN, titulo, autor, numeroPaginas) {
        this._ISBN = ISBN;
        this._titulo = titulo;
        this._autor = autor;
        this._numeroPaginas = numeroPaginas;
    }

    get ISBN() {
        return this._ISBN;
    }

    get titulo() {
        return this._titulo;
    }

    get autor() {
        return this._autor;
    }

    get numeroPaginas() {
        return this._numeroPaginas;
    }

    set ISBN(valor) {
        this._ISBN = valor;
    }

    set titulo(valor) {
        this._titulo = valor;
    }

    set autor(valor) {
        this._autor = valor;
    }

    set numeroPaginas(valor) {
        this._numeroPaginas = valor;
    }

    mostrarLibro() {
        document.write(`<p>El libro "${this._titulo}" con ISBN ${this._ISBN} creado por el autor ${this._autor} tiene ${this._numeroPaginas} páginas.</p>`);
    }
}

let libro1 = new Libro("978-84-376-0494-7", "Don Quijote de la Mancha", "Miguel de Cervantes", 863);
let libro2 = new Libro("978-84-667-1433-6", "Cien años de soledad", "Gabriel García Márquez", 496);

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.numeroPaginas > libro2.numeroPaginas) {
    document.write(`<p>El libro "${libro1.titulo}" tiene más páginas.</p>`);
} else if (libro1.numeroPaginas < libro2.numeroPaginas) {
    document.write(`<p>El libro "${libro2.titulo}" tiene más páginas.</p>`);
} else {
    document.write(`<p>Ambos libros tienen la misma cantidad de páginas.</p>`);
}