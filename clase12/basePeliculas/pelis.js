let peliculas = [
  (a = {
    titulo: "THE WILLOUGHBYS",
    rating: "64%",
    loHasVisto: true,
  }),
  (b = {
    titulo: "MILES DAVIS: BIRTH OF THE COOL",
    rating: "83%",
    loHasVisto: false,
  }),
  (c = {
    titulo: "THE BOY WHO HARNESSED THE WIND",
    rating: "88%",
    loHasVisto: true,
  }),
  (d = {
    titulo: "MY NEIGHBOR TOTORO",
    rating: "94%",
    loHasVisto: true,
  }),
];

for (i = 0; i < peliculas.length; i++) {
  let pelicula = peliculas[i];
  let datos = [];
  for (element in pelicula) {
    datos.push(pelicula[element]);
  }
  if (datos[2] === true) {
    console.log(
      'Has visto "' +
        datos[0] +
        " - Calificación del público en Rotten Tomatoes: " +
        datos[1] +
        "."
    );
  } else {
    console.log(
      'No has visto "' +
        datos[0] +
        " - Calificación del público en Rotten Tomatoes: " +
        datos[1] +
        "."
    );
  }
}
