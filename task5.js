let button = document.querySelector("#btn");
let liste1 = document.querySelector("#l1");
let input = document.querySelector("#champ");
let fichier = document.querySelector("#fichier");
button.addEventListener("click", ajout);
i=0;  
function ajout() {
    if (input.value!="") 
    {
        let li = document.createElement("li");
        li.id = "pers" + i;
        i++;
        let span = document.createElement("span");
        span.innerHTML = "Titre:" + input.value;
        let buttonx = document.createElement("button");
        buttonx.innerText = "supprimer";
        buttonx.addEventListener("click", supprime);
        let photo = document.createElement("img");
        let path = "";
        path=fichier.value;
        path=path.replace(/C:\\fakepath\\/i,'');
        console.log(path);
        photo.setAttribute("src",path) ;
        photo.setAttribute("alt","impossible") ;
        photo.className="image";
        li.appendChild(buttonx);
        li.appendChild(span);
        li.appendChild(photo);
        liste1.appendChild(li);
        

    }
    else{alert("Remarque: Input")}

}
function supprime(e) {
    let idliste= e.target.parentElement.parentElement.id;
    let id = e.target.parentElement.id;
    let elementToDelete = document.getElementById(id);
    let elt =document.getElementById(id);
    elementToDelete.remove();
    if(idliste=="l1"){  
         e.target.className="btnxx";
         liste2.appendChild(elt);
    }
 
  }
input.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        ajout();
    }
  });