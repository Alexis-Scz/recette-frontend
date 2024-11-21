async function list_rct(){

    
    const ulelement=document.querySelector("ul");
    const recette =  await fetch("http://localhost:3000/api/test");
    ;
    const rct= await recette.json();
    console.log(rct);
        
    
    // .then((recette)=>{
    //         console.log(recette)
           for(const lgn of rct){
            console.log(lgn)
                const lielement = document.createElement("li");
                 lielement.innerText=lgn.nom;
                 console.log(lgn.nom)
                 ulelement.appendChild(lielement);
            }
        }

 list_rct()