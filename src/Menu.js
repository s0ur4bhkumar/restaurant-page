(function () {
  const container = document.getElementById("container");
  const aboutBtn = document.querySelector(".About");
  const homeBtn = document.querySelector(".Home");
  const menuBtn = document.querySelector(".Menu");

  const menu = () => {
    container.innerHTML = "";
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat( auto-fill, minmax(300px,1fr))";
    container.style.gridTemplateRows = "repeat( auto-fill, minmax(300px,1fr))";
    container.style.gap = "12px";
    for (let i = 0; i < 6; i++) {
      const card = document.createElement("div");
      card.classList.add("card");
      container.append(card);
    }
  };

  menuBtn.addEventListener("click", () => {
    menu();
    homeBtn.style.backgroundColor = "rgb(152 141 54)";
    aboutBtn.style.backgroundColor = "rgb(152 141 54)";
    menuBtn.style.backgroundColor = "rgb(254 206 121)";
    return;
  });
})();
