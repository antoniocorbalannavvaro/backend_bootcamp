/*
Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/

let today = Date()
console.log(today);

let birthday = new Date('01/25/1996');
console.log(birthday)

let late = today > birthday;
console.log(late);

let day = String(birthday.getDate())
console.log(day);

let month = String(birthday.getMonth() + 1);
console.log(month);

let year = String(birthday.getFullYear());
console.log(year);


