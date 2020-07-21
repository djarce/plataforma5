/*let edadJubilatoriaMujer = 60;
let edadMujer = prompt("Cuántos años tienes?");

if (parseInt(edadMujer) >= edadJubilatoriaMujer) {
  alert("Puedes iniciar los trámites jubilatorios.");
} else {
  alert("Aún no tienes edad suficiente para jubilarte.");
}

Acá arranca la segunda parte.*/
let edadJubilatoriaMujer = 60;
let edadJubilatoriaHombre = 65;
let hombre = "H";
let mujer = "M";
let sexo = prompt("Si eres hombre ingresa H, si eres mujer ingresa M");
let edad = parseInt(prompt("Cuántos años tienes?"));
sexo = sexo.toUpperCase();

if (sexo === mujer && edad >= edadJubilatoriaMujer) {
  alert("Puedes iniciar los trámites jubilatorios.");
} else if (sexo === mujer && edad < edadJubilatoriaMujer) {
  alert("Aún no tienes edad suficiente para jubilarte.");
} else if (sexo === hombre && edad >= edadJubilatoriaHombre) {
  alert("Puedes iniciar los trámites jubilatorios.");
} else if (sexo === hombre && edad < edadJubilatoriaHombre) {
  alert("Aún no tienes edad suficiente para jubilarte.");
} else {
  alert("Debes ingresar H para hombre o M para mujer.");
}
console.log("Edad:" + edad);
console.log("Sexo:" + sexo);
