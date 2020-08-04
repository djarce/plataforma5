# To Do List
___

Haremos un programa que nos organice en un arreglo las tareas del usuario. Un prompt nos preguntará que queremos hacer. Si ponemos "new", nos permitirá agregar una tarea nueva. Si ponemos "list" los enlistará en la consola. Si ponemos "delete", nos permitirá eliminar la tarea que queramos. Si ponemos "quit" cerrará la app.

1. En un nuevo documento en el tag script inicia un nuevo arreglo tareas.
2. Preguntale al usuario que quiere hacer, y guardalo en la variable input.
3. Si responde "list", vamos a mostrar el arreglo de tareas en la consola.
4. Si input es "new" devolverá un nuevo prompt, que preguntará que quiere agregar a la lista.
5. La respuesta de ese prompt se agregará al arreglo tareas.
6. Ahora vamos a agregar un loop a nuestro código en el cual mientras input no sea igual a "quit", seguiremos preguntando por comandos, y ejecutando el código que escribimos mas arriba.
7. Una vez que termina el loop, debería aparecer un mensaje en la consola que avise que el app se cerró.
8. Utilizando un forEach o un For Loop, refactorea tu comando "list", para que no muestre el arreglo entero en pantalla, sino que itere sobre cada tarea, y lo imprima con el número de índice por delante, podés poner unos asteriscos arriba y abajo de la lista para darle mas estilo. Ejemplo de la impresión en la consola:
   ``**********
     0: Ir al Super
     1: Comprar Un Perro
     2: Darle de Comer al Perro
     **********``
9. Agrega el comando "delete", el cual le pases un número y elimine el elemento del arreglo en ese número de índice(splice). Una vez removido mostrá en consola el elemento removido con un mensaje.
10. **Refactoriemos:** No vamos a cambiar la funcionalidad de nuestra app, pero si como está ordenada, haciendo un código más prolijo. Simplemente escribí la acción de cada comando en una función aparte, y solo ejecutá esa función, por ejemplo:
     ``if(input === "list"){
       listTareas()
       }`` 