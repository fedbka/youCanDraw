function makeSlide(index, allSlides, allButtons) {

    toogleButtonCssClassName = 'slider__button_type_current';
    const button = allButtons[index];
    const slide = allSlides[index];
    toggleItemCssClassName = 'slider__item_type_hidden';

    if (slide.classList.contains('images__item')) toggleItemCssClassName = 'slider__item_type_hidden-image';
    if (slide.classList.contains('cards__item')) toggleItemCssClassName = 'slider__item_type_hidden-card';

    allButtons.forEach(item => item == button ? item.classList.add(toogleButtonCssClassName) : item.classList.remove(toogleButtonCssClassName));
    allSlides.forEach(item => item == slide ? item.classList.remove(toggleItemCssClassName) : item.classList.add(toggleItemCssClassName))

}

function addSliderFunctionality(section) {

    const sliders = [...section.querySelectorAll('.slider__items')];
    const slidersButtons = [...section.querySelectorAll('.slider__buttons')];

    sliders.forEach((slider, index) => {
        const sliderButtons = slidersButtons[index];
        const slides = [...slider.querySelectorAll('.slider__item')];
        const buttons = [...sliderButtons.querySelectorAll('.slider__button')];

        buttons.forEach((button, index, allButtons) => {
            button.addEventListener('click', (event) => makeSlide(index, slides, allButtons))
        })

    });
}

const sectionsWithSlider = [...document.querySelectorAll('.slider')];
sectionsWithSlider.forEach(section => addSliderFunctionality(section));