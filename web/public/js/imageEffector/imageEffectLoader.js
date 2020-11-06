let effect;

function initEffect () {
	//delete prev canvas
	const container = document.body;
	const itemsWrapper = document.querySelector('.gridImageContent');

	const preloadImages = () => {
		return new Promise((resolve, reject) => {
			// eslint-disable-next-line no-undef
			imagesLoaded(document.querySelectorAll('img'), resolve);
		});
	};

	preloadImages().then(() => {
		// eslint-disable-next-line no-undef
		effect = new RGBShiftEffect(container, itemsWrapper, { strength: 0.25 });
	});
}

function destroyEffect () {
	effect.destroyAnimation();
}

if (window.outerWidth > 1000) {
	setTimeout(() => {
		initEffect();
	}, 300);
}

function onLocationChange (pathname) {
	let canvasHTMLCollection = document.getElementById('imageEffector');

	if (pathname === '/') {
		initEffect();
	} else {
		if (canvasHTMLCollection !== null) {
			destroyEffect();
			canvasHTMLCollection.remove();
		}
	}
}

let oldHref = document.location.href;

window.onload = function () {
	let bodyList = document.querySelector("body");
	let observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			if (oldHref != document.location.href && window.outerWidth > 1000) {
				oldHref = document.location.href;

				onLocationChange(document.location.pathname);
			}
		});
	});

	let config = {
		childList: true,
		subtree: true
	};

	observer.observe(bodyList, config);
};

