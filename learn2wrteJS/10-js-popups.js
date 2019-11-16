window.onload = Linkz;

function popUp(url) {

	window.open(url, "popup", "width=320, height=480");

}

function Linkz() {
	console.log('here');
	let links = document.getElementsByTagName('a');
	for (let i = 0; i < links.length; i++) {
		if (links[i].getAttribute('class') == 'pops') {

			links[i].onclick = function() {
				popUp(this.getAttribute('href'));
				return false;
			}

		}
	}
}