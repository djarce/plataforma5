# Trabajando con la API de Chuck Norris
___

En esta oportunidad vamos a trabajar con chucknorris.io, una API JSON gratuita que nos permitirá obtener chistes aleatorios sobre Chuck Norris.


1. Para empezar creá un nuevo documento HTML y dentro de este agregá un div con el ``id="container"``.
2. Dentro del div vas a ir agregando lo siguiente:
   - Un tag img con la siguiente imagen: [https://www.git-tower.com/blog/media/pages/posts/time-for-version-control/1965580271-1590561567/05-chuck@2x.png](https://www.git-tower.com/blog/media/pages/posts/time-for-version-control/1965580271-1590561567/05-chuck@2x.png)
   - Un h1 con el texto: Aprobado por Chuck Norris.
   - Una etiqueta ``<button>`` con el texto UPDATE entre medio del opening y el closing tag.
3. Vamos a darle un color de fondo al body.
4. Vamos a querer que todos los elementos del sitio esten centrados, así que vas a centrar al div id="container" y a todos los elementos que se encuentren dentro de este div.
5. Dale el estilo que quieras al botón.
6. Vamos a darle un marco punteado al chiste que obtenemos, podés utilizar este código:
   ``h2 {
    text-align: center;
    padding: 10px;
    border: 2px black dashed;
   }``
7. Vamos a llamar a la función getJSON, a la cuál le vamos a pasar la URL de la API como primer argumento, y como segundo argumento una función anónima, esta se encargara de insertar el texto que nos llega en la key llamada "value" dentro del h2 utilizando textContent. 
8. Hace que el botón actualice la frase. 

(El resultado final puede verse acá)[https://trusting-kalam-415baf.netlify.app/]