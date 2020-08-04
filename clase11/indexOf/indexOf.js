let amigos = ["Juan", "Pepe", "Jorge", "Francisco", "Juan"];
/*Transformá tu código en una función que pueda tomar cualquier nombre por parámetro y 
chequear si tenés ese amigo o no (repitiendo las mismas frases que en el punto anterior para cada caso).*/
function tengoAmigo(nombre) {
  //Escribí un código que chequee si tenés algun amigo llamado Roberto dentro de tu arreglo de amigos.
  let existe = amigos.indexOf(nombre);
  /*Si tenés un amigo llamado Roberto, tenés que ejecutar un console.log que diga
"ah si! me había olvidado de beto!"*/
  if (existe >= 0) {
    console.log("ah si! me había olvidado de " + nombre + "!");
  } else {
    /*Si no tenés un amigo llamado Roberto, tu código tiene que ejecutar un console.log que diga 
"… tengo que conseguirme algún amigo Roberto!"*/
    console.log("… tengo que conseguirme algún amigo " + nombre + "!");
  }
}
