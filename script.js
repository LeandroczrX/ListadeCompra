let count = 0;

function add() {
  let input = document.getElementById('i');
  let texto = input.value.trim();

  if (texto === "") return;

  count++;
  document.getElementById('contador').textContent = count;

  let li = document.createElement('li');
  li.textContent = texto;

  let btn = document.createElement('button');
  btn.textContent = "x";

  btn.onclick = function () {
    remover(li);
  };

  li.appendChild(btn);
  document.getElementById('lista').appendChild(li);

  input.value = '';
  input.focus();
}


function remover(li) {
  li.remove();
  if (count > 0) count--;
  document.getElementById('contador').textContent = count;
}



// alerta

document.getElementById("i").addEventListener("click", function () {
  alert("!!!");
});



// muda fundo da página

document.body.onclick = function () {
  this.style.backgroundImage = "url('https://media1.tenor.com/m/B8RqZAbFJUwAAAAd/minecraft-calm.gif')";
};



// muda fundo do input

document.querySelector("input").onclick = function () {
  this.style.backgroundImage = "url('https://previews.123rf.com/images/corbendallas/corbendallas1811/corbendallas181100577/127490370-light-pink-square-mosaic-tiles-background-background-with-abstract-polygonal-pixels-random-tiles.jpg')";
};