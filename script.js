// starting point //
let currentIndex = 1;
displaySlides(currentIndex);

// next/previous controls //
function setSlides(num) {
    displaySlides(currentIndex += num);
}


function displaySlides(num) {
    let x;
    const slides = document.getElementsByClassName("imageSlides");
    if (num > slides.length) { currentIndex = 1 } // if slide is past last then goes back to first //
    if (num < 1) { currentIndex = slides.length } // if slide is less than the first, goes to last slide //
    for (x = 0; x < slides.length; x++) {         // increase as progressing through slides //
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}
