var menu = document.getElementById('footer-nav');
var navBtns = document.getElementsByClassName('home-nav__link');
var sections = document.getElementsByClassName('section');
var sectionsContent = document.getElementsByClassName('section__content');

var sectionTeam = document.getElementById('about-us');
var sectionWorks = document.getElementById('works');
var sectionContribute = document.getElementById('contribute');

var btnTeam = document.getElementById('btn-about-us');
var btnWorks = document.getElementById('btn-works');
var btnContribute = document.getElementById('btn-contribute');

function backHome() {
    menu.classList.remove('footer-nav--active', 'footer-nav--about-us', 'footer-nav--works', 'footer-nav--contribute');

    for (i = 0; i < sections.length; i++) {
        sections[i].classList.remove('section--active');
    }

    for (i = 0; i < sectionsContent.length; i++) {
        sectionsContent[i].classList.remove('section__content--active');
    }
}

function teamAppear() {
    sectionTeam.classList.add('section--active');
    menu.classList.add('footer-nav--active', 'footer-nav--about-us');
    var sectionContent = sectionTeam.getElementsByClassName('section__content');
    sectionContent[0].classList.add('section__content--active');
}

function worksAppear() {
    sectionWorks.classList.add('section--active');
    menu.classList.add('footer-nav--active', 'footer-nav--works');
    var sectionContent = sectionWorks.getElementsByClassName('section__content');
    sectionContent[0].classList.add('section__content--active');
}

function contributeAppear() {
    sectionContribute.classList.add('section--active');
    menu.classList.add('footer-nav--active', 'footer-nav--contribute');
    var sectionContent = sectionContribute.getElementsByClassName('section__content');
    sectionContent[0].classList.add('section__content--active');
}

btnTeam.addEventListener('click', teamAppear);
btnWorks.addEventListener('click', worksAppear);
btnContribute.addEventListener('click', contributeAppear);

menu.addEventListener('click', backHome);
