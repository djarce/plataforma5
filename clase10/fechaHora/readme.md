
# fechaYHora
___

1. Anda a tu editor de texto \(Visual Code, Sublime, etc…\) crea un nuevo archivo HTML. Creá un archivo .js nuevo y vincúlalo al HTML.
2. En el archivo .js escribí la función fechaYHora que escriba en la consola \(usando console.log\) un mensaje simple acompañado con la fecha y hora. Por ahora escribí a mano la fecha y la hora. Cuando abras el HTML en el Chrome se va a ejecutar el código y se va a **definir** la función para poder usar desde la consola. OJO, sólo va a estar definida y disponible para usar, pero no vas a ver nada escrito porque en el código no ejecutaste la función. Abrí la consola del Chrome y **ejecuta** la función escribiendo fechaYHora\(\).
3. Vuelve a tu archivo JS, después de definir la función, invocala múltiples veces en el código, escribiendo fechaYHora\(\) muchas veces, una abajo de otra.
4. Por último, existe una función que ya viene pre-definida en el Chrome que se llama Date que nos devuelve la fecha y la hora al momento de ejecutarla, osea Date\(\) . Ejecutá un par de veces la función Date en la consola. OJO que Date\(\) es con mayúscula, JavaScript es un lenguaje case-sensitive, osea que las mayúsculas importan.
5. Modifíca tu console log para que en vez de escribir la fecha y hora a mano, concatena el mensaje con el resultado de ejecutar la función. Date. Ej console.log\("Hoy es " + Date\(\) \) Date.