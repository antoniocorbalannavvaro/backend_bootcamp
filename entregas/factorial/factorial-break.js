let numero = 10;
let resultado = numero; 


while(numero > 1) 
{   
    if(numero < 0){break}
    numero--; 
    resultado = resultado * numero; 
}

console.log(resultado);
