const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    const bottom = sec.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    // Quando a seção entra na tela → adiciona .visible
    if (top < windowHeight * 0.85 && bottom > 100) {
      sec.classList.add("visible");
    } 
    // Quando sai da tela → remove .visible
    else {
      sec.classList.remove("visible");
    }
  });
});