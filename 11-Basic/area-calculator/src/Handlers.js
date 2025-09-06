import { inputHeight, inputWidth, listsEle, resultEle } from "./Selector";

//handler
export const handleCalcBtn = () => {
  const width = inputWidth.valueAsNumber;
  const height = inputHeight.valueAsNumber;
  const area = width * height;

  resultEle.innerHTML = `${width}ft x ${height}ft = ${area}ft <sup>2</sup>`;

  //Reset input fields
  inputHeight.value = "";
  inputWidth.value = "";
};

export const handleStoreBtn = () => {
  const list = document.createElement("li");
  const result = document.createElement("div");
  result.innerHTML = resultEle.innerHTML;
  result.className = "flex-grow text-left";

  list.append(result);
  list.className =
    "border-l-4 border-gray-500 px-2 py-1 flex justify-between items-center";

  const delBtn = document.createElement("button");
  delBtn.className = "p-2 bg-red-500 rounded-md text-white";
  delBtn.innerText = "Delete";

  delBtn.addEventListener("click", () => {
    list.remove();
  });

  list.append(delBtn);
  listsEle.append(list);
};

export const handleClearBtn = () => {
  resultEle.innerText = "";
};
