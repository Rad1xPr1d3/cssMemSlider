const images = document.querySelectorAll('.slider__body .slider__line img');
const sliderLine = document.querySelector('.slider__line');
const buttons = document.querySelectorAll('.slider__button');
const circles = document.querySelectorAll('.slider__circle');

let txt = document.querySelector('.slider__txt');
let count = 0;
let width;
let arr =["every time","it's true", "first day", "goal", "maybe in future"];

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
activeButton()

buttons.forEach( btn=> {
    btn.addEventListener('click', (e) =>{
        const id = e.target.id;
        if (count < id){
            count = count + (id - count);
            console.log (count);
        } else if (count > id) {
            count = count + (id - count);
            console.log (count);
        }else  if (count === id){
            return;
        }
        rollSlider();
        changeTxt();
        activeButton();
    });
});

function rollSlider(){
    sliderLine.style.transform = 'translate(-' +count*width +'px)';
}

function changeTxt(){
    txt.innerHTML = arr[count];
}

function activeButton(){
    circles.forEach( item => {
        item.style.backgroundColor = "rgb(136, 136, 255)";
    });
    circles[count].style.backgroundColor = "transparent";
}