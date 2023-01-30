window.onscroll = function() {
    const navbar = document.getElementsByClassName("nav22")[0];
    const threshold = navbar.offsetHeight;
  
    if (window.pageYOffset >= threshold) {
      navbar.style.backgroundColor = "black";
    } else {
      navbar.style.backgroundColor = "transparent";
    }
  };