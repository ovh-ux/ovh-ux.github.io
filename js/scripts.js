var menu = document.getElementById("footer-nav");
var menuArrow = document.querySelector(".footer-nav__arrow");
var menuLogo = document.querySelector(".footer-nav__ux-logo");

var sections = document.getElementsByClassName("section");
var sectionsContent = document.getElementsByClassName("section__content");
var sectionIds = ["about-us", "works", "contribute"];

menu.addEventListener("click", function () {
    menu.classList.remove("footer-nav--active");
    sectionIds.forEach(function (sectionId) {
        menu.classList.remove("footer-nav--" + sectionId);
        menuArrow.classList.remove("footer-nav__arrow--" + sectionId);
        menuLogo.classList.remove("footer-nav__ux-logo--" + sectionId);
    });

    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove("section--active");
    }

    for (var i = 0; i < sectionsContent.length; i++) {
        sectionsContent[i].classList.remove("section__content--active");
    }
});

sectionIds.forEach(function (sectionId) {
    document.getElementById("btn-" + sectionId).addEventListener("click", function () {
        var section = document.getElementById(sectionId);
        var sectionContent = document.querySelector("#" + sectionId + " .section__content");
        menu.classList.add("footer-nav--active", "footer-nav--" + sectionId);
        menuArrow.classList.add("footer-nav__arrow--" + sectionId);
        menuLogo.classList.add("footer-nav__ux-logo--" + sectionId);
        section.classList.add("section--active");
        sectionContent.classList.add("section__content--active");
    });
});
