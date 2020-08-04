/*Instanciá un nuevo arreglo y guardalo en la variable listaDeSuper Usa la notación con corchetes y
 agregá los productos que tienes que comprar. Ej listaDeSuper[0]="sal"*/
let listaDeSuper = [];
listaDeSuper[0] = "salsa de soja";
listaDeSuper[1] = "cacao en polvo";
listaDeSuper[2] = "queso untable";
listaDeSuper[3] = "jabón líquido para lavar la ropa";
//Accedé al primer elemento de tu lista usando la notación de corchetes.
console.log(listaDeSuper[0]);
/*Crea una variable llamada ultimoElemento y asignale un número que represente el índice del
    último elemento de tu lista de super. (length - 1 ??)*/
let ultimoElemento = 3;
//Accedé a ese último elemento usando la variable ultimoElemento
console.log(listaDeSuper[ultimoElemento]);

//Usa .push() y agrega dos nuevos productos a tu lista.
listaDeSuper.push("banana", "mandarina");
//Usa .unshift() y agrega dos productos al principio de tu lista.
listaDeSuper.unshift("sal", "azúcar");
//Qué tan largo es el arreglo en este punto?
console.log(listaDeSuper.length);
//Usa .pop() y sacá un producto y guardalo en una variable que se llame noHabia
let noHabia = listaDeSuper.pop();
//Usa .shift() y sacá un objetivo y guárdalo en otra variable que se llame comprado
let comprado = listaDeSuper.shift();
//Qué tan largo es el arreglo ahora?
console.log(listaDeSuper.length);

//Acá empieza el nuevo ejercicio. Usa un For Loop y muestra cada ítem de listaDeSuper en la consola
/*Refactoreá tu código de manera que el for loop viva adentro de una función que se llame logItems
que tome un arreglo como input (argumento) e imprima sus elementos en la consola. */

function logItems(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
  }
}

/*Invoca logItems dos veces, pasando la listaDeSuper la primera vez 
y otro arreglo que quieras la segunda vez (puedes crear uno nuevo).*/
let colores = ["Rojo", "Azul", "Amarillo"];
logItems(listaDeSuper);
logItems(colores);

//Refactoreá el código de logItems para que use .forEach() en vez de un for loop.
listaDeSuper.forEach(function logItems(arreglo) {
  console.log(arreglo);
});
