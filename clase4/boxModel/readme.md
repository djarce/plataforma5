# Practicando con las cajas
___

1. Creá un html nuevo y ponele dos ``<div>`` que digan "soy un div".
2. Creá una hoja de estilos y vinculala al html con un tag link.
3. En la hoja de estilos, usá un selector de elemento \( div \{...\}\) para seleccionar los divs y dales un ``border: 2px solid red;``.
4. Vemos que aunque el texto sólo ocupa una parte chiquita, el border marca una caja que ocupa todo el ancho de la pantalla. ¿Te acordás por qué es? Exacto, porque ``<div>`` es un elemento de tipo block, por lo que su "caja" se hace tan ancha como sea posible.
5. Abrí el inspector de chrome con Ctrl + shift + C \( o Cmd + shift + C en Mac\) y seleccioná uno de los divs. Fijate que en el dibujo del modelo de caja ahora border dice "2" en cada uno de los costados de la caja.
6. Para las propiedades margin, border y padding, la caja se divide en 4 lados que podemos modificar individualmente:
   - top
   - right
   - bottom
   - left
7. En el css, dentro del selector div creá una nueva regla css que sea ``border-left: 5px solid blue;``. Ahora sólo el borde izquierdo de los divs se hizo más ancho y azul. Podemos hacer lo mismo con margin y padding, escribiendo "margin-" o "padding-" seguido por top, right, bottom o left.
8. Las cajas están pegadas, porque no tienen nada de margen, asi que vamos a usar el margin para separarlas un poco.
9. Andá al css, dale un margin: 20px; a los divs y mirá cómo se separan. Si los inspeccionás con el chrome vas a ver que ahora en la caja aparecen 20px por lado.
10. Fijate que aunque dice 20px por lado, el lado derecho es mucho más largo. Esto es porque el margin genera como mínimo una separación de 20px, pero hacia la derecha el elemento ocupa todo lo que puede porque es de tipo block.
11. Vemos que el borde de la caja está pegado al texto. Eso es porque el padding por ahora es cero. Agregale a los divs un ``padding: 10px;`` para darle un poco de espacio entre el border y el content.
12. Si inspeccionamos la página con el chrome, vemos que ahora se agregó una franja verde de 10px correspondiente al padding. Entonces en el inspector tenemos: en el centro una franja azul con el content, después una franja verde con el padding, después una lína de border que separa el interior y el exterior de la caja, y por último una franja naranja con el margin.