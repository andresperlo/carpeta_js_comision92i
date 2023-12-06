class Persona {
  constructor(nombre, apellido, dni, domicilio, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.domicilio = domicilio;
    this.telefono = telefono;
  }

  mostrarDatos() {
    console.log(`${this.nombre} ${this.apellido}`);
  }

  saludar(nombre) {
    console.log(nombre);
  }
}

class Admin extends Persona {
  constructor(nombre, apellido, dni, domicilio, telefono, role) {
    super(nombre, apellido, dni, domicilio, telefono);
    this.role = role;
  }

  mostrarRole() {
    console.log(`El role es: ${this.role}`);
  }
}

const persona1 = new Persona(
  "Andres",
  "Perlo",
  "12345678",
  "Las Talitas",
  "13213133333"
);

const admin1 = new Admin(
  "Luis",
  "Lopez",
  "12345678",
  "Las Talitas",
  "231321313",
  "Admin"
);

console.log(persona1.saludar("Andres"));
console.log(admin1.mostrarDatos());
