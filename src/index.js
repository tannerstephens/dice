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
    image.src = image.dataset.url;
    entries[0].target.dataset.loaded = true;
  }
};

const makeBoxColumn = dice => {
  const column = document.createElement('div');
  column.classList.add('column');
  column.classList.add('is-one-quarter');
  column.id = `column-${dice}`;

  const box = document.createElement('div');
  box.id = `box-${dice}`;
  box.classList.add('box');
  box.classList.add('dice');

  const image = document.createElement('img');
  image.id = `image-${dice}`;
  image.width = 300;
  image.height = 300;
  image.dataset.url = `assets/dice/${dice}`;

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
    .then(boxes => boxes.forEach(box => columns.append(box)));

})
