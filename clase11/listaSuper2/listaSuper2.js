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

//Acá arranca el nuevo ejercicio.  Usa .push() y agrega dos nuevos productos a tu lista.
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
