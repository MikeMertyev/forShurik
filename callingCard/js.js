//let d = 100;
//
//
//window.addEventListener("wheel", event => stickHeader(event));
//
//function stickHeader(event) {
//    //console.log(window.pageYOffset);
//    //if (this.scrollTop) {
//    //document.querySelector('header').classList.add('sticky')}
//    //}  else {document.querySelector('.header').classList.remove('.sticky')}
//    //let scrolled = window.pageYOffset;
//    //if (scrolled > scrolled1) {
//    //    d = d - 2;
//    //    console.log(d);
//    //    document.querySelector('.header').style.height = `${d}vh`;
//    //    scrolled1 = window.pageYOffset;
//    //} else if (scrolled < scrolled1) {
//    //    d = d + 2;
//    //    document.querySelector('.header').style.height = `${d}vh`;
//    //    scrolled1 = window.pageYOffset;
//    //}
//    //if (event.deltaY < 0) {
//    //    //console.log('scrolling up');
//    //    document.querySelector('header').classList.remove('sticky')
//    //    //document.getElementById('status').innerHTML = 'scrolling up';
//    //}
//    if (event.deltaY > 0 && d >= 50) {
//        d = d - 8;
//        //console.log('scrolling down');
//        document.querySelector('.header').style.height = `${d}vh`;
//        //document.querySelector('.header').classList.add('sticky');
//        //document.getElementById('status').innerHTML = 'scrolling down';
//        console.log(d);
//    } else if (event.deltaY < 0 && d < 100) {
//            d = d + 8;
//            document.querySelector('.header').style.height = `${d}vh`;
//            console.log(d);
//        //    scrolled1 = window.pageYOffset;
//        }
//}

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
    //if (document.querySelector('.sticky') && scrolled ===0) {
    //    console.log(scrolled);
    //    window.scrollTo( 0, 1 )
    //}
};