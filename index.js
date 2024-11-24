async function list_rct() {
  console.log(document.title);
  const ulelement = document.querySelector("ul");
  const recette = await fetch("http://localhost:3000/api/test");
  const rct = await recette.json();

  for (const lgn of rct) {
    const btnelement = document.createElement("button");
    btnelement.innerText = lgn.nom;
    btnelement.setAttribute("onclick", `gotoaffch(${lgn.id},'${lgn.nom}')`);
    console.log(lgn.id);
    // setglobalvariablex=lign.id
    ulelement.appendChild(btnelement);
  }
}

async function gotoaffch(id, nom) {
  console.log(id, nom);
  window.location.href = `affchg.html?id=${id}&nom=${nom}`;
  console.log(2);
  afich(id, nom);
}

async function afich() {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");
  const nom = url.searchParams.get("nom");

  const lstelement = document.querySelector("#ingre");

  const allingredients = await fetch("http://localhost:3000/api/ing");
  const allingr = await allingredients.json();

  const ingredients = await fetch("http://localhost:3000/api/ingrct");
  const ingr = await ingredients.json();

  const modopelement = document.querySelector("#modop");
  const modoperatoire = await fetch("http://localhost:3000/api/test");
  const modop = await modoperatoire.json();

  const titreelement = document.querySelector("#titre_rct");
  const helement = document.createElement("h1");
  helement.innerText = nom;
  titreelement.appendChild(helement);

  for (const ligne_ingr of ingr) {
    if (ligne_ingr.id_recette == id) {
      const lielement = document.createElement("li");
      lielement.innerText = allingr.find((i) => i.id == ligne_ingr.id_ingr).nom;
      lstelement.appendChild(lielement);
    }
  }

  for (const ligne_modop of modop) {
    if (ligne_modop.id == id) {
      const pelement = document.createElement("p");
      pelement.innerText = ligne_modop.mode_operatoire;
      modopelement.appendChild(pelement);
    }
  }
}

if (document.title == "liste_rct") {
  let x = "";
  list_rct();
}
if (document.title == "affichage") {
  afich();
}
