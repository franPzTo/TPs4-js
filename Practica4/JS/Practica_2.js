    class Cuenta{
        constructor(titular, saldo){
            this.titular=titular;
            this.saldo=saldo;
        }
        depositar(monto) {
            this.saldo += monto;
            document.write(`<p>Se depositaron $${monto}. Saldo actual: $${this.saldo}</p>`);
            document.write(`<p></p>`);
        }
        retirar(monto) {
            if (monto <= this.saldo) {
                this.saldo -= monto;
                document.write(`<p>Se retiraron $${monto}. Saldo actual: ${this.saldo}</p>`);
            } else {
                document.write(`<p>El retiro de $${monto}, no es posible.</p>`);
                document.write(`<p>Fondos insuficientes. Saldo actual: ${this.saldo}</p>`);
            }
        }
        mostrarInfo() {
            document.write(`<p>Titular: ${this.titular}, Saldo: ${this.saldo}</p>`);
        }
    } 

    const cuenta1 = new Cuenta("Alex", 0);
    // const cuenta1 = new Cuenta(prompt("Nombre del Titular"), 0);

    cuenta1.mostrarInfo();
    cuenta1.depositar(+prompt(`Ingresa el Monto que desea depositar (Solo Numeros):`));
    cuenta1.retirar(200);
    cuenta1.retirar(300);
    cuenta1.retirar(200);
    cuenta1.mostrarInfo();