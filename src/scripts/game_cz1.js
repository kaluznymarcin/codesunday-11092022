// const gameElement = document.getElementById('gameKrtek');
const gameElement = document.body.querySelector('#game-1');
const panelElement = gameElement.querySelector('.panel');

const div = document.createElement('div');
div.id = 'new-element'

document.body.appendChild(div);

setTimeout(
  function () {
    panelElement.appendChild(div);
  }, 5 * 1000
)

let a = 100;

setTimeout(function () { a = a + 10 }, 0);

/* setInterval(function () {
  console.log('marcin')
}, 250); */

console.log(a);


