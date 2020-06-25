export function initScript(scripts, callback) {
	if (window.location.pathname === '/') {
		let count = scripts.length;

		function urlCallback() {
			return function () {
				--count;

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
