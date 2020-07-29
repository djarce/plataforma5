/*Escribí una función llamada contarDeA_n que tenga los parámetros contar_de_a y contar_hasta, y escriba en la consola los números desde 1 hasta contar_hasta en intervalos de contar_de_a.

Por ejemplo: si ponemos 2 y 10 como parámetros, la función debería contar de a dos hasta llegar a diez.*/
function contarDeA_n(contar_de_a, contar_hasta) {
  let resultado = 0;
  while (resultado < contar_hasta) {
    console.log((resultado = resultado + contar_de_a));
  }
}
