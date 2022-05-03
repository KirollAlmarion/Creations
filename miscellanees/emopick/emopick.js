'use strict';

let params = (new URL(document.location)).searchParams;
let id = params.get('id');
let article = document.querySelector('article');
article.innerText= String.fromCodePoint(id);

document.onclick = function(e){
	window.print();
}