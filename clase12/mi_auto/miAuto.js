//Crea una variable llamada mi_auto y asignale un objeto vacio.
let mi_auto = {};
//Asignale a mi_auto una propiedad marca, que debería contener un string
mi_auto.marca = "Ford";
//Agrega una propiedad año que tenga un entero
mi_auto.año = 2015;
//Agrega una propiedad nuevo que contenga un booleano
mi_auto.nuevo = false;
//Crea una variable llamada property_key y asígnale el string "modelo"
let property_key = "modelo";
//Usa la variable property_key , no el string "modelo", para agregar la propiedad modelo al objeto mi_auto.
mi_auto[property_key] = "Fiesta";
//Crea una variable llamada another_property_key y dale el valor "precio".
let another_property_key = "precio";
//Usa la variable another_property_key, no la string "precio", para cuantificar el valor de tu auto.
mi_auto[another_property_key] = 450000;
//Qué devuelve mi_auto[property_key] ?
console.log(mi_auto[property_key]);
//Qué devuelve mi_auto["modelo"] ?
console.log(mi_auto["modelo"]);
//Asigna la string "color"a la variable next_property
let next_property = "color";
//Usa la variable next_property para añadir el color a tu auto
mi_auto[next_property] = "azul";
//Qué devuelve mi_auto[next_property]?
console.log(mi_auto[next_property]);
//Qué devuelve mi_auto["color"]?
console.log(mi_auto["color"]);
//Usa for in para iterar sobre el objeto mi_auto y muestra en la consola el key y el value de cada propiedad.
for (property in mi_auto) {
  console.log(property + ":" + mi_auto[property]);
}
