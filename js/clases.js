class Persona {
  constructor(nombre, apellido, dni, domicilio, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.domicilio = domicilio;
    this.telefono = telefono;
  }

  mostrarDatos() {
    console.log(`${this.raza} ${this.apellido}`);
  }

  saludar(nombre) {
    console.log(nombre);
  }
}

const persona1 = new Persona(
  "Andres",
  "Perlo",
  "12345678",
  "Las Talitas",
  "381123456"
);

persona1.mostrarDatos();

const persona2 = new Persona(
  "Luis",
  "Lopez",
  "456465466",
  "Las talitas",
  "3814545646"
);

console.log(persona1);
console.log(persona2);

/* Ejercicio del Campus */
/* 
Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
 */

class Cuenta {
  constructor(titular = "Alex", saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  ingresar(cantidad) {
    this.saldo = this.saldo + cantidad;
    console.log(this.saldo);
  }

  extraer(cantidad) {
    let resultado = this.saldo - cantidad;

    if (resultado > 0) {
      this.saldo = resultado;
    } else {
      console.log(
        `no podes retirar: ${cantidad}. tu saldo es de: ${this.saldo}`
      );
    }
  }

  informar() {
    console.log(`Tu cuenta tiene: $${this.saldo}`);
  }
}

const cuenta1 = new Cuenta();
cuenta1.informar();
cuenta1.ingresar(1500);
cuenta1.extraer(1000);
cuenta1.informar();
