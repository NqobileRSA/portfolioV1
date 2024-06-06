// page loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  // Check screen width
  if (window.innerWidth >= 481 && window.innerWidth <= 767) {
    // Remove animation class for smaller screens
    loader.classList.remove("loader--hidden");
    document.body.removeChild(loader);
  } else {
    // Continue with the existing animation for larger screens
    loader.classList.add("loader--hidden");
  }
});

let i = 0;
let txt = 'function wait( ) {\nalert( \n"Patience, Nqobile is coding." \n  )}';
let speed = 25;

function typeWriter() {
  document.getElementById("demo").style.fontFamily = 'Consolas,"courier new"';
  const gifContainer = document.getElementById("gif-container");
  gifContainer.style.display = "block";
  if (i < txt.length) {
    let char = txt.charAt(i);
    let output = document.getElementById("demo");
    let className = "";

    if (char === "\n") {
      output.innerHTML += "<br>";
    } else if (char === " ") {
      className = "space";
    } else if (txt.substr(i, 5) === "alert") {
      className = "red";
      output.innerHTML += `<span class="${className}">alert</span>`;
      i += 4; // Skip the remaining characters in "alert"
    } else if (char === "(" || char === ")") {
      className = "purple";
    } else if (txt.substr(i, 34) === '"Patience, Nqobile is programming "') {
      className = "orange";
      output.innerHTML += `<span class="${className}">"Patience, Nqobile is programming "</span>`;
      i += 33; // Skip the remaining characters in the text
    } else if (char === "{" || char === "}") {
      className = "yellow";
    } else {
      className = "default";
    }

    if (className !== "red" && className !== "orange") {
      output.innerHTML += `<span class="${className}">${char}</span>`;
    }

    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("load", typeWriter);

// 3d tilt animation
(function () {
  let container1 = document.getElementById("container1"),
    inner1 = document.getElementById("inner1"),
    container2 = document.getElementById("container2"),
    inner2 = document.getElementById("inner2"),
    container3 = document.getElementById("container3"),
    inner3 = document.getElementById("inner3"),
    container4 = document.getElementById("container4"),
    inner4 = document.getElementById("inner4"),
    container5 = document.getElementById("container5"),
    inner5 = document.getElementById("inner5"),
    container6 = document.getElementById("container6"),
    inner6 = document.getElementById("inner6"),
    container7 = document.getElementById("container7"),
    inner7 = document.getElementById("inner7"),
    container8 = document.getElementById("container8"),
    inner8 = document.getElementById("inner8");

  let mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
      let e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function (e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function () {
      return "(" + this.x + "," + this.y + ")";
    },
  };

  mouse.setOrigin(container1);
  mouse.setOrigin(container2);
  mouse.setOrigin(container3);
  mouse.setOrigin(container4);
  mouse.setOrigin(container5);
  mouse.setOrigin(container6);
  mouse.setOrigin(container7);
  mouse.setOrigin(container8);

  let counter = 0;
  let refreshRate = 10;
  let isTimeToUpdate = function () {
    return counter++ % refreshRate === 0;
  };

  let onMouseEnterHandler = function (event, inner) {
    // Update the transform style directly within this handler
    mouse.updatePosition(event);
    updateTransformStyle(
      inner,
      (mouse.y / inner.offsetHeight / 2).toFixed(2),
      (mouse.x / inner.offsetWidth / 2).toFixed(2)
    );
  };

  let onMouseLeaveHandler = function (inner) {
    inner.style = "";
  };

  let onMouseMoveHandler = function (event, inner) {
    mouse.updatePosition(event);
    if (isTimeToUpdate()) {
      updateTransformStyle(
        inner,
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    }
  };

  let updateTransformStyle = function (inner, x, y) {
    let style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTransform = style;
    inner.style.mstransform = style;
    inner.style.oTransform = style;
  };

  container1.onmousemove = function (event) {
    onMouseMoveHandler(event, inner1);
  };
  container1.onmouseleave = function () {
    onMouseLeaveHandler(inner1);
  };
  container1.onmouseenter = function (event) {
    onMouseEnterHandler(event, inner1);
  };

  container2.onmousemove = function (event) {
    onMouseMoveHandler(event, inner2);
  };
  container2.onmouseleave = function () {
    onMouseLeaveHandler(inner2);
  };
  container2.onmouseenter = function (event) {
    onMouseEnterHandler(event, inner2);
  };

  container3.onmousemove = function (event) {
    onMouseMoveHandler(event, inner3);
  };
  container3.onmouseleave = function () {
    onMouseLeaveHandler(inner3);
  };
  container3.onmouseenter = function (event) {
    onMouseEnterHandler(event, inner3);
  };

  container4.onmousemove = function (event) {
    onMouseMoveHandler(event, inner4);
  };
  container4.onmouseleave = function () {
    onMouseLeaveHandler(inner4);
  };
  container4.onmouseenter = function (event) {
    onMouseEnterHandler(event, inner4);
  };

  container5.onmousemove = function (event) {
    onMouseMoveHandler(event, inner5);
  };
  container5.onmouseleave = function () {
    onMouseLeaveHandler(inner5);
  };
  container5.onmouseenter = function (event) {
    onMouseEnterHandler(event, inner5);
  };

  container6.onmousemove = function (event) {
    onMouseMoveHandler(event, inner6);
  };
  container6.onmouseleave = function () {
    onMouseLeaveHandler(inner6);
  };
  container6.onmouseenter = function (event) {
    onMouseEnterHandler(event, inner6);
  };

  container7.onmousemove = function (event) {
    onMouseMoveHandler(event, inner7);
  };
  container7.onmouseleave = function () {
    onMouseLeaveHandler(inner7);
  };
  container7.onmouseenter = function (event) {
    onMouseEnterHandler(event, inner7);
  };

  container8.onmousemove = function (event) {
    onMouseMoveHandler(event, inner8);
  };
  container8.onmouseleave = function () {
    onMouseLeaveHandler(inner8);
  };
  container8.onmouseenter = function (event) {
    onMouseEnterHandler(event, inner8);
  };
})();

// fade in onscroll
window.addEventListener("scroll", function () {
  let sections = document.querySelectorAll("section");
  sections.forEach(function (section) {
    let sectionTop = section.offsetTop;
    let sectionHeight = section.clientHeight;
    let windowScroll = window.pageYOffset;
    if (windowScroll > sectionTop - sectionHeight / 2) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
});

// form
function focus() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");

  name.addEventListener("focus", function () {
    name.classList.remove("unfocus");
    name.classlist.add("focus");
  });

  email.addEventListener("focus", function () {
    email.classList.remove("unfocus");
    email.classlist.add("focus");
  });
}

focus();
//  validation
{
}
// Weather
{
  const apiKey = "h2y7G1cWkBPfRXt2AejTdHwcCE2jezLG";

  async function getWeatherByLocation(container) {
    try {
      // Get user's current position using Geolocation API
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Fetch location key for the user's coordinates
        const locationData = await fetch(
          `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${latitude},${longitude}`
        );
        const locationResult = await locationData.json();
        const locationKey = locationResult.Key;
        const locationCity = locationResult.ParentCity.LocalizedName;
        const locationCountry = locationResult.Country.LocalizedName;

        // Fetch current weather for the location
        const weatherData = await fetch(
          `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`
        );
        const weatherResult = await weatherData.json();

        // Get the necessary weather information
        const temperature = weatherResult[0].Temperature.Metric.Value;
        const weatherText = weatherResult[0].WeatherText;

        // Get DOM elements within the provided container
        const weatherElement = container.querySelector(".weather");
        const temperatureElement = container.querySelector(".temperature");
        const weatherTextElement = container.querySelector(".weatherText");
        const cityElement = container.querySelector(".city");
        const countryElement = container.querySelector(".country");
        const dateElement = container.querySelector(".date");

        // Update the content of the DOM elements
        temperatureElement.innerText = `${temperature}°C`;
        weatherTextElement.innerText = `${weatherText}`;
        cityElement.innerText = `${locationCity}`;
        countryElement.innerText = `${locationCountry}`;

        const currentDate = new Date();
        const options = {
          weekday: "long",
          month: "long",
          day: "numeric",
        };
        dateElement.innerText = `${currentDate.toLocaleDateString(
          undefined,
          options
        )}`;
      });
    } catch (error) {
      console.log("Something went wrong");
    }
  }

  // Call the function for the desktop version
  const desktopContainer = document.querySelector(".navContainer");
  getWeatherByLocation(desktopContainer);

  // Call the function for the mobile version
  const mobileContainer = document.querySelector(".mobileNav");
  getWeatherByLocation(mobileContainer);
}

// responsive functionality
{
  // dynamic menu
  const openMenuElement = document.getElementById("openMenu");
  const closeMenuElement = document.getElementById("closeMenu");
  const menuElement = document.getElementById("menu");
  const overlayElement = document.getElementById("overlay");
  const links = document.querySelectorAll(".mobileNavList a");

  openMenuElement.addEventListener("click", toggleMenu);
  openMenuElement.addEventListener("touchstart", toggleMenu);

  closeMenuElement.addEventListener("click", toggleMenu);
  closeMenuElement.addEventListener("touchstart", toggleMenu);

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (window.innerWidth < 200 || window.innerWidth > 767) {
        menuElement.style.display = "none";
        overlayElement.style.display = "none"; // Hide the overlay
      }
    });
  });

  overlayElement.addEventListener("click", closeMenuOnMobile);
  overlayElement.addEventListener("touchstart", closeMenuOnMobile);

  function toggleMenu(e) {
    e.preventDefault();
    menuElement.style.display =
      menuElement.style.display === "block" ? "none" : "block";
    overlayElement.style.display =
      overlayElement.style.display === "block" ? "none" : "block";
  }

  function closeMenuOnMobile(e) {
    if (window.innerWidth >= 200 && window.innerWidth <= 767) {
      e.preventDefault();
      menuElement.style.display = "none";
      overlayElement.style.display = "none";
    }
  }
}
