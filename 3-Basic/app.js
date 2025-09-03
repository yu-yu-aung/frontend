const darkThemeElement = document.querySelector(".theme-switch-btn");

darkThemeElement.addEventListener("click", () => {
  //console.log("Dark");
  if (darkThemeElement.innerText === "Dark Mode") {
    darkThemeElement.innerText = "Light Mode";
  } else {
    darkThemeElement.innerText = "Dark Mode";
  }
  document.body.classList.toggle("dark-theme");
});
