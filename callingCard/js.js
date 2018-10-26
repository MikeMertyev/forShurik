
window.onscroll = function() {

    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    console.log(window.pageYOffset);
    let currentScrollTop = document.querySelector("html").scrollTop;
    console.log(currentScrollTop);
    if (scrolled > 0 && !document.querySelector('.sticky')) {
        document.querySelector('.header').classList.add('sticky');
       // setTimeout(() => {window.scrollTo({
       //     top: 1,
       //     behavior: "smooth"
       // })}, 380)
        //window.scrollBy(0, 10);
    }  else if (scrolled === 0 && document.querySelector('.sticky')){
        document.querySelector('header').classList.remove('sticky')}
};