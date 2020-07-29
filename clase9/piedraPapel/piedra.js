let jugar = "si";
while (jugar === "si") {
  //Pida input hasta que el usuario introduce ya sea "P", "Pa" o "T"
  let usuario = prompt("Vamos a jugar a piedra(P), papel(Pa) o tijera(T). Vos cuál elegís?").toLowerCase();
  while (!(usuario === "p" || usuario === "pa" || usuario === "t")) {
    usuario = prompt("Vamos a jugar a piedra(P), papel(Pa) o tijera(T). Vos cuál elegís?").toLowerCase();
  }
  switch (usuario) {
    case "p":
      usuario = 3;
      break;
    case "t":
      usuario = 2;
      break;
    case "pa":
      usuario = 1;
      break;
    default:
      console.log("Error");
      break;
  }
  //Usando Math.random () elija un elemento al azar.
  let azar = Math.ceil(Math.random() * 3);
  let maquina;
  let p = 3,
    t = 2,
    pa = 1;
  switch (azar) {
    case 1:
      maquina = p;
      break;
    case 2:
      maquina = pa;
      break;
    case 3:
      maquina = t;
      break;
    default:
      console.log("Error");
      break;
  }
  //Le diga al usuario cuál fue el resultado
  if (maquina === 1 && usuario === 3) {
    alert("Elegiste piedra, yo papel. Gané yo.");
  } else if (maquina === 3 && usuario === 1) {
    alert("Elegiste papel, yo piedra. Ganaste vos.");
  } else if (maquina > usuario) {
    if (maquina === 3 && usuario === 2) {
      alert("Elegiste tijera, yo piedra. Gané yo.");
    } else {
      alert("Elegiste papel, yo tijera. Gané yo.");
    }
  } else if (usuario > maquina) {
    if (usuario === 3 && maquina === 2) {
      alert("Elegiste piedra, yo tijera. Ganaste vos.");
    } else {
      alert("Elegiste tijera, yo papel. Ganaste vos.");
    }
  } else {
    if (usuario === 1) {
      alert("Ambos elegimos papel. Es un empate.");
    } else if (usuario === 2) {
      alert("Ambos elegimos tijera. Es un empate.");
    } else {
      alert("Ambos elegimos piedra. Es un empate.");
    }
  }
  //Le pregunte al usuario si le gustaría volver a jugar.
  jugar = prompt("Querés volver a jugar?").toLowerCase();
  if (jugar === "si") {
    jugar = "si";
  } else if (jugar === "no") {
    jugar = "no";
  } else {
    jugar = prompt("Debés ingresar 'si' o 'no'.");
  }
}
