let favorites = [];

let famous = [
  "alex smith",
  "amy whinehouse",
  "cameron diaz",
  "brad pitt",
  "ashton kutcher",
  "mark whalberg",
  "morgan freeman",
  "mila kunis",
];

let obama_jobs = [];

let politicos = {
  secretary_of_state: "hillary clinton",
  potus: "barack obama",
  flotus: "michelle obama",
  vice_prez: "joe biden",
  gov_of_california: "jerry brown",
};

//Ahora itera sobre el arreglo famous y agrega a tu favoritos personas cuyos nombres empiecen con 'a'.
for (let i = 0; i < famous.length; i++) {
  if (famous[i][0] === "a") {
    favorites.push(famous[i]);
  }
}

//Itera sobre el objeto politicos y agregá sus nombres al arreglo famous .
for (let nombres in politicos) {
  famous.push(politicos[nombres]);
}

//Itera sobre el objeto politicos y agregá los nombres de los trabajos en el arreglo obama_jobs.
for (let job in politicos) {
  obama_jobs.push(job);
}

//Crea un objeto vació llamado b_named_politicos.
let b_named_politicos = {};
//Agrega como una propiedad del objeto b_named_politicos a cualquier politico cuyo nombre O apellido empiece con 'b'. Usá su job title como key y su nombre como valor.
for (let persona in politicos) {
  let conB = politicos[persona].split(" ");
  for (let i = 0; i < conB.length; i++) {
    if (conB[i][0] === "b") {
      b_named_politicos[persona] = politicos[persona];
    }
  }
}

//Crea un objeto vacío llamado reverse_politico_lookup.
let reverse_politico_lookup = {};
//Agrega políticos a este objeto usando su nombre como key y su job_title como valor.
for (let reves in politicos) {
  reverse_politico_lookup[politicos[reves]] = [reves];
}
