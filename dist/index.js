let navbar = document.querySelector("nav__hamburger-input");
let mobile = document.querySelector("nav__links-mobile");
(function () {
  navbar.addEventListener("change", function () {
    if (this.checked) {
      mobile.addClass("flex-vagyok");
    }
    else {
      mobile.removeClass("flex-vagyok");
    }
  })
})();