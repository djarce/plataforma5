# Políticos
___

Para resolver estos ejercicios repasemos conceptos que nos van a ayudar a resolverlo:

``let greeting = "Hello and welcome!"
  greeting[0] // "H"
  let words = greeting.split(' ')``

``let favorites = []
  let famous = ['alex smith', 'amy whinehouse', 'cameron diaz', 'brad pitt', 'ashton kutcher', 'mark whalberg', 'morgan freeman', 'mila kunis']
  let obama_jobs = []
  let politicos = {
  secretary_of_state: 'hillary clinton',
  potus: 'barack obama',
  flotus: 'michelle obama',
  vice_prez: 'joe biden',
  gov_of_california: 'jerry brown'
}``  

1. Ahora itera sobre el arreglo famous y agrega a tu favoritos personas cuyos nombres empiecen con 'a'.
2. Itera sobre el objeto politicos y agregá sus nombres al arreglo famous.
3. Itera sobre el objeto politicos y agregá los nombres de los trabajos en el arreglo obama_jobs.
4. Crea un objeto vació llamado b_named_politicos.
5. Agrega como una propiedad del objeto b_named_politicos a cualquier politico cuyo nombre o apellido empiece con 'b'. Usá su job title como key y su nombre como valor. 
6. Crea un objeto vació llamado reverse_politico_lookup.
7. Agrega políticos a este objeto usando su nombre como key y su job_title como valor.