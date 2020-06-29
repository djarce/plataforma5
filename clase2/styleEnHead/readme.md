# Ejercicio
___
Vamos a refactorear\(\*\) el siguiente código CSS usando el tag ``<style>``:

``<body style="background-color:lightgrey">
  <h1 style="color:blue">Esto es un heading</h1>
  <h2 style="color:#BA521F">Otro heading</h2>
  <h3 style="color:rgb(120,234,88)">Maas!!</h3>
  <p style="color:red;background-color:green">Esto es un párrafo.</p>
  <img src="https://i.imgur.com/81qyN1y.jpg" style="height:100px;width:100px">
</body> ``

1. Creá un tag ``<style>`` dentro del tag ``<head>`` del documento HTML
2. Para cada elemento html, copiá las reglas css que están dentro de "style=…" y reescribilas dentro del tag ``<style>``, usando el formato que vimos al principio: selector \{ propiedad:valor; otraPropiedad:valor;\}
3. Una ayuda para empezar, el primero debería verse así:

``<body style="background-color:lightgrey">``  

``body { 
  background-color: lightgrey; 
}``	

4. A medida que pases cada regla dentro del tag ``<style>`` borrá el atributo "style=…." del elemento html correspondiente. En el ejemplo de arriba, una vez que pasamos la regla css, el opening tag del body debería quedar así ``<body>``