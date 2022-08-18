/*
Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
*/

let listaCompra = ["tomates",'cebollas','pan','leche','huevos'];
console.log(listaCompra);

listaCompra.push('Aceite de Girasol');
console.log(listaCompra);

listaCompra.splice(listaCompra.indexOf('Aceite de Girasol'),(listaCompra.indexOf('Aceite de Girasol') + 1));
console.log(listaCompra);

const peliculas = 
[
    {
        titulo:'Fast and Furious',
        director:'Jonh',
        fecha:new Date('01/30/2001')
    },
    {
        titulo:'Sharknado',
        director:'Dios',
        fecha:new Date('11/03/2009')
    },
    {
        titulo:'Kill Bill 4',
        director:'Tarantino',
        fecha:new Date('09/18/2011')
    }
];
const nuevasPeliculas = peliculas.filter(i => i.fecha> new Date('01/01/2010'));
console.log(nuevasPeliculas);

const directores = peliculas.map(i => i.director);
console.log(directores);

const movies = peliculas.map(i => i.titulo);
console.log(movies);

const PeliculaDirector = directores.concat(movies);
console.log(PeliculaDirector);

const PeliculaDirector2 = [...directores,...movies];
console.log(PeliculaDirector2);
