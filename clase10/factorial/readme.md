
# factorial\(\)
___

Crea una función factorial que tome un número como argumento y devuelva el factorial de ese número. Osea que si hacemos ``factorial(5)`` la función debería hacer 5x4x3x2x1, y devolver el resultado, osea 120. Algo que tenés que tener en cuenta: el factorial de 0 es igual a 1, osea que si el usuario ingresa ``factorial(0)`` el resultado debería ser 1.

Algunos tips:

  - Vas a necesitar hacer una variable para almacenar el resultado.
  - Vas a necesitar hacer un loop para recorrer hasta el número que recibís como input.
  - En cada vuelta del loop vas a tener que actualizar el resultado.
  - Ojo con el caso en que el usuario pone 0, o un número negativo. Vas a tener que hacer algo para verificar eso. Podés utilizar estos ejemplos para ver si tu código funciona.:
     ``factorial(5) //120
       factorial(2) //2
       factorial(10) //3628800
       factorial(0) //1``