# Agregando Bootstrap a nuestro sitio
___

1. Creá un HTML nuevo que tenga un elemento h1 que diga "Bienvenido a Bootstrap" y guardalo en una carpeta nueva.
2. Seguí los pasos en ["Bootstrap CDN"](https://getbootstrap.com/docs/4.4/getting-started/download/#bootstrapcdn) para agregar Bootstrap de manera remota.
3. Guardá los cambios y recargá la página. Si cambió la tipografía ya tenés Bootstrap funcionando :\) \(entre otras cosas, Bootstrap te da un estilo de tipografía por default nuevo\).
4. En el HTML que creaste agregá un tag ``<button>`` que diga "Button" entre su opening y closing tag. Abrí la página y mirá cómo se ve… ¡feo!
5. Vamos a darle estilo con Bootstrap. Andá la sección Components dentro de [Documentation](https://getbootstrap.com/docs/4.4/getting-started/introduction/) en la página de Bootstrap y en la barra de navegación del costado buscá la sección Buttons.
6. Ahí podemos ver un ejemplo con los códigos de botones default de Bootstrap. Copiá sólo la parte de la clase \( class="btn btn-primary"\), volvé al HTML y agregásela al botón que habías creado.
7. ¿Viste que pasó? ¡Ahora el botón cambió su estética y se ve como los de Bootstrap! **Lo que hacemos al usar Bootstrap es asignarle clases a los elementos HTML. Las características (formas, colores, tamaños, comportamientos, etc.) de esas clases están definidas dentro de "bootstrap.css" y transforman nuestros elementos.**
8. Vas a poder aplicar las clases relacionadas a botones tanto a un tag ``<button>`` \(como acabamos de hacer\), como a tags ``<a>`` o ``<input>``.
9. Agregá un link \( ``<a>``\) y un input \( ``<input>``\) en tu html, agregales una class="btn btn-primary" y mirá como se transforman en botones.	
10. Creá una stylesheet nueva en un archivo aparte y llamala "styles.css"
11. En el HTML, inmediatamente abajo del tag ``<link>`` que usamos para traer Bootstrap, creá un nuevo tag ``<link>`` que traiga nuestra nueva hoja de estilo.
12. Acordate que por como funciona CSS, si hay dos reglas de igual jerarquía que se contradicen gana la que está más abajo en el archivo \(el browser lee linealmente hacia abajo y la última regla que ve modifica a la/s anteriores\). Esto quiere decir que **si reescribimos una clase de Bootstrap en nuestro nuevo CSS, se va a sobreescribir la clase original porque nuestro archivo viene después del de Bootstrap.**
13. La clase ``btn-success`` hace que el botón sea de color verde, vamos a cambiarle la tonalidad. En tu nueva stylesheet creá una clase ``btn-success`` \(no te olvides de ponerle el punto adelante, porque es una clase\) y dale la propiedad ``background-color: lime;``. Guardalo y recargá la página. ¡Cambió el tono de verde!
14. Lo que pasó es que creamos una clase igual a la de Bootstrap pero con un atributo background-color diferente, y como nuestro archivo viene después pisa la regla original y le cambia el color. Fijate que la clase btn-success tiene otras propiedades que siguen rigiendo porque nosotros sólo le sobrescribimos el background-color.
15. Para terminar, entrá al archivo de Bootstrap, usá Ctrl+F para buscar btn-success y mirá que otras propiedades tiene esa clase.