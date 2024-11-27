async function list_rct() {
  const ulelement = document.querySelector("ul");
  const recette = await fetch("http://localhost:3000/api/test");
  const rct = await recette.json();

  for (const lgn of rct.rows) {
    const btnelement = document.createElement("button");
    btnelement.innerText = lgn.nom;
    btnelement.setAttribute("onclick", `gotoaffch(${lgn.id},'${lgn.nom}')`);
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

  for (const ligne_ingr of ingr.rows) {
    if (ligne_ingr.id_recette == id) {
      const lielement = document.createElement("li");
      lielement.innerText = allingr.find((i) => i.id == ligne_ingr.id_ingr).nom;
      lstelement.appendChild(lielement);
    }
  }

  for (const ligne_modop of modop.rows) {
    if (ligne_modop.id == id) {
      const pelement = document.createElement("p");
      pelement.innerText = ligne_modop.mode_operatoire;
      modopelement.appendChild(pelement);
    }
  }
}



async function lst_ingr() {
  const allingredients = await fetch("http://localhost:3000/api/ing");
  const allingr = await allingredients.json();
  const zone_ing= document.querySelector("#zone_ingre")
  const listelement=document.querySelector("#ing")
  // console.log(allingr.rows)   JCCCCCCCCCC J'ai mis ".rows" apres l  variable dis moi si c ok comme ça stpp
  for (const ligne of allingr.rows){
    
    const optelement=document.createElement("option")
    optelement.innerText=ligne.nom 
    listelement.appendChild(optelement)
  }
  if (zone_ing.innerText=="Ajouter un ingredient"){
   
  }
}


async function lst_unit() {
  const allunites = await fetch("http://localhost:3000/api/lst_unit");
  const allunits = await allunites.json();

  const listelement=document.querySelector("#unit")
  for (const units of allunits.rows){
    const unit=(units.unit_possible)
    const optelement=document.createElement("option")
    optelement.innerText=unit
    listelement.appendChild(optelement)


  }

}

async function post_new(event) {
  event.preventDefault()
  const varNom=document.querySelector("#nom").value
  const VarIng=document.querySelector('#ing').value
  const VarQte=document.querySelector('#qte').value
  const VarUnit=document.querySelector('#unit').value
  const VarModeop=document.querySelector("#modop").value

  const body={
    Nom_recette :varNom,
    Ingredients_recette:VarIng,
    Quantité_ingredient :VarQte,
    Unit_mesure:VarUnit,
    Mode_operatoire : VarModeop
  }

  console.log("🚀 ~ post_new ~ body:", body)
  try {
    const response = await fetch("http://localhost:3000/api/post",{
      method : 'POST', 
      headers: {'Content-Type': 'application/json'},
      // le fonction JSON.stringify() te permet de transférer ton objet js en JSON
      body: JSON.stringify(body)
    })

  } catch (error) {
    console.log("🚀 ~ post_new ~ error:", error)
  }
  
}

async function affch_new(event) {
  event.preventDefault()

  console.log(ing.value)
  if (ing.value=="new"){
    document.querySelector("#new_txt_ing").removeAttribute("hidden")} 
  if(ing.value!="new"){
    document.querySelector("#new_txt_ing").setAttribute("hidden",true)
  }
  if (unit.value=="new"){
    document.querySelector("#new_txt_unit").removeAttribute("hidden")} 
  if(unit.value!="new"){
    document.querySelector("#new_txt_unit").setAttribute("hidden",true)
  }
}





if (document.title == "liste_rct") {
  list_rct();
}
if (document.title == "affichage") {
  afich();
}
if (document.title=="create"){
  lst_ingr()
  lst_unit()
}