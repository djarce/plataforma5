let poemaDesordenado =
  "roses red are bacon crispy i bacon love and is blue violets are";
//Usa .split(' ') en poemaDesordenado y guárdalo en un arreglo arregloDesordenado
let arregloDesordenado = poemaDesordenado.split(" ");
//Instancia un nuevo arreglo arregloOrdenado
let arregloOrdenado = [];
/*Mientras que el largo de arregloDesordenado sea mayor que 0, saca el primero y el último 
elemento y guardalo en arregloOrdenado.Te conviene usar un for loop o un while? 
Piensa en como sería la condicional*/
let largoArregloDesordenado = arregloDesordenado.length;
while (largoArregloDesordenado > 0) {
  arregloOrdenado.push([arregloDesordenado.shift()]);
  largoArregloDesordenado -= 2;
  if (largoArregloDesordenado > 0) {
    arregloOrdenado.push([arregloDesordenado.pop()]);
  }
}
/*Crea la variable poemaOrdenado y dale el valor de un string utilizando arregloOrdenado 
y el método .join(' ').*/
let poemaOrdenado = arregloOrdenado.join(" ");
