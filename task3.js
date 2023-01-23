let button = document.querySelector("#ajout");
let para = document.querySelector("#pajout");
let liste = document.querySelector("#l1");

let input = document.querySelector("#champ");

button.addEventListener("click", handleAjout);
input.addEventListener("keyup", handleChange);  
function handleAjout() {
    if (input.value!="") 
    {
    liste.innerHTML += <li> ${input.value} </li>;
    input.value="";
    para.textContent="";
    }
    else{alert("Remarque: Input Vide")}

}
function handleChange(){
 para.textContent=input.value;
  
}
input.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        handleAjout();
    }
  });