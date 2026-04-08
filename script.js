document.getElementById("btnAdicionar").onclick = function() {
    let lista = document.getElementById("lista");
    let li = document.createElement("li");
    li.innerText = "novo item";
    lista.appendChild(li);}




let contador = 0;

document.getElementById("btnClique").addEventListener("click", function() {
  contador++;
  console.log("botão clicado " + contador + " vezes");
});