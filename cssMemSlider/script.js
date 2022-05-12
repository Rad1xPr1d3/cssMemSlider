const images = document.querySelectorAll('.slider__body .slider__line img');
const sliderLine = document.querySelector('.slider__line');
const buttons = document.querySelectorAll('.slider__button');
let count = 0;
let width;

function init(){
    console.log('resize');
    width = document.querySelector('.slider__body').offsetWidth;
    sliderLine.style.width = width*images.length + 'px';
    images.forEach( item => {
        item.style.width = width + 'px';
        item.style.height = "auto";
    });
    console.log(width);
}
window.addEventListener('resize', init);
init();

buttons.forEach( btn=> {
    btn.addEventListener('click', (e) =>{
        const id = e.target.id;
        console.log(id);
        tapButton();
    });
});

function tapButton(){
    count++;
    rollSlider();
} 

function rollSlider(){
    sliderLine.style.transform = 'translate(-' +count*width +'px)';
}
