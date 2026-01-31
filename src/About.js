(function () {
  const container = document.getElementById("container");
  container.style.alignItems = 'center';
  container.style.width = '100%';
  const aboutBtn = document.querySelector(".About");
  const homeBtn = document.querySelector(".Home");
  const menuBtn = document.querySelector(".Menu");
  const About = () => {
    container.innerHTML = `<pre>PHONE NUMBER: 7629402234
            E-MAIL:       abc@ymail.business.com
         ADRESS:       loreme ipsum dolor </pre>`;
  };

  aboutBtn.addEventListener("click", () => {
    About();
    aboutBtn.style.backgroundColor = "rgb(254 205 120)";
    homeBtn.style.backgroundColor = "rgb(152 141 54)";
    menuBtn.style.backgroundColor = "rgb(152 141 54)";
    return;
  });
})();
