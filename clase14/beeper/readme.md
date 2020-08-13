# Ejercicio: Beeper
___

1. Crea un HTML que tenga un botón \(podés usar un tag button\) que diga "BEEP".
2. Crea un archivo .js y vinculalo a tu html usando un tag script, ahí vas a escribir tu código JavaScript.
3. Seleccioná el botón \(document.querySelector…\) y agregale un event listener para que:
      - cada vez que un usuario haga click en el botón se ejecute una función \(callback\) que seleccione el body y le agregue un párrafo <p> al final que diga 'BEEP'.
      - **Acá vas a tener que poner .insertAdjacentHTML\("beforeend", "LO QUE QUIERAS AGREGAR"\) , porque innerHTML no funciona bien con eventos.**
4. Crea un archivo .css, vincúlalo a tu html y crea una clase que se llame .color . Dentro ponele un background color del color que quieras.
5. Vuelve a la función callback del evento y agrégale una línea que haga un ``.classList.toggle("color")`` sobre el body, cambiándole el color con cada click.      
6. Ahora define la función del callback afuera del evento, guardándola en una variable que se llame seEjecutaEnEvento. reemplaza la función callback por la variable seEjecutaEnEvento \(que contiene la misma función\) y asegurate de que el programa funcione igual.