//Selectors
const acceptBtn = document.querySelector(".accept-btn");
const closeBtn = document.querySelector(".close-btn");
const cookieContainer = document.querySelector(".cookie-container");

//handler
const handleCookie = () => {
  //console.log(cookieContainer);
  cookieContainer.classList.add("hidden");
};

//listener
acceptBtn.addEventListener("click", handleCookie);
closeBtn.addEventListener("click", handleCookie);
