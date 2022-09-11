/* const gameElement = document.createElement('div');

const panelElement = document.createElement('div'); */
let score = 0;

const gameElement = createElement('div', 'game')

const panelElement = createElement('div', 'panel')

const arenaContainerElement = document.createElement('div');
const arenaElement = document.createElement('div');
const moleElement = document.createElement('span');

/* gameElement.classList.add('game');
panelElement.classList.add('panel') */
arenaContainerElement.classList.add('arenaContainer')
arenaElement.classList.add('arena')
moleElement.classList.add('mole')

gameElement.appendChild(panelElement);
gameElement.appendChild(arenaContainerElement);
arenaContainerElement.appendChild(arenaElement);
arenaElement.appendChild(moleElement);

document.body.appendChild(gameElement);

function createElement(nodeName, className) {
  const element = document.createElement(nodeName);
  element.classList.add(className);

  return element;
}

const tpl = document.createElement('template');

tpl.innerHTML = `
 <ul><li></li></ul>
  <div class="lol">
    <div class="omg"></div>
  </div>
`
console.log(tpl.content)
document.body.appendChild(tpl.content)

let cols = Math.floor(arenaContainerElement.offsetWidth / 100);

let rows = Math.floor(arenaContainerElement.offsetHeight / 100);

arenaElement.style.width = `${cols * 100}px`;

arenaElement.style.height = (rows * 100) + 'px';

function molePosition() {

  moleElement.style.top = (Math.floor(Math.random() * rows) * 100) + 'px'

  moleElement.style.left = (Math.floor(Math.random() * cols) * 100) + 'px'
}

setInterval(molePosition, 1 * 1000)


moleElement.addEventListener('click', function (event) {
  event.stopPropagation();
  score += 1;

  panelElement.innerHTML = score;
});


