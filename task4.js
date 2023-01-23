let button = document.querySelector("#btn");
let liste1 = document.querySelector("#l1");
let liste2 = document.querySelector("#l2");
let input = document.querySelector("#champ");

button.addEventListener("click", ajoutpersonne);
i=0;  
function ajoutpersonne() {
    if (input.value!="") 
    {
        let li = document.createElement("li");
        li.id = "pers" + i;
        i++;
        let span = document.createElement("span");
        let spanimg = document.createElement("span");

        span.innerHTML = input.value;
        let buttonx = document.createElement("button");
        buttonx.innerText = "X";
        buttonx.className="btnx";
        buttonx.addEventListener("click", supprime);
        li.appendChild(span);
        li.appendChild(buttonx);
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
        ajoutpersonne();
    }
  });