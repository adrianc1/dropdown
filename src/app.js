const container = document.getElementById('container');

function prevFunction() {
	for (let i = 0; i < container.childElementCount; i++) {
		const imgLastIndex = container.childElementCount - 1;
		if (container.children[i].classList.contains('active')) {
			container.children[i].classList.toggle('active');

			let prevEl = container.children[i - 1];

			if (prevEl) {
				prevEl.classList.add('active');
				updateNav(i - 1);
			} else if (!prevEl) {
				prevEl = container.children[imgLastIndex];
				prevEl.classList.add('active');
				updateNav(imgLastIndex);
			}
			break;
		}
	}
}
function nextFunction() {
	for (let i = 0; i < container.childElementCount; i++) {
		if (container.children[i].classList.contains('active')) {
			container.children[i].classList.toggle('active');

			let nextEl = container.children[i + 1];

			if (nextEl) {
				nextEl.classList.add('active');
				updateNav(i + 1);
			} else if (!nextEl) {
				nextEl = container.children[0];
				nextEl.classList.add('active');
				updateNav(0);
			}
			break;
		}
	}
}

function updateNav(index) {
	const currID = `slide-${index}`;
	document.getElementById(currID).checked = true;
}

(function checkRadio() {
	const radios = document.querySelectorAll('.radio-nav');

	radios.forEach((radio) => {
		radio.addEventListener('click', () => {
			for (let i = 0; i < container.childElementCount; i++) {
				container.children[i].classList.remove('active');
			}
			if (radio.checked) {
				container.children[radio.value].classList.add('active');
			}
		});
	});
})();

(function init() {
	document.getElementById('slide-0').checked = true;
})();

export { prevFunction, nextFunction };
