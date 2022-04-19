let burgerBtn = document.querySelector(".navbar-burger");

burgerBtn.addEventListener("click", e => {
	burgerBtn.classList.toggle("navbar-burger_active");
	document.querySelector(".header__accordeon").classList.toggle("header__accordeon_active");
	document.querySelector(".navbar-nav").classList.toggle("navbar-nav_active");
	document.querySelector(".navbar-account").classList.toggle("navbar-account_active");
});

window.onresize = function () {
	if (window.matchMedia('(min-width: 767px)').matches) {
		burgerBtn.classList.remove("navbar-burger_active");
		document.querySelector(".header__accordeon").classList.remove("header__accordeon_active");
		document.querySelector(".navbar-nav").classList.remove("navbar-nav_active");
		document.querySelector(".navbar-account").classList.remove("navbar-account_active");
	}
};

//jumping words:
//anim-item - с анимацией. Регулируется в классе ._animation-done
//_anim-no-hide - не будет анимироваться при повторном скроле




let animItemsArr = document.querySelectorAll("._anim--custom, ._anim--up, ._anim--down, ._anim--left, ._anim--right, ._anim--jump-out, ._anim--zoom-in, ._anim--cascade-wrapper");
let animItemsArrLength = animItemsArr.length;

if (animItemsArrLength > 0) {

	//слушает всё окно на скролл
	window.addEventListener('scroll', animOnScroll);


	function animOnScroll() {
		for (let index = 0; index < animItemsArrLength; index++) {
			const animItem = animItemsArr[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;

			//Родителю overflow-hidden, чтобы не вылезал скролл до и во время анимации
			animItem.parentNode.classList.add("ov-hidden");

			//коэффициент момента старта анимации
			const animStart = 4;

			//момент начала анимации
			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			//если высота объекта больше высоты окна браузера
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_animation-done');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_animation-done');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}

