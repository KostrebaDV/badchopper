export const noScroll = (hasScroll) => {
	const bodyElement = document.getElementsByTagName('body')[0];
	const { width } = bodyElement.getBoundingClientRect();

	const hasScrollbar = document.documentElement.scrollHeight > window.innerHeight;

	if (hasScroll) {
		if (hasScrollbar) {
			bodyElement.style.cssText = `overflow: hidden; width: ${width}px;`;
		} else {
			bodyElement.style.cssText = 'overflow: hidden;';
		}
	}

	if (!hasScroll) {
		if (hasScrollbar) {
			bodyElement.style.cssText = 'overflow: auto; width: auto;';
		} else {
			bodyElement.style.cssText = 'overflow: auto;';
		}
	}
};
