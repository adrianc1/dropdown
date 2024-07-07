import './style.css';

(() => {
	const btns = document.querySelectorAll('button');

	btns.forEach((btn) => {
		btn.addEventListener('click', showHideMenu);
	});

	function showHideMenu(e) {
		const ul = e.target.nextElementSibling;
		ul.classList.toggle('hidden');
	}
})();
