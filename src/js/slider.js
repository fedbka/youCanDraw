function addSlideActionsToButtons(buttons, slidesToToggle) {
    buttons.forEach(button => {
        button.addEventListener('click', () => slidesToToggle.forEach(slide => slide.classList.toggle('slider__item_hidden')));
    });
}

function addActionsToSlides(slides, sliderButtons) {

    slides.forEach((currentSlide, index, allSlides) => {
        previousSlide = allSlides[index == 0 ? allSlides.length - 1 : index - 1];
        nextSlide = allSlides[index == allSlides.length - 1 ? 0 : index + 1];

        console.log({previousSlide, nextSlide});

    });
}

function addSliderFunctionalityToSection(section) {

    const slider = section.querySelectorAll('.slider__items');
    const slides = section.querySelectorAll('.slider__item');
    const elementWithSliderButtons = section.querySelector('.slider__buttons');
    const sliderButtons = elementWithSliderButtons.querySelectorAll('.slider__button');

    console.log({slider, slides, elementWithSliderButtons, sliderButtons});

    if (!slider || !slides || !elementWithSliderButtons || !sliderButtons || slides.length != sliderButtons.length) return;

    addActionsToSlides(slides, sliderButtons);

}

const sectionsWithSlider = [...document.querySelectorAll('.slider')];
sectionsWithSlider.forEach(item => addSliderFunctionalityToSection(item));