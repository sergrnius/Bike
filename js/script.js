window.addEventListener('DOMContentLoaded', () => {

    // slider top
    
    let prev = document.querySelector('.bike__button-prev');
    let next = document.querySelector('.bike__button-next');
    let slidesBike = document.querySelectorAll('.bike__slider-item');
    let slidesBikeWrapper = document.querySelector('.bike__slider-wrapper');
    let slidesBikeField = document.querySelector('.bike__slider-inner');
    let temporolWidthSlider = window.getComputedStyle(slidesBikeWrapper).width;
    let widthSlide = +temporolWidthSlider.slice(0, temporolWidthSlider.length - 2);
    let slideIndex = 1;
    let offset = 0;

    slidesBikeField.style.width = (100 * slidesBike.length) + '%';
    slidesBikeField.style.display = 'flex';
    slidesBikeField.style.transition = '0.5s all';

    slidesBikeWrapper.style.overflow = 'hidden';
    slidesBike.forEach(item => {
        item.style.width = widthSlide;
    });

    slidesBikeWrapper.style.position = 'relative';

    let dots = document.createElement('ol');
    let arr = [];
    dots.classList.add('dots-top');
    slidesBikeField.after(dots);

    for(let i = 0; i < slidesBike.length; i++) {
        let dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot-top');
        dots.append(dot);
        arr.push(dot);
    }

    arr[slideIndex - 1].style.backgroundColor = '#FF4040';

    let prevEvent = () => {
        if(offset == 0) {
            offset += widthSlide * (slidesBike.length - 1);
        } else {
            offset -= widthSlide;
        }

        if (slideIndex == 1) {
            slideIndex = slidesBike.length;
        } else {
            slideIndex--;
        }

        slidesBikeField.style.transform = `translate(-${offset}px)`;

        arr.forEach(item => item.style.backgroundColor = '#131313');
        arr[slideIndex - 1].style.backgroundColor = '#FF4040';
    }

    let nextEvent = () => {
        if(offset == widthSlide * (slidesBike.length - 1)) {
            offset = 0;
        } else {
            offset +=widthSlide;
        }

        if(slideIndex == slidesBike.length) {
            slideIndex = 1;
        } else {
            slideIndex++
        }

        slidesBikeField.style.transform = `translate(-${offset}px)`;
        arr.forEach(item => item.style.backgroundColor = '#131313');
        arr[slideIndex - 1].style.backgroundColor = '#FF4040';
    }

    arr.forEach(item => {
        item.addEventListener('click', (e) => {
            let slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = widthSlide * (slideTo - 1);
    
            slidesBikeField.style.transform = `translateX(-${offset}px)`;
            
            arr.forEach(item => item.style.backgroundColor = '#131313');
            arr[slideIndex - 1].style.backgroundColor = '#FF4040';
        });
    });

    prev.addEventListener('click', prevEvent);
    next.addEventListener('click', nextEvent);

    //slider bottom

    let sliderWrapper = document.querySelector('.slider__wrapper');
    let sliderField = document.querySelector('.slider__inner');
    let slidesItem = document.querySelectorAll('.slider__item');
    let temporalWidth = window.getComputedStyle(sliderWrapper).width;
    let slidWidth = +temporalWidth.slice(0, temporalWidth.length - 2);
    let slideOffset = 0;
    let slideCounter = 1;
    let buttonPrev = document.querySelector('.slider__prev');
    let buttonNext = document.querySelector('.slider__next');

    sliderField.style.width = (100 * slidesItem.length) + '%';
    sliderField.style.display = 'flex';
    sliderField.style.transition = '0.5s all';

    sliderWrapper.style.overflow = 'hidden';
    slidesItem.forEach(item => {
        item.style.width = slidWidth;
    });

    sliderWrapper.style.position = 'relative';

    let arrDotsSlider = [];
    let dotsSlider = document.createElement('ol');
    dotsSlider.classList.add('dots-bottom');
    sliderField.after(dotsSlider);

    for(let i = 0; i < slidesItem.length; i++) {
        let dotSlider = document.createElement('li');
        dotSlider.setAttribute('data-slide-to', i + 1);
        dotSlider.classList.add('dot-bottom');
        dotsSlider.append(dotSlider);
        arrDotsSlider.push(dotSlider);
    }

    arrDotsSlider[slideCounter - 1].style.backgroundColor = '#FF4040';

    arrDotsSlider.forEach(item => {
        item.addEventListener('click', (e) => {
            let slideMarc = e.target.getAttribute('data-slide-to');
    
            slideCounter = slideMarc;
            slideOffset = slidWidth * (slideMarc - 1);
    
            sliderField.style.transform = `translateX(-${slideOffset}px)`;
            
            arrDotsSlider.forEach(item => item.style.backgroundColor = '#131313');
            arrDotsSlider[slideCounter - 1].style.backgroundColor = '#FF4040';
        })
    })

    let slideEventNext = () => {
        if (slideOffset == slidWidth * (slidesItem.length - 1)) {
            slideOffset = 0;
        } else {
            slideOffset += slidWidth;
        }

        if(slideCounter == slidesItem.length) {
            slideCounter = 1;
        } else {
            slideCounter++
        }

        sliderField.style.transform = `translateX(-${slideOffset}px)`;
        arrDotsSlider.forEach(item => item.style.backgroundColor = '#131313');
        arrDotsSlider[slideCounter - 1].style.backgroundColor = '#FF4040';
    }

    let slideEventPrev = () => {
        if(slideOffset == 0) {
            slideOffset += slidWidth * (slidesItem.length - 1);
        } else {
            slideOffset -= slidWidth;
        }

        if(slideCounter == 1) {
            slideCounter = slidesItem.length;
        } else {
            slideCounter--
        }

        sliderField.style.transform = `translateX(-${slideOffset}px)`;
        arrDotsSlider.forEach(item => item.style.backgroundColor = '#131313');
        arrDotsSlider[slideCounter - 1].style.backgroundColor = '#FF4040';
    }

    buttonPrev.addEventListener('click', slideEventPrev);
    buttonNext.addEventListener('click', slideEventNext);

    // order slide

    // let orderBtn = document.querySelectorAll('.order__btn');
    // let orderSlide = document.querySelectorAll('.order__img');

    // orderBtn.forEach((item, i) => {
    //     item.setAttribute('data-order-btn', i + 1)
    // })

    // orderSlide.forEach((item, i) => {
    //     item.setAttribute('data-order-slide', i + 1)
    // })

    // orderBtn.forEach(item => {
    //     item.addEventListener('click', () => {

    //     })
    // })

    let orderSliderRed = document.querySelector('[data-redBike]');
    let orderSliderGrey = document.querySelector('[data-greyBike]');
    let orderSliderWhite = document.querySelector('[data-whiteBike]');

    let orderBtnRed = document.querySelector('.order__btn-red');
    let orderBtnWhite = document.querySelector('.order__btn-white');
    let orderBtnGrey = document.querySelector('.order__btn-grey');

    orderSliderRed.classList.add('hidden');
    orderSliderGrey.classList.add('hidden');

    orderBtnRed.addEventListener('click', () => {
        orderSliderRed.classList.add('show');
        orderSliderRed.classList.remove('hidden');

        orderSliderGrey.classList.add('hidden');
        orderSliderWhite.classList.add('hidden');
    })

    orderBtnGrey.addEventListener('click', () => {
        orderSliderGrey.classList.add('show');
        orderSliderGrey.classList.remove('hidden');

        orderSliderRed.classList.add('hidden');
        orderSliderWhite.classList.add('hidden');
    })

    
    orderBtnWhite.addEventListener('click', () => {
        orderSliderWhite.classList.add('show');
        orderSliderWhite.classList.remove('hidden');

        orderSliderRed.classList.add('hidden');
        orderSliderGrey.classList.add('hidden');
    })
})  