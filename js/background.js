function changeBackground(ms) {
    let count = 0;
    const images = [
        
       
        
        'url(/images/page_About/header/header_bg-4.jpg)',
        'url(/images/page_About/header/header_bg-5.jpg)',
        'url(/images/page_About/header/header_bg-6.jpg)',
        'url(/images/page_About/header/header_bg-8.jpg)',
        'url(/images/page_About/header/header_bg-9.jpg)',
        'url(/images/page_About/header/header_bg-10.jpg)',
        'url(/images/page_About/header/header_bg-11.jpg)',
        'url(/images/page_About/header/header_bg-12.jpg)',
        'url(/images/page_About/header/header_bg-13.jpg)',
        
       

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
changeBackground(7000)