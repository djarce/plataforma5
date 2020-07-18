# Componentes: Jumbotron
___

1. Andá a la sección de componentes del sitio de Bootstrap y buscá \(Ctr+F\) Jumbotron.
2. Copialo y pegalo en tu HTML.
3. Veamos el código más en detalle para entenderlo: es simplemente un ``<div class="jumbotron">``, que contiene un ``<h1>`` y un ``<p>`` con un determinado texto, y un tag ``<a>`` que contiene un link transformado en botón mediante la clase "btn btn-primary btn-lg".
4. Como vimos previamente, la clase btn le da al tag ``<a>`` la estética de un botón, btn-primary lo hace azul y btn-lg lo hace grande.
5. Habrás notado que hay una sutil diferencia entre nuestro jumbotron y el del ejemplo: el nuestro ocupa todo el ancho de la pantalla. Para modificar esto vamos a usar un elemento típico de Bootstrap que sirve para centrar el contenido, el ``<div class="container">``.
6. Creá un ``<div class="container">`` que envuelva todo el Jumbotron (abrí el div antes de que empiece el Jumbotron y cerralo al final de este). ¡Listo, igualito al del ejemplo!	
7. Ahora modificá el Jumbotron, cambiándole el texto al ``<h1>`` y al primer p.
8. Agregale otro ``<p>`` después del primero y ponele otro texto.
9. Si te parece que el nuevo ``<p>`` afea el Jumbotron podés borrarlo, era sólo para mostrarte que podés modificar el Jumbotron "a piaccere".
10. Por último cambiá el texto del botón por "+ info" y agregá un segundo botón al lado con el texto "contactar".
11. Andá a la sección de componentes del sitio de Bootstrap y buscá Forms.
12. Copiá el código de la opción "Overview" y pegalo en tu HTML \(más abajo hay muchos otros formularios diferentes, pero vamos a empezar con este\).
13. Guardá, recargá … ¡y voilá! Tenemos un formulario copado sin haber tenido que escribir una línea de código :\) . Este es un claro ejemplo del poder de Bootstrap: literalmente en 5 segundos tenemos un formulario en nuestra página.
14. Creá un div class container e incluí el formulario dentro este.
15. A continuación vamos a modificar un poco el formulario para que tenga un campo con el nombre, un mail, un password y un checkbox que diga "acepto las bases y condiciones", en ese orden…
16. Para agregar un campo para el nombre simplemente copiá por ejemplo el input de tipo password \(desde donde empieza hasta donde termina el div class "form-group"\) y pegalo al principio del formulario.
17. Modificá el label para que diga "Nombre" y cambiá además el valor del atributo type por "text" y los valores de los atributos **id** y **for** \(asignales el mismo valor\).
18. Queremos que el usuario ingrese un nombre, asi que cambiá el atributo ``placeholder``, ponele "Nombre", así el usuario ve eso escrito en la cajita.
19. Vamos a modificar el label del checkbox. Reemplazá el texto que posee por: "Acepto las bases y condiciones".
20. ¡Genial, ya lo tenemos listo! Bah, casi. Si tratás de mandar el formulario con [Formspree](https://formspree.io/) por ejemplo vas a ver que no llega ningún dato. ¿Te das cuenta que le falta?
21. Acordate que los formularios mandan data en un formato key-value pair, osea el nombre de un campo cuyo valor asociado es lo que ingresa el usuario en ese input del formulario. Por ejemplo, cuando se mande el formulario el campo "nombre" debería llegar con el valor del nombre que ingrese el usuario.
22. Agregale a cada input el nombre de su campo usando el atributo name y habrás terminado tu primer formulario con Bootstrap. ¡Felicitaciones!
23. Lo mismo de siempre: buscá Navbar en los componentes de Bootstrap, copiá el código y pegalo en tu HTML.
24. Primer cosa a tener en cuenta: el lugar donde pegues el código de la navbar en el HTML importa. Si querés que la Navbar esté arriba de todo tenés que pegarlo al principio del body.
25. Otra cosa a tener en cuenta: el código de la Navbar es más largo y complejo que los anteriores, pero la lógica para usarlo y adaptarlo es siempre la misma: mirá lo que querés cambiar, buscalo con Ctrl+F en el código y cambialo \(o borralo si no lo querés\). Vamos a ejercitar un poco esta habilidad.
26. Primero hacé que la barra esté centrada poniéndola dentro de un div class con la clase "container-fluid".
27. Buscá la parte que dice "Navbar" en el código y cambiala por un nombre copado para tu página.
28. Cambia el texto de los dos primeros links, reemplazando "Home" por "Google" en el primer caso y "Link" por Facebook" en el segundo. Hacé que cada link funcione y te dirija a su página correspondiente.
29. Agregá un tercer link inmediatamente después que lleve a Amazon, y que se vea remarcado, como el primero. ¿descubrís qué es lo que lo pone de ese color?
30. Borrá el placeholder que dice "Search" en la barra de búsqueda y cambiá el texto del botón por "Buscar".
31. Bien, ya casi terminamos. Ahora vamos a agregar JavaScript para que funcione el botón dropdown. Copiá estos tags y pegalos justo antes del cierre de la etiqueta body:
     1. ``<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>``
     2. ``<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>``
32. Con esos códigos agregamos jQuery y el código JavaScript de Bootstrap, que se encargan de hacer que los botones funcionen. Fijate de pegarlos en ese órden, porque si los pegás al revés no va a funcionar. Ya lo vas a entender mejor cuando lleguemos a esa parte del curso :\) Apretá el botón de dropdown para probarlo, y achicá el ancho del viewport hasta que el texto de la Navbar se reemplace por el botón con las 3 rayitas \(también conocido como "la hamburguesita"\). Si apretás ese botón se despliega el menú, lo que sirve para los que entran desde el celular. Ah, si, tu sitio es responsive. ¡BUEENAAAA!     