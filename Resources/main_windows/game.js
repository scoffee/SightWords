var intCorrectAnswers=0;
var intIncorrectAnswers=0;
var win = Titanium.UI.currentWindow;

// create a button to close window
var b1 = Titanium.UI.createButton({
	title:'Word1',
	height:30,
	width:150,
	left:10,
	top:10
});
var b2 = Titanium.UI.createButton({
	title:'Word2',
	height:30,
	width:150,
	left:160,
	top:10
});
var b3 = Titanium.UI.createButton({
	title:'Word3',
	height:30,
	width:150,
	left:10,
	top:50
});
var b4 = Titanium.UI.createButton({
	title:'Word4',
	height:30,
	width:150,
	left:160,
	top:50
});

var bQuit = Titanium.UI.createButton({
	title:'Quit',
	height:30,
	width:150,
	top:150
});

//add labels for right/wrong
var lblCorrect = Titanium.UI.createLabel({
	height:30,
	width:150,
	left:10
})

var lblIncorrect = Titanium.UI.createLabel({
	height:30,
	width:150,
	left:160
})

win.add(b1);
win.add(b2);
win.add(b3);
win.add(b4);
win.add(bQuit);
win.add(lblCorrect);
win.add(lblIncorrect);

updateDisplay();

b1.addEventListener('click', correctAnswer);
b2.addEventListener('click', incorrectAnswer);
b3.addEventListener('click', incorrectAnswer);
b4.addEventListener('click', incorrectAnswer);

bQuit.addEventListener('click',function(){win.close();});

function correctAnswer() {
	intCorrectAnswers+=1;
	updateDisplay();
};

function incorrectAnswer() {
	intIncorrectAnswers+=1;
	updateDisplay();
}

function updateDisplay() {
	lblCorrect.text='Right: ' + intCorrectAnswers;
	lblIncorrect.text='Wrong: ' + intIncorrectAnswers;
}