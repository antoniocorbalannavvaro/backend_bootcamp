let numero = 10;
let resultado = numero; 

if(numero === 0 || numero === 1) 
    return 1; 

while (numero > 1) 
{ 
    numero--; 
    resultado = resultado * numero; 
}

console.log(resultado);
