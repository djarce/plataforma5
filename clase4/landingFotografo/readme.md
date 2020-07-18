# Creando la landing page para un fotógrafo
___
Un fotógrafo nos pidió que le hiciéramos una página para mostrar sus fotos, así que vamos a hacer algo minimalista y que se vea bien con todo lo que aprendimos hasta ahora.

1. Creá un html y un css nuevos y vinculalos.
2. Dentro del body del html creá un div con ``id="container"``, seleccionalo desde css, dale un width del 80% y un margin 0 auto para centrarlo.
3. Ese va a ser el contenedor donde vamos a poner todo. Dentro del container, creá nueve imágenes con tags .

   **Tip:** buscá imágenes en sitios como [pexels.com](https://pexels.com) o [unsplash.com](https://unsplash.com), que tienen miles de imágenes de alta calidad y libres de derechos, osea que tu sitio queda pro sin tener que pagar nada.

   **Aclaración:** el tamaño en pixeles que poseen las imagenes tiene que ser medianamente similar para que queden similares en tamaño.
4. En tu css, selecciona las imágenes y dales un width de 30%.
5. Para que se separen un poco, dales un margin de 1.4%.
6. Si querés cambiar el margin, andá al inspector de chrome, seleccioná una imagen, y ahí mismo cambiá el valor de la propiedad margin para ir viendo como queda con diferentes valores \(los cambios son temporales y se pierden si recargás la página\). Cuando encuentres el valor que más te gusta modificalo en el css.   
7. ¿Sabés que le falta a tu página? Un título. Poné un p al principio de la página, dentro del container, arriba de las imágenes y en él escribí tu nombre, o el del fotógrafo que te encargó el sitio.
8. Hmm… se ve medio flojo. Vamos a darle un poco de estilo: en el css seleccioná el párrafo y dale un margin left igual al de las imágenes, asi están alineados y agrandale el font-size a 40px.
9. Vamos a ponerle una tipografía con más estilo. Andá a Google Fonts, elegí una tipografía, incluila con el link tag dentro del head del html, y cambiale la tipografía al párrafo desde el css por la que acabás de traer.
10. Se va a ver más profesional si ponemos todo el texto en mayúscula: buscá una forma de poner todo el texto del párrafo en mayúscula desde el css. ¡No lo cambies a mano en el HTML!
11. ¡Va quedando buena! Vamos a agregarle un subrayado al párrafo: dale un border-bottom al párrafo de 2px color rojo.
12. Separá un poco el texto del borde de abajo usando el padding \(ojo, sólo se tiene que modificar el espacio entre el texto y la línea, no uses la propiedad "padding" sola porque eso afecta los 4 costados\).
13. Por último, la línea roja es demasiado larga. Dale un width de 50% al párrafo y desde el inspector de chrome andá modificándolo hasta que la línea llegue sólo al ancho del texto. Guardá ese valor de width en el css y ¡listo! Terminaste el encargo :D
14. BONUS TRACK: hacé que las imágenes sean links que te lleven a otras páginas. Por ejemplo clickear una imagen puede llevar a otra página creada por vos donde esté la imagen en tamaño original.
15. Agregale un link de contacto con la información del fotógrafo. Podés hacer que redirija a otra página con toda la información o que sea simplemente un tag ``<a>`` que use mailto:...