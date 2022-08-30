/*
Crea un nuevo fichero JS que contenga las siguientes líneas

- Una clase llamada "Estudiante" que tenga:

- Una variable llamada nombre

- Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

- Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

- Crea una nueva instancia de "Estudiante"

- Haz la llamada al método obtenDatos
*/

class Estudiante
{   
    constructor(nombre,asignaturas = new Array('Javascript', 'HTML', 'CSS'))
    {
        this.nombre = nombre
        this.asignaturas = asignaturas
    }
    
    obtenDatos()
    {
        const obj = {nombre:this.nombre, asignaturas:this.asignaturas}
        
        return obj
    }
};

let juan = new Estudiante('Juan');

let datosJuan = juan.obtenDatos();

console.log(datosJuan);






