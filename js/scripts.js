var $menu = $("#footer-nav");
var $menuArrow = $(".footer-nav__arrow");
var $menuLogo = $(".footer-nav__ux-logo");

var $sections = $(".section");
var $sectionsContent = $(".section__content");
var sectionIds = ["about-us", "works", "contribute"];

$menu.click(function () {
    sectionIds.forEach(function (sectionId) {
        $menu.removeClass("footer-nav--" + sectionId);
        $menuArrow.removeClass("footer-nav__arrow--" + sectionId);
        $menuLogo.removeClass("footer-nav__ux-logo--" + sectionId);
    });
    $menu.removeClass("footer-nav--active");
    $sections.removeClass("section--active");
    $sectionsContent.removeClass("section__content--active");
});

sectionIds.forEach(function (sectionId) {
    $("#btn-" + sectionId).click(function () {
        var $section = $("#" + sectionId);
        var $sectionContent = $("#" + sectionId + " .section__content");
        $menu.addClass("footer-nav--active", "footer-nav--" + sectionId);
        $menuArrow.addClass("footer-nav__arrow--" + sectionId);
        $menuLogo.addClass("footer-nav__ux-logo--" + sectionId);
        $section.addClass("section--active");
        $sectionContent.addClass("section__content--active");
    });
});
