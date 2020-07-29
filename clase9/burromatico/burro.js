//Preguntale al usuario si "ya merito llegamos?"
let llegamos = prompt("ya merito llegamos?").toLowerCase();
/*Hacé que siga preguntando hasta que el usuario responda "si". Si llegase a responder "Si" o "SI",
 también debería cortar. (Investiga como funciona el metodo .toLowerCase())*/
while (!(llegamos === "si")) {
  llegamos = prompt("ya merito llegamos?").toLowerCase();
}
//Una vez que responde si crea una alerta que diga, "Bienvenid@ a Muy Muy Lejano!"
if (llegamos === "si") {
  alert("Bienvenid@ a Muy Muy Lejano!");
}
