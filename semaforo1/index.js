let green = document.getElementById('green');
let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let time = document.getElementById('time');

function trocaCorDoSemafaro(cor) {
  if (cor === 'green') {
    green.style.backgroundColor = 'green';
    yellow.style.backgroundColor = 'rgb(247, 252, 177)';
    red.style.backgroundColor = 'rgb(248, 150, 175)';
    time.style.color = 'green';
  }
  if (cor === 'yellow') {
    green.style.backgroundColor = 'rgb(183, 248, 183)';
    yellow.style.backgroundColor = 'yellow';
    red.style.backgroundColor = 'rgb(248, 150, 175)';
    time.style.color = 'yellow';
  }
  if (cor === 'red') {
    green.style.backgroundColor = 'rgb(183, 248, 183)';
    yellow.style.backgroundColor = 'rgb(247, 252, 177)';
    red.style.backgroundColor = 'red';
    time.style.color = 'red';
  }
}


setInterval(() => {
  let minutos = new Date();
  time.innerHTML = 20 - minutos.getSeconds()


  if (minutos.getSeconds() <= 20) {
    trocaCorDoSemafaro('green')
  }
  if (minutos.getSeconds() >= 20 && minutos.getSeconds() <= 30) {
   time.innerHTML = 30 - minutos.getSeconds();
    trocaCorDoSemafaro('yellow')
  }
  if (minutos.getSeconds() >= 30) {
    time.innerHTML = 59 - minutos.getSeconds();
    trocaCorDoSemafaro('red')
    minutos.setSeconds(minutos.getSeconds() + 0)
  }
}, 1000)