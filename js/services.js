//Event1

const sectionBlockDesign = document.querySelector('.section__block-design');
const contentBlockHello = document.querySelector('.section-services-option__content-block-hello');
const contentBlock1 = document.querySelector('.section-services-option__content-block1');

function designNew() {
    contentBlockHello.classList.add('section-services-option__content-block-hello--active')
    contentBlock1.classList.add('section-services-option__content-block1--active')
    contentBlock2.classList.remove('section-services-option__content-block2--active')
    contentBlock3.classList.remove('section-services-option__content-block3--active')
    contentBlock4.classList.remove('section-services-option__content-block4--active')
}

sectionBlockDesign.addEventListener('click', designNew)

//Event2

const sectionBlockInterior = document.querySelector('.section__block-interior');
const contentBlock2 = document.querySelector('.section-services-option__content-block2');

function interiorNew() {
    contentBlockHello.classList.add('section-services-option__content-block-hello--active')
    contentBlock2.classList.add('section-services-option__content-block2--active')
    contentBlock1.classList.remove('section-services-option__content-block1--active')
    contentBlock3.classList.remove('section-services-option__content-block3--active')
    contentBlock4.classList.remove('section-services-option__content-block4--active')
}


sectionBlockInterior.addEventListener('click', interiorNew)

//Event3

const sectionBlockBuild = document.querySelector('.section__block-build');
const contentBlock3 = document.querySelector('.section-services-option__content-block3');

function buildNew() {
    contentBlockHello.classList.add('section-services-option__content-block-hello--active')
    contentBlock3.classList.add('section-services-option__content-block3--active')
    contentBlock1.classList.remove('section-services-option__content-block1--active')
    contentBlock2.classList.remove('section-services-option__content-block2--active')
    contentBlock4.classList.remove('section-services-option__content-block4--active')
}
sectionBlockBuild.addEventListener('click', buildNew)

//Event4

const sectionBlockRenovation = document.querySelector('.section__block-renovation');
const contentBlock4 = document.querySelector('.section-services-option__content-block4');

function renovationNew() {
    contentBlockHello.classList.add('section-services-option__content-block-hello--active')
    contentBlock4.classList.add('section-services-option__content-block4--active')
    contentBlock1.classList.remove('section-services-option__content-block1--active')
    contentBlock2.classList.remove('section-services-option__content-block2--active')
    contentBlock3.classList.remove('section-services-option__content-block3--active')
}
sectionBlockRenovation.addEventListener('click', renovationNew)
