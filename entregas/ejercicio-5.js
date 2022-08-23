/*
Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos
*/

function isTrue1() {return true;}

const isTrue2 = () => {return true}

console.log(isTrue1());
console.log(isTrue2());

const promesa = new Promise((resolve, reject) => 
{
    if(true) resolve();
    else(reject());
})

promesa
    .then( () => setTimeout(console.log("Hola soy una promesa"),5000))
    .catch( () => console.log('Error'))


function* generarPares()
{
  let id = 0;
  
  while(id <= 10)
  
    yield id += 2;
}
        
let id = generarPares();

console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);

