# Mouse tracker
___

1. En un html nuevo crea una ``<img>`` con este atributo src: ``src="https://media.giphy.com/media/MtQxKzhytFsmQ/giphy.gif"``
2. Vincula un css al html y dale a la img una clase con position: fixed
3. Desde el css, seleccióna el body dale un height: 100vh; esto hace que el alto del body sea el 100% de la pantalla.
4. Usando JavaScript seleccioná el body y agregale un evento "mousemove" que en su callback \(la función que se ejecuta cuando ocurre el evento\) selecciona la imagen y le cambia su propiedad css "top" por el valor de la propiedad .clientY y left por el valor de la propiedad clientX \(en ambos casos se le debe concatenar al valor de x y de y el string "px"\).
5. Descrubre como ocultar el cursor con CSS.
6. Cambia el código para que la imagen te siga sólo si estás apretando el click.