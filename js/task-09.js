
const result = {
  changeColorBtn: document.querySelector('.change-color'),
  color: document.querySelector('.color'),
  body: document.querySelector('body'), 
};

result.changeColorBtn.addEventListener('click', changeColorBtn);

function changeBtnClick(){
  const currentColor = getRandomHexColor();
result.color.textContent = currentColor;
result.style.backgroundColor= currentColor; 
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
