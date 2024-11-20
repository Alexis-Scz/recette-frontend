function list_rct(){
    const ulelement=document.querySelector("ul");
    fetch("url_db")
        .then((recette)=>{
            for(const rct of recette){
                const lielement = document.createElement("li");
                lielement.innerText=rct.nom;
                ulelement.appendChild(lielement);
            }
        }).catch((err) => {})
}