let count = 0;

function add() {
  let input = document.getElementById('i');
  let texto = input.value.trim();
  if (texto !== "") {
    count++;
    document.getElementById('contador').textContent = count;
    
    let li = document.createElement('li');
    li.innerHTML = texto + '<button onclick="remover(this.parentElement)">x</button>';
    
    let lista = document.getElementById('lista');
    lista.appendChild(li);
    
    input.value = '';
    input.focus();
  }
}

function remover(li) {
  li.remove();
  count--;
  document.getElementById('contador').textContent = count;
}
 
 /* alerta */
let clique = document.getElementById("i");
clique.addEventListener("click", function () {
    alert("!!!");
});

/* fundo vira ouro */
document.querySelector("body").onclick= function() {
  this.style.backgroundImage = "url('https://media1.tenor.com/m/B8RqZAbFJUwAAAAd/minecraft-calm.gif')";

}
/* fundo do input muda*/
document.querySelector("input").onclick= function() {
  this.style.backgroundImage = "url('https://previews.123rf.com/images/corbendallas/corbendallas1811/corbendallas181100577/127490370-light-pink-square-mosaic-tiles-background-background-with-abstract-polygonal-pixels-random-tiles.jpg')";
}
