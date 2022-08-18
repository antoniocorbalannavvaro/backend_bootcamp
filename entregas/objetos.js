/*
Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/

const objeto = 
{
    nombre:'Antonio',
    apellido:'Corbalan',
    edad: 26,
    altura:1.77,
    eresDesarrollador:true
}

let edad = objeto.edad;
console.log(edad);

const amigos = 
[
    {
        nombre:'Pepe',
        apellido:'Sanchez',
        edad: 13,
        altura:1.97,
        eresDesarrollador:false
    },
    
    {
        nombre:'Jose',
        apellido:'Martinez',
        edad: 50,
        altura:1.47,
        eresDesarrollador:true
    }
];

console.log(amigos);

const todos = [objeto, ...amigos];
console.log(todos);

const ordenados = todos.sort((a,b)=> b.edad - a.edad);
console.log(ordenados);

