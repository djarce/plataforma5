# Weather Channel
___

Vamos a trabajar en el último Proyecto Integrador que posee este curso, para eso vamos a interactuar con la API del clima que pudimos observar previamente en la sección "AJAX" de esta clase.

Para este proyecto trabajaras solamente la funcionalidad o el comportamiento de la página \(solo el JavaScript\), por lo que vas a utilizar [este template](https://weather-channel.netlify.app/) para elaborar el proyecto.

El objetivo del sitio es mostrar diferentes condiciones meteorológicas dependiendiendo de la ciudad ingresada.

Las condiciones meteorológicas que debemos mostrar son:

   - Cuidad.
   - Temperatura actual.
   - Un ícono que nos muestra como está el clima en la ciudad elegida.
   - Una descrición breve del clima en dicha ciudad.

# Pasos
___

1. Vinculá un archivo JavaScript a tu documento HTML y dentro del .js creá una función llamada "cargarCiudad". Dentro de la función hacé un pedido AJAX ``$.getJSON`` que traiga la información de la ciudad de Buenos Aires y la muestre en la consola.
2. Obtené la referencia al botón y agregale un event listener para que cuando hagamos click se dispare un pedido AJAX con la información de la ciudad elegida. El valor de la ciudad ingresada en el input debemos guardarlo en una variable llamada "ciudad" y esta variable debemos concatenarla con la URL de la API.
3. Agrega la siguiente línea de código dentro de la función:
   ``document.querySelector(".container").style.visibility = "visible"``
El CSS del proyecto tiene seteado por defecto que no se muestre el div con la ``class="container"``. Con la línea de arriba hacemos que el div en el cual se mostraran las condiones climaticas pase a ser visible una vez que le hayamos dado click al botón.
4. Vamos a empezar mostrando en pantalla el nombre de la ciudad, que coincidirá obviamente con lo ingresado en el input. Para eso vamos a asignarle al span con el ``id="ciudad"`` el valor que posee la key llamada name, y para esto utilizaremos la propiedad textContent.
5. Luego, siguiendo el mismo ejemplo que con la ciudad, vamos a tomar la temperatura actual.
**Ayuda**: para obtener el simbolo de Celsius al lado de la temperatura deberas concatenarle al código JavaScript generado, el siguiente string: ``<sup>°C</sup>``.
6. Agregá la imagen que se corresponde a los datos recibidos. Para eso tenés que concatenar las distintas partes de la URL que indican la ubicación de la imagen, con el nombre de la imagen.
7. Obtené la descripción del clima actual.

[El resultado final se puede ver acá.](https://brave-cray-5a6088.netlify.app/)