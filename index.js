

async function list_rct() {
    console.log(document.title);
  const ulelement = document.querySelector("ul");
  const recette = await fetch("http://localhost:3000/api/test");
  const rct = await recette.json();


  for (const lgn of rct) {
    console.log(lgn);
    const btnelement = document.createElement("button");
    btnelement.innerText = lgn.nom;
    btnelement.setAttribute("onclick", "gotoaffch('lgn.id')");
    console.log(lgn.id);
    ulelement.appendChild(btnelement);
  }}


async function gotoaffch(nom) {
  console.log(nom);
  x=nom
  window.location.href = "affchg.html";
  afich(nom)}


async function afich(nom) {
    console.log(nom)
      console.log("fsrgsré")
  const lstelement = document.querySelector("ingre");
  const ingredients = await fetch("http://localhost:3000/api/ingrct");
  const ingr = await ingredients.json();
  console.log(ingr);

  for (const ligne_ingr of ingr) {
    console.log(ligne_ingr);
    if(ligne_ingr.id_recette=nom){
    const lielement = document.createElement("li");
    lielement.innerText = ligne_ingr.nom;
    console.log(lgn.nom);
    lstelement.appendChild(lielement);
  }}
}


if (document.title=="liste_rct"){
list_rct();}
if (document.title=="affichage"){
afich(x)    
}