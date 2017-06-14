window.onload = function(){

	let a = 6;
	console.log(a);
	let b = 7;
	console.log(b);

	let button = document.querySelector('button');
	console.log(button);
	let modal  = document.querySelector('.modal');
	console.log(modal);
	button.addEventListener('click', function(e){
		modal.classList.add('visible');
	});

};