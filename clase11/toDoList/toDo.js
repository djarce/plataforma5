/*Haremos un programa que nos organice en un arreglo las tareas del usuario. 
  Un prompt nos preguntará que queremos hacer. Si ponemos "new", nos permitirá agregar 
  una tarea nueva. Si ponemos "list" los enlistará en la consola. Si ponemos "delete", 
  nos permitirá eliminar la tarea que queramos. Si ponemos "quit" cerrará la app.*/
//En un nuevo documento en el tag script inicia un nuevo arreglo tareas.
let tareas = [];
let input;
/*Ahora vamos a agregar un loop a nuestro código en el cual mientras input no sea igual a 
"quit", seguiremos preguntando por comandos, y ejecutando el código que escribimos mas arriba.*/
while (input !== "quit") {
  //Preguntale al usuario que quiere hacer, y guardalo en la variable input.
  input = prompt(
    "Qué desea hacer?\n Para agregar una tarea ingrese 'new'.\n Para ver las tareas ingrese 'list'.\n Para eliminar una tarea ingrese 'delete'.\n Para salir ingrese 'quit'."
  ).toLowerCase();
  //Si responde "list", vamos a mostrar el arreglo de tareas en la consola.
  if (input === "list") {
    listTareas(tareas);
  }
  //Si input es "new" devolverá un nuevo prompt, que preguntará que quiere agregar a la lista.
  else if (input === "new") {
    newTareas(tareas);
  } else if (input === "delete") {
    deleteTareas(tareas);
  }
}
/*Una vez que termina el loop, debería aparecer un mensaje en la consola que avise que el 
app se cerró.*/
console.log("La app se cerró exitosamente.");
//Refactoriemos:No vamos a cambiar la funcionalidad de nuestra app, pero si en como está ordenada, haciendo un código más prolijo. Simplemente escribí la acción de cada comando en una función aparte, y solo ejecutá esa función.

function listTareas(tareas) {
  /*Utilizando un forEach o un For Loop, refactorea tu comando "list", para que no muestre 
 el arreglo entero en pantalla, sino que itere sobre cada tarea, y lo imprima con el número 
 de índice por delante, podés poner unos asteriscos arriba y abajo de la lista para darle mas 
 estilo. */
  console.log("**********");
  tareas.forEach((element) => {
    let posicion = tareas.indexOf(element);
    console.log(posicion + ": " + element);
  });
  console.log("**********");
}

function newTareas(tareas) {
  let nuevaTarea = prompt("Qué quiere agregar?");
  //La respuesta de ese prompt se agregará al arreglo tareas.
  tareas.push(nuevaTarea);
}

function deleteTareas(tareas) {
  /*Agrega el comando "delete", el cual le pases un número y elimine el elemento del arreglo 
  en ese número de índice(splice). Una vez removido mostrá en consola el elemento removido 
  con un mensaje.*/
  let aEliminar = prompt(
    "Estas son las tareas disponibles:" +
      tareas +
      ". Ingrese la que desea eliminar:"
  );
  let ubicacion = tareas.indexOf(aEliminar);
  let eliminada = tareas.splice(ubicacion, 1);
  console.log("La tarea " + eliminada + " ha sido eliminada.");
}
