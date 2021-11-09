let off = document.getElementById("off");
let on = document.getElementById("on");
let navToggle = document.querySelector(".nav-toggle");

function important() {
  if (window.innerWidth <= 700) {
    on.style.display = "none";
    off.style.display = "block";
    navToggle.style.display = "none";
  }
}
off.onclick = function () {
  off.style.display = "none";
  on.style.display = "block";
  navToggle.style.display = "flex";
};
on.onclick = function () {
  on.style.display = "none";
  off.style.display = "block";
  navToggle.style.display = "none";
};
/* Button Scroll To Up */
let scrollBtn = document.getElementById("scrollBtn");

window.onscroll = function () {
  if (window.scrollY >= 500) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }

  let header = document.getElementById("header");
  if (window.scrollY >= 10) {
    header.style.cssText = "width: 100%;border-radius: 0;top:0;";
  } else {
    header.style.cssText = "width: 96%;border-radius: 5rem;top:2rem;";
  }
};

scrollBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

let home = document.getElementById("home");
home.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  important();
};

let about = document.getElementById("about");
about.onclick = function () {
  if (window.innerWidth <= 700) {
    window.scrollTo({
      top: 360,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  }
  important();
};

let teacher = document.getElementById("teacher");
teacher.onclick = function () {
  if (window.innerWidth <= 700) {
    window.scrollTo({
      top: 780,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: 1200,
      behavior: "smooth",
    });
  }
  important();
};

let course = document.getElementById("course");
course.onclick = function () {
  if (window.innerWidth <= 700) {
    window.scrollTo({
      top: 1550,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: 1800,
      behavior: "smooth",
    });
  }
  important();
};

let review = document.getElementById("review");
review.onclick = function () {
  if (window.innerWidth <= 700) {
    window.scrollTo({
      top: 1920,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: 2500,
      behavior: "smooth",
    });
  }
  important();
};

let contact = document.getElementById("contact");
contact.onclick = function () {
  if (window.innerWidth <= 700) {
    window.scrollTo({
      top: 2350,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: 2950,
      behavior: "smooth",
    });
  }
  important();
};

