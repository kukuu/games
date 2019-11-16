let sourcesStr = 'Lizzie Sybil Victor Tink Wendy';
let sources = sourcesStr.split(' ');

let imgTagMake = function(x) { return '<img width="250" src="images/' + x + '.jpg"/>'; };

for (let i = 0; i < sources.length; i++) {
	document.write('<br/> This is Image ' + (1+i) + ' = <br/>');
	//document.write('<img width="300" src="images/' + sources[i] + '.jpg"/>');
	document.write(imgTagMake(sources[i]));
}