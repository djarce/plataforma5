/*Escribe una función biggest_smallest que tome como entrada un arreglo de números, 
y usando .forEach(),que devuelva un arreglo que contenga el menor número en la posición cero 
y el mayor número en la posición 1.*/
function biggest_smallest(numArr) {
  let smallBig = [];
  let small = numArr[0];
  let big = numArr[0];
  numArr.forEach((element) => {
    if (element <= small) {
      small = element;
    } else if (element > big) {
      big = element;
    }
  });
  smallBig[0] = small;
  smallBig[1] = big;
  return smallBig;
}
