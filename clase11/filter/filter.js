//Ejercicio 1
let mayoresOIgualesA5 = (arr) => {
  // CODEA LA SOLUCIÓN
  return arr.filter((num) => num >= 5);
};
console.log(mayoresOIgualesA5([3, 6, 8, 2])); // [6, 8, 21]

//Ejercicio 2
let numeros = [3, 7, 6, 13, 2, 24, 99];
// CODEA LA SOLUCIÓN
let pares = numeros.filter((x) => x % 2 === 0);

console.log(pares); // [6, 2, 24]

//Ejercicio 3
let palabras = ["Et", "Voluptua", "Sed", "At", "Diam", "Lorem"];
const palabrasCortas = palabras.filter((word) => word.length <= 3); // CODEA LA SOLUCIÓN

console.log(palabrasCortas); // [ 'Et', 'Sed', 'At' ]

//Ejercicio 4
let personas = [
  { nombre: "Ana", edad: "28" },
  { nombre: "María", edad: "24" },
  { nombre: "José", edad: "31" },
];
let personasConMasDe27 =
  // CODEA LA SOLUCIÓN
  personas.filter((persona) => persona.edad > 27);

console.log(personasConMasDe27); // [{ nombre: 'Ana', edad: '28' }, { nombre: 'José', edad: '31' }]

//Ejercicio 5
const mix = [
  "Ut vero.",
  2,
  function () {
    console.log("hola mundo!");
  },
  56,
  "Diam rebum nonumy et.",
  true,
  false,
  "Kasd stet.",
  "Sit et dolor.",
  null,
  null,
  [1, 2, 3],
  "Dolore.",
];
// CODEA LA SOLUCIÓN
let soloStrings = mix.filter((str) => typeof str === "string");

console.log(soloStrings); // deberia mostrar [ 'Ut vero.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]

//Ejercicio 6
let playlist = [
  "Smells Like Teen Spirit",
  "Everlong",
  "Come As You Are",
  "The Pretender",
  "Heart-Shaped Box",
  "Learn to Fly",
  "Lithium",
];
let playlistEscuchada = ["The Pretender", "Lithium", "Come As You Are"];
let playlistSinEscuchar =
  // codea aca tu solución
  playlist.filter((song) => !playlistEscuchada.includes(song));

console.log(playlistSinEscuchar); // debería mostrar [ 'Smells Like Teen Spirit', 'Everlong', 'Heart-Shaped Box', 'Learn to Fly' ]
