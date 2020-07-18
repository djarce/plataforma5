# A practicar con las grillas :)
___

- Creá un HTML nuevo, incluile el link de Bootstrap y pegá el código de abajo dentro del body:
  ``<div class="container">
    <div class="row">
        <div class="col-sm-3 verde">col 3</div>
        <div class="col-sm-3 verde">col 3</div>
        <div class="col-sm-3 verde">col 3</div>
        <div class="col-sm-3 verde">col 3</div>
    </div>
</div>``

**Para los ejercicios de abajo asegurate de que el chrome esté en pantalla completa. Bootstrap es responsive al tamaño del viewport \(la parte donde se muestra el contenido\) y las columnas podrían no comportarse como queremos si el navegador está achicado.**

1. Fijate que a cada columna le agregamos una clase "verde". Dentro del tag ``<head>``, vinculá a una hoja de estilo tuya usando el tag ``<link>`` y dentro de ella creá la clase verde \(".verde"\) dándole un ``background-color: lime;`` y un ``border: 1px solid orange;``. Con eso vamos a ver mejor las columnas.
2. Dentro del div container, copiá el div row con todo su contenido y generá una segunda fila con columnas.
3. Cambiá los anchos de las columnas modificando el número después de "sm-", haciendo que siempre sumen 12. Probá con una columna de 2, una de 5, una de 4 y una de 1.
4. Creá una nueva row con 12 columnas de 1. Para agregar columnas simplemente escribí nuevos divs class="col….".