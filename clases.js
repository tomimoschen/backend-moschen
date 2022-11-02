class Usuario {
  constructor(nombre, apellido, libros =[], mascotas = []){
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  getFullName(){
    return (this.nombre) + (this.apellido);
  }
  addMascota(name){
    this.mascotas.push(name);
    void this.mascotas
}
countPets(){
    return this.mascotas.length
}
addBook(nombre, autor){
    this.libros.push({nombre : nombre, autor : autor});
    void this.libros
}
getBookNames(){
    let bookNames = [];
    this.libros.forEach(book => bookNames.push(book.nombre));
    return bookNames
}
}

const usuario = new Usuario("Tomas", "Moschen") 
console.warn('Nuevo usuario creado')
console.log(usuario)
usuario.addMascota('Perro')
usuario.addMascota('Gato')
console.warn('Se agregaron mascotas')
console.log(usuario)
console.log(`Hay ${usuario.countPets()} mascotas`)
usuario.addBook('El señor de las moscas', 'William Golding')
usuario.addBook('Fundacion', 'Isaac Asimov')
console.warn('Se agregaron libros nuevos')
console.log(usuario)
console.log(`Libros agregados : ${usuario.getBookNames()}`)