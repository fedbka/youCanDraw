function makeSlide(index, allSlides, allButtons) {

    const button = allButtons[index];
    const slide = allSlides[index];
    
    toogleButtonCssClassName = 'slider__button_type_current';
    toggleItemCssClassName = 'slider__item_type_hidden';

    if (slide.classList.contains('images__item')) toggleItemCssClassName = toggleItemCssClassName + '-image';
    if (slide.classList.contains('cards__item')) toggleItemCssClassName = toggleItemCssClassName + '-card';

    allButtons.forEach(item => item == button ? item.classList.add(toogleButtonCssClassName) : item.classList.remove(toogleButtonCssClassName));
    allSlides.forEach(item => item == slide ? item.classList.remove(toggleItemCssClassName) : item.classList.add(toggleItemCssClassName))

}

function addSliderFunctionality(section) {

    const allSliders = [...section.querySelectorAll('.slider__items')];
    const allSlidersButtons = [...section.querySelectorAll('.slider__buttons')];

    allSliders.forEach((slider, index) => {
 
        const slides = [...slider.querySelectorAll('.slider__item')];
        const buttons = [...allSlidersButtons[index].querySelectorAll('.slider__button')];

        buttons.forEach((button, index, allButtons) => {
            button.addEventListener('click', (event) => makeSlide(index, slides, allButtons))
        })

    });
}

const sectionsWithSlider = [...document.querySelectorAll('.slider')];
sectionsWithSlider.forEach(section => addSliderFunctionality(section));