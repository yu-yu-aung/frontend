import "./style.css";

//Select elements
const resultEle = document.querySelector(".result");
const storeBtn = document.querySelector(".store-btn");
const clearBtn = document.querySelector(".clear-btn");
const inputWidth = document.querySelector(".input-width");
const inputHeight = document.querySelector(".input-height");
const calcBtn = document.querySelector(".calc-btn");
const listsEle = document.querySelector(".lists");

//handler
const handleCalcBtn = () => {
  const width = inputWidth.valueAsNumber;
  const height = inputHeight.valueAsNumber;
  const area = width * height;

  resultEle.innerText = `${width}ft x ${height}ft = ${area}sq-ft`;

  //Reset input fields
  inputHeight.value = "";
  inputWidth.value = "";
};

const handleStoreBtn = () => {
  listsEle.innerHTML += `<li>${resultEle.innerText}</li>`;
  resultEle.innerText = "";
};

const handleClearBtn = () => {
  resultEle.innerText = "";
};

//event listener
calcBtn.addEventListener("click", handleCalcBtn);
storeBtn.addEventListener("click", handleStoreBtn);
clearBtn.addEventListener("click", handleClearBtn);
