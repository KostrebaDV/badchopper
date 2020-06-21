function imageEffectLoader(scripts, callback) {
	if (window.location.pathname === '/') {
		let count = scripts.length;

		function urlCallback() {
			return function () {
				--count

				if (count < 1) {
					callback();
				}
			};
		}

		function loadScript(url) {
			const s = document.createElement('script');
			s.setAttribute('src', url);
			s.onload = urlCallback();
			document.head.appendChild(s);
		}

		for (let script of scripts) {
			loadScript(script);
		}
	}
}

function initEffect () {
	const container = document.body
	const itemsWrapper = document.querySelector('.gridImageContent')

	const preloadImages = () => {
		return new Promise((resolve, reject) => {
			imagesLoaded(document.querySelectorAll('img'), resolve);
		});
	};

	preloadImages().then(() => {
		const effect = new RGBShiftEffect(container, itemsWrapper, { strength: 0.25 })
	});
}

imageEffectLoader([
	"./js/ImageEffector/three.min.js",
	"./js/ImageEffector/TweenLite.min.js",
	"./js/ImageEffector/Math.js",
	"./js/ImageEffector/EffectShell.js",
	"./js/ImageEffector/RGBShiftEffect.js",
	"./js/ImageEffector/imagesloaded.pkgd.min.js"
], initEffect)
