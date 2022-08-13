const MrJames = document.querySelector('.swiper-slide-active');
const sectionYourStory = document.querySelector('.section__your-story');
const sectionMrJames = document.querySelector('.section__MrJames');

function contentMrJames() {
    sectionYourStory .classList.add('section__your-story--active')
    sectionMrJames.classList.add('section__MrJames--active')
    sectionMrAhmed.classList.remove('section__MrAhmed--active')
    sectionMrMarco.classList.remove('section__MrMarco--active')
    
}
MrJames.addEventListener('click', contentMrJames)



const MrAhmed = document.querySelector('.swiper-slide-next');
const sectionMrAhmed = document.querySelector('.section__MrAhmed');

function contentMrAhmed() {
    sectionYourStory .classList.add('section__your-story--active')
    sectionMrAhmed.classList.add('section__MrAhmed--active')
    sectionMrJames.classList.remove('section__MrJames--active')
    sectionMrMarco.classList.remove('section__MrMarco--active')
}
MrAhmed.addEventListener('click', contentMrAhmed)



const MrMarco= document.querySelector('.swiper-slide-duplicate-prev');
const sectionMrMarco = document.querySelector('.section__MrMarco');

function contentMrMarco() {
    sectionYourStory .classList.add('section__your-story--active')
    sectionMrMarco.classList.add('section__MrMarco--active')
    sectionMrJames.classList.remove('section__MrJames--active')
    sectionMrAhmed.classList.remove('section__MrAhmed--active')
}
MrMarco.addEventListener('click', contentMrMarco)