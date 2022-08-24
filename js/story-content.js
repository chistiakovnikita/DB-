
const swiper = document.querySelector('.swiper-1');

swiper.addEventListener('click', (evt) => {
    const target = evt.target.closest('.slide-action').dataset.person;
    const persons = document.querySelectorAll('.person');
    for(let i = 0; i < persons.length; i++) {
        const currentElement = persons[i];
        if(currentElement.dataset.person === target) {
            currentElement.classList.add('section__your-story--active')
        } else{
            currentElement.classList.remove('section__your-story--active')
            
        }
    }

})
