
var enterButton = document.getElementById('enter');
var userInput = document.getElementById('userinput');
var ul = document.querySelector('ul');

createListElement = function(){
	if(userinput.value.length > 0){
		li = document.createElement('li');
		li.appendChild(document.createTextNode(userinput.value));

		delButton = document.createElement('button');
		delButton.appendChild(document.createTextNode('Delete'));

		li.appendChild(delButton);
		ul.appendChild(li);

		userInput.value = ''
	}
};

function onEnter(event){
	console.log(event);
	if(event.keyCode ===13){
		createListElement();
	}
};

function markAsDone(e){

	if( e.target.tagName === 'LI'){
		e.target.classList.add('done');
	}
}

function deletItem(e){

	if( e.target.tagName === 'BUTTON' && e.target.parentElement.tagName =='LI'){
		e.target.parentElement.remove()
	}
}

enterButton.addEventListener('click',createListElement)
userInput.addEventListener('keypress',onEnter)
document.addEventListener('click',markAsDone)
document.addEventListener('click',deletItem)