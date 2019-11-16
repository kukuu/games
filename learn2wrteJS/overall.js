function dataTypes() {
	console.log('in external JS')

	let i_TwentyFive = 25,
		s_HelloWorld = 'hello world',
		b_False = false;

	document.write(typeof i_TwentyFive + '<br /> ' + typeof b_False + '<br />' + typeof s_HelloWorld);
	console.log(typeof i_TwentyFive + '\n' + typeof b_False + '\n' + typeof s_HelloWorld);
}

function helloworld() {
	// first example of external JS
	var helloworld = "Hello world";
	alert(helloworld);
	console.log('Coming from external JS');
}

function string7() {
	let sourcesStr = 'Lizzie Sybil Victor Tink Wendy';
	let sources = sourcesStr.split(' ');

	let imgTagMake = function(x) { return '<img width="250" src="images/' + x + '.jpg"/>'; };

	for (let i = 0; i < sources.length; i++) {
		document.write('<br/> This is Image ' + (1+i) + ' = <br/>');
		//document.write('<img width="300" src="images/' + sources[i] + '.jpg"/>');
		document.write(imgTagMake(sources[i]));
	}
}

function games8() {

	let gamesList = ['Borderlands 2', 'Star Wars Battlefront', 'Darkest Dungeon', 'Republic Commando', 'Dead Space'];
	let gamesListLen = gamesList.length;
	let swbIndex = gamesList.indexOf('Star Wars Battlefront');

	console.log("I have " + gamesListLen + " favourites games, but SW:B is my " + swbIndex + "st.");
	document.write("I have " + gamesListLen + " favourites games, but SW:B is my " + swbIndex + "st.");

}

var cats = "Lizzie Sybil Victor Tink Wendy".split(' ');
var morecats = ['Artie', 'Romeo', 'Peter', 'Indiana', 'Carbonelle'];


function event9() {

	window.onload = addCats;

}

function addCats() {

	cats.push(morecats);
	insertPoint = document.getElementById('catPoint');
	insertPoint.innerHTML = cats;

}

function disableAdd() {

	btn = document.getElementById('btnAddCat');
	btn.disabled = true;

}

const sum = (...args) => [...args].reduce((a, b) => a + b, 0);
const product = (...args) => [...args].reduce((a, b) => a * b, 1);


function add(x) {
    return function(y) {
        return x + y;
    };
}

function indexOfExample() {

	let my_email = 'useridhere@port.ac.uk';
	let ind = my_email.indexOf('@');
	let domain = my_email.slice((1+ind), my_email.length);
	document.write(domain);
}

function splitExample() {

	let my_email = 'Charles@gmail.com';

	let splitting = my_email.split('@');

	document.write("Hi " + splitting[0] + ", <br />Please confirm that your domain is at " + splitting[1]);
}

function reverseExample() {

	let exampleArray = [1,2,4,5,6,7,3,2];
	document.write("Forward: " + exampleArray);
	document.write("<br/>");
	exampleArray.reverse();
	document.write("Reverse: " + exampleArray);
}

function ConcatAndDisplay() {
	let group1 = ['Sainsburys', 'Morrisons'],
		group2 = ['Tesco', 'Aldi', "Asda"],
		group3 = ['Waitrose'];
	
	topStores = group1.concat(group2, group3);
	ip = document.getElementById('insertionPoint');
	ip.innerHTML = topStores;
}