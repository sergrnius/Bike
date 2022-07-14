'use strict';

window.addEventListener('DOMContentLoaded', () => {
    let slidesBike = document.querySelectorAll('.bike__slider-item');
    let slidesBikeWrapper = document.querySelector('.bike__slider-wrapper');
    let slidesBikeField = document.querySelector('.bike__slider-inner');
    let prev = document.querySelector('.bike__button-prev');
    let next = document.querySelector('.bike__button-next');
    let width = window.getComputedStyle(slidesBikeWrapper).width;
    let slideIndex = 1;
    let offset = 0;

    let dots = document.createElement('ol');
    let arr = [];
    dots.classList.add('carousel-indicators');
    slidesBikeWrapper.append(dots);
    for(let i = 0; i < slidesBike.length; i++) {
        let dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        dots.append(dot);
        arr.push(dot);
    }
    arr[slideIndex - 1].style.backgroundColor = '#FF4040';

    function arrFilter(arrey, atribute, width, Field) {
        arrey.forEach(item => {
            item.addEventListener('click', (e) => {
                let slideTo = e.target.getAttribute(atribute);
        
                slideIndex = slideTo;
                offset = +width.slice(0, width.length - 2) * (slideTo - 1);
        
                Field.style.transform = `translateX(-${offset}px)`;
                
                arrey.forEach(item => item.style.backgroundColor = '#131313');
                arrey[slideIndex - 1].style.backgroundColor = '#FF4040';
            });
        });
    }
    arrFilter(arr, 'data-slide-to', width, slidesBikeField);

    function getStyle(Field, Wrapper, slides, width) {
        Field.style.width = (100 * slidesBike.length) + '%';
        Field.style.display = 'flex';
        Field.style.transition = '0.5s all';
    
        Wrapper.style.overflow = 'hidden';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        Wrapper.style.position = 'relative';
    }
    
    getStyle(slidesBikeField, slidesBikeWrapper, slidesBike);

    function nextEvent(slidesBike, slidesBikeField, arr, width) {
            if(offset == +width.slice(0, width.length - 2) * (slidesBike.length - 1)) {
                offset = 0;
            } else {
                offset += +width.slice(0, width.length - 2);
            }
            if(slideIndex == slidesBike.length) {
                slideIndex = 1;
            } else {
                slideIndex++;
            }
            slidesBikeField.style.transform = `translateX(-${offset}px)`;
            arr.forEach(item => item.style.backgroundColor = '#131313');
            arr[slideIndex - 1].style.backgroundColor = '#FF4040';
    }

    function prevEvent(slidesBike, slidesBikeField, arr, width) {
            if (offset == 0) {
                offset = +width.slice(0, width.length - 2) * (slidesBike.length - 1);
            } else {
                offset -= +width.slice(0, width.length - 2);
            }
    
            if (slideIndex == 1) {
                slideIndex = slidesBike.length;
            } else {
                slideIndex--;
            }
    
            slidesBikeField.style.transform = `translateX(-${offset}px)`;
            arr.forEach(item => item.style.backgroundColor = '#131313');
            arr[slideIndex - 1].style.backgroundColor = '#FF4040';
    }

    next.addEventListener('click', () => nextEvent(slidesBike, slidesBikeField, arr, width));
    prev.addEventListener('click', () => prevEvent(slidesBike, slidesBikeField, arr, width));

    let slides = document.querySelectorAll('.slider__item');
    let sliderWrapper = document.querySelector('.slider__wrapper');
    let slidesField = document.querySelector('.slider__inner');
    let prevSlider = document.querySelector('.slider__prev');
    let nextSlider = document.querySelector('.slider__next');
    let widthSlider = window.getComputedStyle(sliderWrapper).width;
    let offsetSlider = 0;

    let dotsSlider = document.createElement('ol');
    let arrSlider = [];
    dotsSlider.style.cssText = `
        position: absolute;
        top: -12px;
        z-index: 15;
        display: flex;
        flex-direction: column;
        justify-content: center;
        list-style: none;
    `;
    sliderWrapper.append(dotsSlider);
    for(let i = 0; i < slides.length; i++) {
        let dot = document.createElement('li');
        dot.setAttribute('data-slide', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 2px;
            height: 25px;
            margin-top: 12px;
            cursor: pointer;
            background-color: #131313;
            border-radius: 7px;
            transition: all .3s;
        `;
        dotsSlider.append(dot);
        arrSlider.push(dot);
    }
    arrSlider[slideIndex - 1].style.backgroundColor = '#FF4040';
    getStyle(slidesField, sliderWrapper, slides, widthSlider);
    arrFilter(arrSlider, 'data-slide', widthSlider, slidesField, offsetSlider);
    prevSlider.addEventListener('click', () => prevEvent(slides, slidesField, arrSlider, widthSlider));
    nextSlider.addEventListener('click', () => nextEvent(slides, slidesField, arrSlider, widthSlider));
});