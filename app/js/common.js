window.onload = () => {
    'use srtict'

    var slideIndex = 0;
    showSlides();

    function showSlides() {
        // var i;
        var slides = document.getElementsByClassName("slide");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.opacity= "0";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.opacity = "1";
        setTimeout(showSlides, 4000);
    }


    var slideIndex = 1;
    showSlidesClick(slideIndex);

    function plusSlides(n) {
        showSlidesClick(slideIndex += n);
    }

    function currentSlideClick(n) {
        showSlides(slideIndex = n);
    }

    function showSlidesClick(n) {
        // var i;
        var slides = document.getElementsByClassName("slide");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.opacity = "0";
        }
        slides[slideIndex-1].style.opacity = "1";
    }

    function closePopup () {
        let popup = document.querySelector('#popup');
        popup.style.opacity = "0";
        setTimeout( ()  => {
            popup.style.display = 'none';
        }, 200)
    }

    function openPopup() {
        let popup = document.querySelector('#popup');
        popup.style.display = "block";
        setTimeout( ()  => {
            popup.style.opacity = '1';
        }, 50)
    }

    document.querySelector('#arrow-left').addEventListener('click', function (e) {
        plusSlides(-1);
    })

    document.querySelector('#arrow-right').addEventListener('click', function (e) {
        plusSlides(1);
    })

    document.querySelector('#close').addEventListener('click', function () {
        closePopup();
    })

    document.querySelector('#callback').addEventListener('click', function () {
        openPopup();
    })

}

