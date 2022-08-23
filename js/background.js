function changeBackground(ms) {
    let count = 0;
    const images = [
        'url(/images/header-slides/header_bg-1.jpg)',
        'url(/images/header-slides/header_bg-2.jpg)',
        'url(/images/header-slides/header_bg-3.jpg)',
        'url(/images/header-slides/header_bg-4.jpg)',
        
    ];
    const header = document.querySelector('.header');
    setInterval(function () {
        header.style.background = images[count];
        if (count === images.length - 1) {
            count = 0;
        } else {
            count++
        }
    }, ms)
}
changeBackground(3000)