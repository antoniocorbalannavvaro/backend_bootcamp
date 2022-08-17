//Crea un archivo JS que contenga las siguientes líneas

//- Una variable que contenga tu altura en centímetros (entero)
let alturaCm = 177;

//- Una variable que contenga tu altura en metros (número de coma flotante)
let alturaMt = 1.77;

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesoKg = 71.80;

//- Una variable que contenga tu altura en metros redondeada hacia arriba
let roundMt = Math.round(alturaMt,2)
console.log(roundMt);

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let roundKg = Math.floor(pesoKg,2);
console.log(roundKg);

//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let maxJs = Number.MAX_VALUE;

let check = maxJs == (maxJs + 1);

console.log(check)








