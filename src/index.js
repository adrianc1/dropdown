import './style.css';
import { prevFunction, nextFunction } from './app';

(() => {
	const rightArrow = document.querySelector('.fa-arrow-right');
	const leftArrow = document.querySelector('.fa-arrow-left');

	leftArrow.addEventListener('click', prevFunction);

	rightArrow.addEventListener('click', nextFunction);
})();

// (() => {
// 	const btns = document.querySelectorAll('button');

// 	btns.forEach((btn) => {
// 		btn.addEventListener('click', showHideMenu);
// 	});

// 	function showHideMenu(e) {
// 		const ul = e.target.nextElementSibling;
// 		ul.classList.toggle('hidden');
// 	}
// })();
