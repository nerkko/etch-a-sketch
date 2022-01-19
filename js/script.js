const PIXEL_GRID = document.querySelector('.pixelContainer');
const PIXEL_GRID_WIDTH = PIXEL_GRID.offsetWidth;  // 1024
const GET_ITEM_SIZE = document.getElementById('grid_size');
const DEFAULT_ITEM_SIZE = 16;
let colorWheel = document.getElementById('colorpicker');
let color = function updateColor(){
  return colorWheel.value;
}

GET_ITEM_SIZE.addEventListener('change', clearPixelGrid);

function generateGrid(){
  let item_size = GET_ITEM_SIZE.options[GET_ITEM_SIZE.selectedIndex].value;
  const num_Of_Items = (PIXEL_GRID_WIDTH / item_size) ** 2;
  let divGroup = document.createDocumentFragment();

  for(let i = 0; i < num_Of_Items; i++) {
    let div = document.createElement('div');
    div.className = 'item';
    div.style.cssText = `width: ${item_size}px; height: ${item_size}px;`;
    div.addEventListener('mouseover', paint);
    divGroup.appendChild(div);
  }
  PIXEL_GRID.appendChild(divGroup);
}
  generateGrid();

  function paint(e){
    if(e.buttons == 1){
      e.target.style.backgroundColor = color();
    }
    else if(e.buttons == 4){
      e.target.style.backgroundColor = '';
    }
  }

  function clearPixelGrid(){
    PIXEL_GRID.innerHTML = '';
    return generateGrid();
  }

  colorWheel.addEventListener('change', color);

