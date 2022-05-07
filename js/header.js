// изменение цвета header при скролле
// let info = document.querySelector('.info').offsetHeight;
// let header = document.querySelector('.header');
// document.addEventListener('scroll', () => {
// 	if (window.scrollY >= info) {
// 	  header.classList.add('header-colored');
// 	  header.style.padding = '5px 0';
// 	} else{
// 		header.classList.remove('header-colored');
// 		header.style.padding = '40px 0';
// 	}
//   })
let header = document.querySelector('.header'),
	headerLogo = document.querySelector('.header__logo');
document.addEventListener('scroll', () => {
	if (window.scrollY >= 1) {
	  header.classList.add('header-colored');
	  header.style.padding = '5px 0';
	  headerLogo.src = 'img/logo_white.png';
	} else{
		header.classList.remove('header-colored');
		header.style.padding = '40px 0';
		headerLogo.src = 'img/logo.png';
	}
  })