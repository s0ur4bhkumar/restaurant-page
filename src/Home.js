export default(function () {
  const homeBtn = document.querySelector(".Home");
  const container = document.getElementById("container");
  const p = document.createElement("p");
  const schedule = document.createElement("div");
  schedule.classList.add("schedule");
  const Home = function () {
    p.textContent = `Welcome to Evergreen, where fresh flavors and vibrant dishes come to life.
    Our menu is a celebration of nature's finest ingredients, crafted into delicious and wholesome vegetarian meals.
    At Evergreen, we're passionate about creating a dining experience that's both nourishing for the body and delightful for the senses.
    Join us and discover the art of vegetarian cuisine.`;

    schedule.innerHTML = `<p>MONDAY-FRIDAY: <span> 8 AM to 10PM</span></p>
                          <p>SATURDAY: <span> 7 AM to 12PM</span></p>
                          <p>SUNDAY: <span> 12 PM to 8 PM</span></p>`;
    container.append(p,schedule)
  };
  homeBtn.addEventListener("click", () => {
    Home();
    container.append(p, schedule);
    homeBtn.style.backgroundColor = "rgb(254 206 121)";
    return;
  });
  homeBtn.style.backgroundColor = "rgb(254 206 121)";
  Home();
})();

