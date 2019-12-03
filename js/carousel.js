//define varibles
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav')
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange the slides next to each other 
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';
const setSlidePosition = (slide, index) => {
	slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

//move to target slide
const moveToSlide = (track, currentSlide, targetSlide) => {
	track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
	currentSlide.classList.remove('current__slide');
	targetSlide.classList.add('current__slide');
	//console.log(currentSlide);
	//console.log(targetSlide);
};

//update Dots status
const updateDots = (currentDot, targetDot) => {
	currentDot.classList.remove('current__slide');
	targetDot.classList.add('current__slide');
}

//when i click left, move slides to left
prevButton.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current__slide');
	const prevSlide = currentSlide.previousElementSibling;
	const currentDot = dotsNav.querySelector('.current__slide');
	const prevDot = currentDot.previousElementSibling;

	moveToSlide(track, currentSlide, prevSlide);
	updateDots(currentDot, prevDot);
});


//when i click right, move slides to right
nextButton.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current__slide');
	const nextSlide = currentSlide.nextElementSibling;
	const currentDot = dotsNav.querySelector('.current__slide');
	const nextDot = currentDot.nextElementSibling;

	moveToSlide(track, currentSlide, nextSlide);
	updateDots(currentDot, nextDot);
});


//when i click the nav indicator, move to that slide
dotsNav.addEventListener('click', e => {
	//what indicator was clicked on?
	//closest()
	const targetDot = e.target.closest('button');

	if(!targetDot) return;

	const currentSlide = track.querySelector('.current__slide');
	const currentDot = dotsNav.querySelector('.current__slide');
	const targetIndex = dots.findIndex(dot => dot === targetDot);
	const targetSlide = slides[targetIndex];
	moveToSlide(track, currentSlide, targetSlide);
	updateDots(currentDot, targetDot);
});