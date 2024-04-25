const englishElements = document.querySelectorAll(".english");
const hindiElements = document.querySelectorAll(".hindi");
const langElem = document.querySelector(".lang");

langElem.addEventListener("change", (e) => {
  const selectedLang = langElem.value;
  if (selectedLang === "hindi") {
    showElements(hindiElements);
    hideElements(englishElements);
  } else {
    showElements(englishElements);
    hideElements(hindiElements);
  }
});

function showElements(elements) {
  elements.forEach((element) => {
    element.style.display = "block";
  });
}

function hideElements(elements) {
  elements.forEach((element) => {
    element.style.display = "none";
  });
}
