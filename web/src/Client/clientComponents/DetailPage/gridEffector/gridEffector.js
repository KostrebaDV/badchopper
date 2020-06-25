import { initScript } from '../../../js/initScript';

export const initGridEffector = () => {
	console.log(32);
	setTimeout(() => {
		initScript([
			"./js/gridEffector/modernizr.custom.js",
			"./js/gridEffector/classie.js",
			"./js/gridEffector/thumbnailGridEffects.js"
		], () => {});
	}, 1500);
};
