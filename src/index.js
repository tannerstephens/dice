const getDiceList = () => {
  const headers = new Headers();
  headers.append('pragma', 'no-cache');
  headers.append('cache-control', 'no-cache');

  const requestInit = {
    method: 'get',
    headers
  };

  return fetch('assets/dice/dice.json', requestInit)
    .then(response => response.json())
};

const callback = entries => {
  if(entries[0].target.dataset.loaded)
    return;

  if(entries[0].isIntersecting === true) {
    const image = entries[0].target.children[0].children[0];

    const temp = new Image();

    temp.onload = () => {
      image.src = temp.src;
    }

    temp.src = image.dataset.url;
    entries[0].target.dataset.loaded = true;
  }
};

const makeModals = columns => {
  const parent = columns.parentElement;

  Array.from(columns.children).forEach(column => {
    const dice = column.dataset.dice;

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = `modal-${dice}`;

    modal.innerHTML = `
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <img data-src="assets/dice/${dice}">
        </div>
      </div>
    `;

    parent.append(modal);

    column.children[0].onclick = () => {
      modal.children[1].children[0].children[0].src = modal.children[1].children[0].children[0].dataset.src;
      modal.classList.add('is-active');
    };

    modal.children[0].onclick = () => {
      modal.classList.remove('is-active');
    }
  });
};

const makeBoxColumn = dice => {
  const column = document.createElement('div');
  column.classList.add('column');
  column.classList.add('is-one-quarter');
  column.id = `column-${dice}`;
  column.dataset.dice = dice;

  const box = document.createElement('div');
  box.id = `box-${dice}`;
  box.classList.add('box');
  box.classList.add('dice');

  const image = new Image();
  image.id = `image-${dice}`;
  image.classList.add('is-square');
  image.width = 300;
  image.dataset.url = `assets/dice/${dice}`;
  image.src = 'assets/loading.gif';

  box.append(image);
  column.append(box);

  const observer = new IntersectionObserver(callback, { threshold: [0] });
  observer.observe(column);

  return column;
};

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  const columns = rootElement.parentElement;
  rootElement.remove();

  getDiceList()
    .then(dice => dice.map(dice => makeBoxColumn(dice)))
    .then(boxes => boxes.forEach(box => columns.append(box)))
    .then(() => makeModals(columns));
})
