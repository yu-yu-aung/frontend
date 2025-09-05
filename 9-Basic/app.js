const tabEle = document.querySelectorAll(".tab-btn");
const tabContentEle = document.querySelector(".tab-content");

const handleTabBtn = (e) => {
  //console.log("U Clicked", e.target.innerText);

  tabEle.forEach((btn) => {
    btn.classList.remove("bg-gray-300", "border-b-2", "border-gray-600");
  });

  e.target.classList.add("bg-gray-300", "border-b-2", "border-gray-600");

  if (e.target.innerText === "First Tab") {
    tabContentEle.innerText = "First Tab Content";
  } else if (e.target.innerText === "Second Tab") {
    tabContentEle.innerText = "Second Tab Content";
  } else if (e.target.innerText === "Third Tab") {
    tabContentEle.innerText = "Third Tab Content";
  } else {
    tabContentEle.innerText = "Fourth Tab Content";
  }
};

tabEle.forEach((btn) => {
  btn.addEventListener("click", handleTabBtn);
});
