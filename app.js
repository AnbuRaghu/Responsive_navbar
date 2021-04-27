const navSlide = () => {
  const burger = document.querySelector(".burger");
  let nav = document.querySelector(".nav-links");
  //get all li in Nav-links
  const navLink = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //toggle Nav
    nav.classList.toggle("nav-active");
    console.log("clicked");
    //Animate links
    navLink.forEach((link, index) => {
      // console.log(index)
      //console.log(link)
      // if already animation exist in the link set it to empty
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 1.3
        }s`;
      }
      console.log(index / 7 + 0.2);
    });
    //burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
