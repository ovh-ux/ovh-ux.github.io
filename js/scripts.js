const menu = document.getElementById('footer-nav');
const menuArrow = document.querySelector('.footer-nav__arrow');
const menuLogo = document.querySelector('.footer-nav__ux-logo');

const sections = document.getElementsByClassName('section');
const sectionsContent = document.getElementsByClassName('section__content');
const sectionIds = ['about-us', 'works', 'contribute'];

menu.addEventListener('click', () => {
    menu.classList.remove('footer-nav--active');
    sectionIds.forEach((sectionId) => {
        menu.classList.remove(`footer-nav--${sectionId}`);
        menuArrow.classList.remove(`footer-nav__arrow--${sectionId}`);
        menuLogo.classList.remove(`footer-nav__ux-logo--${sectionId}`);
    });

    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove('section--active');
    }

    for (let i = 0; i < sectionsContent.length; i++) {
        sectionsContent[i].classList.remove('section__content--active');
    }
});

sectionIds.forEach((sectionId) =>
    document.getElementById(`btn-${sectionId}`).addEventListener('click', () => {
        const section = document.getElementById(sectionId);
        const sectionContent = document.querySelector(`#${sectionId} .section__content`);
        menu.classList.add('footer-nav--active', `footer-nav--${sectionId}`);
        menuArrow.classList.add(`footer-nav__arrow--${sectionId}`);
        menuLogo.classList.add(`footer-nav__ux-logo--${sectionId}`);
        section.classList.add('section--active');
        sectionContent.classList.add('section__content--active');
}));
