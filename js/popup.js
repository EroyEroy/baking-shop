let popupBg = document.querySelector('.popup__background'),
	cupcakeBg = document.querySelector('.cupcake__background'),
	eclairsBg = document.querySelector('.eclairs__background'),
	cookiesBg = document.querySelector('.cookies__background'),
	openPopupBtns = document.querySelectorAll('.menu__button'),
	cupcakeButton = document.querySelectorAll('.cupcake__button'),
	eclairsButton = document.querySelectorAll('.eclair__button'),
	cookiesButton = document.querySelectorAll('.cookies__button');

openPopupBtns.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		popupBg.classList.add('active');
	})
});
cupcakeButton.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		cupcakeBg.classList.add('active');
	})
});
eclairsButton.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		eclairsBg.classList.add('active');
	})
});
cookiesButton.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		cookiesBg.classList.add('active');
	})
});
document.addEventListener('click', (e) => {
	if (e.target === popupBg || e.target === cupcakeBg || e.target === eclairsBg || e.target === cookiesBg){
		popupBg.classList.remove('active');
		cupcakeBg.classList.remove('active');
		eclairsBg.classList.remove('active');
		cookiesBg.classList.remove('active');
	}
});
document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		popupBg.classList.remove('active');
		cupcakeBg.classList.remove('active');
		eclairsBg.classList.remove('active');
		cookiesBg.classList.remove('active');
	}
});