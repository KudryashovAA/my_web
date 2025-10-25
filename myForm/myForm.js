'use strict';

let header = document.createElement('h1');
header.innerText = 'Directory listing for/';

let line = document.createElement('hr');
let line2 = document.createElement('hr');

let listItems = [];
for(let i = 1; i < 100; i++){
	listItems.push(`Элемент ${i}`);
}

function unmarkedList(items){
	let list = document.createElement('ul');
	
	for(let item of items){
		let listLi = document.createElement('li');
		listLi.innerText = item;
        list.appendChild(listLi);
	}
	return list
}



let list = unmarkedList(listItems);
/*<!-->
let list = document.createElement('ul');
let item1 = document.createElement('li');
item1.innerText = 'Элемент 1';
item1.setAttribute('id', 'el');
item1.classList.add('li-1');

let item2 = document.createElement('li')
item2.innerText = 'Элемент 2';
item2.setAttribute('id', 'e2');

list.appendChild(item1);
list.appendChild(item2);
<!-->*/
let body = document.querySelector('body');
body.appendChild(header);
body.appendChild(line);
body.appendChild(list);
body.appendChild(line2);


