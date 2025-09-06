import { handleCalcBtn, handleClearBtn, handleStoreBtn } from "./Handlers"
import { calcBtn, clearBtn, storeBtn } from "./Selector"

const Listener = () => {
  //event listener
  calcBtn.addEventListener("click", handleCalcBtn);
  storeBtn.addEventListener("click", handleStoreBtn);
  clearBtn.addEventListener("click", handleClearBtn);
}

export default Listener