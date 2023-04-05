let numContainer = document.getElementById('num'); 
let value = 0;
let btnsCick = document.querySelector('.click');
let btnsReset = document.querySelector('.reset');

btnsCick.addEventListener("click", () => {value++;numContainer.textContent = value});
btnsReset.addEventListener("click", () => {value = 0;numContainer.textContent = value});