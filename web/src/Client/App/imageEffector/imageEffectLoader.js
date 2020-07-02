import {initScript} from '../../../static/js/initScript';

export function initEffect () {
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
		new RGBShiftEffect(container, itemsWrapper, { strength: 0.25 });
	});
}

initScript([
	"./js/imageEffector/three.min.js",
	"./js/imageEffector/TweenLite.min.js",
	"./js/imageEffector/Math.js",
	"./js/imageEffector/EffectShell.js",
	"./js/imageEffector/RGBShiftEffect.js",
	"./js/imageEffector/imagesloaded.pkgd.min.js"
], initEffect);
