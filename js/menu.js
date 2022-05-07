const cakeBtn = document.querySelector('.button__cake'),
	  cupcakeBtn = document.querySelector('.button__cupcake'),
	  eclairsBtn = document.querySelector('.button__eclairs'),
	  cookiesBtn = document.querySelector('.button__cookies'),
	  structureBtn = document.querySelector('.button__structure'),
	  nutritionalBtn = document.querySelector('.button__nutritional'),
	  structureBtn2 = document.querySelector('.button__structure-two'),
	  nutritionalBtn2 = document.querySelector('.button__nutritional-two'),
	  structureBtn3 = document.querySelector('.button__structure-three'),
	  nutritionalBtn3 = document.querySelector('.button__nutritional-three'),
	  structureBtn4 = document.querySelector('.button__structure-four'),
	  nutritionalBtn4 = document.querySelector('.button__nutritional-four');
const cake = document.querySelector('.cake'),
	  cupcake = document.querySelector('.cupcake'),
	  eclairs = document.querySelector('.eclairs'),
	  cookies = document.querySelector('.cookies'),
	  structure = document.querySelector('.structure'),
	  nutritional = document.querySelector('.nutritional'),
	  structure2 = document.querySelector('.structure-two'),
	  nutritional2 = document.querySelector('.nutritional-two'),
	  structure3 = document.querySelector('.structure-three'),
	  nutritional3 = document.querySelector('.nutritional-three'),
	  structure4 = document.querySelector('.structure-four'),
	  nutritional4 = document.querySelector('.nutritional-four');
// переключение
cakeBtn.addEventListener('click', function () {
	cupcake.classList.remove('active');
	eclairs.classList.remove('active');
	cookies.classList.remove('active');
	cake.classList.add('active');
});  
cupcakeBtn.addEventListener('click', function () {
	cake.classList.remove('active');
	eclairs.classList.remove('active');
	cookies.classList.remove('active');
	cupcake.classList.add('active');
});
eclairsBtn.addEventListener('click', function () {
	cake.classList.remove('active');
	cupcake.classList.remove('active');
	cookies.classList.remove('active');
	eclairs.classList.add('active');
});
cookiesBtn.addEventListener('click', function () {
	cake.classList.remove('active');
	cupcake.classList.remove('active');
	eclairs.classList.remove('active');
	cookies.classList.add('active');
});
document.addEventListener('click', (e) => {
	if (e.target === structureBtn || e.target === structureBtn2 || e.target === structureBtn3 || e.target === structureBtn4){
		structure.classList.add('active');
		nutritional.classList.remove('active');
		structure2.classList.add('active');
		nutritional2.classList.remove('active');
		structure3.classList.add('active');
		nutritional3.classList.remove('active');
		structure4.classList.add('active');
		nutritional4.classList.remove('active');
	}
	if (e.target === nutritionalBtn || e.target === nutritionalBtn2 || e.target === nutritionalBtn3 || e.target === nutritionalBtn4){
		structure.classList.remove('active');
		nutritional.classList.add('active');
		structure2.classList.remove('active');
		nutritional2.classList.add('active');
		structure3.classList.remove('active');
		nutritional3.classList.add('active');
		structure4.classList.remove('active');
		nutritional4.classList.add('active');
	}else{
		structure.classList.add('active');
		nutritional.classList.remove('active');
		structure2.classList.add('active');
		nutritional2.classList.remove('active');
		structure3.classList.add('active');
		nutritional3.classList.remove('active');
		structure4.classList.add('active');
		nutritional4.classList.remove('active');
	}
});