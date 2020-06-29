# Heredando Estilos
___
La clase pasada vimos que HTML se construye anidando elementos unos dentro de otros, creando un árbol llamado el DOM \(Document Object Model\). Muchas reglas CSS son hereditarias, es decir que si se las asignamos a un elemento HTML \(padre, o parent\), esa regla derramará a los elementos que contenga dentro de él \(sus hijos, o children\). Vamos a probarlo:

- Creá un documento HTML nuevo y dentro de el body creá un título usando un tag ``<h1>`` y una lista desordenada con 4 items usando un tag ``<ol>``
- Creá una hoja de estilo nueva y vinculala al archivo html usando el tag ``<link>``
- En la hoja de estilo usa un selector de elemento para seleccionar el body \( body \{…\}\) y dale la propiedad color: red
- Guardá los cambios en la hoja de estilo y abrí el html en el google chrome ¿De qué color se ven los textos de la página?
- Lo que pasó fue que la regla aplicada al body fue heredada por sus elementos hijos, que se pintaron de rojo.
- Ahora seleccioná el elemento ol y dale una propiedad color: purple
¿Qué pasó? Al asignarle un color específico a ``<ol>`` sobreescribimos la regla que heredaba de su padre.