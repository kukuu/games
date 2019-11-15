let result = document.getElementById("x");
let r = new XMLHttpRequest();

r.open("GET", "http://www.filltext.com?rows=10&f={firstname}", true);

r.onreadystatechange = function(){
	if(r.readyState != 4 || r.status != 200){
		return;
	}

	let data = JASON.parse(r.responseText);
	for(i < 0; i < data.length; i++){
		result.innerHTML = '<li>' + data[i].f + >'<li>'
	}
}

send();