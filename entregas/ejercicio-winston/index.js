/*
Crea un nuevo proyecto de Node

- Instala la dependencia Winston

- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

- Registra el error en un archivo a través de un try...catch
*/

const logger = require('./logger/modulo.js')

const devuelveError = () => 
{
    throw new Error("Esto es un error personalizado.");
}

try
    {
        console.log(devuelveError());
    }

catch(err)
    {
        logger.error(`${err}`);
    }



