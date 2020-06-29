# Ejercicio
___
Vamos a pasar el código CSS que creamos dentro del tag style en el ejercicio anterior a un archivo CSS externo y traerlo usando el tag ``<link>``:  

1. Creá un archivo nuevo y guardalo en la misma carpeta donde está tu archivo HTML con el nombre "mis_estilos.css" \(podes ponerle el nombre que quieras, lo importante es que termine en .css\)
2. No pongas nada de HTML en "mis_estilos.css", simplemente pasá las reglas CSS que tenías escritas dentro del tag style del documento HTML original. Ese debería ser el único contenido del archivo \(sin el tag style, sólo las reglas css\).
3. El contenido de "mis_estilos.css" debería verse como una sucesión de reglas de este tipo:
``body { 
background-color: lightgrey; 
}``
4. Una vez que hayas copiado las reglas CSS a "mis _estilos.css", borrá el tag style \(y su contenido\) del documento HTML original y reemplazalo por un tag link, poniendo como valor de href "mis_estilos.css" \(o el nombre que le hayas puesto a tu archivo .css\)
5. Guardá ambos archivos, el HTML y el .css y recargá la página en el browser. ¡Debería verse igual que antes!