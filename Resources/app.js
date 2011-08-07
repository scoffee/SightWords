// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');


var winMain = Titanium.UI.createWindow({  
    title:'Main',
    backgroundColor:'#fff'
});

var winGame = Titanium.UI.createWindow({  
    title:'Game',
    backgroundColor:'#fff',
    url:'game_window.js'
});

//
// testSound 
//
var testSound = Titanium.UI.createButton({
	title:'Test Sound',
	height:40,
	width:145,
	left:10,
	top:10
});
testSound.addEventListener('click', function()
{
	var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'can.mp3');
	var sound = Titanium.Media.createSound({sound:file});
	sound.addEventListener('complete',function(){
		var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'can.mp3');
		var sound = Titanium.Media.createSound({sound:file,preload:true});
		sound.addEventListener('complete',function(){
			var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'can.mp3');
			var sound = Titanium.Media.createSound({sound:file});
			sound.addEventListener('complete',function(){
			});
			sound.play();
		});
		sound.play();
	});
	sound.setLooping(false);
	sound.play();
});
winMain.add(testSound);

var testSound = Titanium.UI.createButton({
	title:'Start Game',
	height:40,
	width:145,
	left:10,
	top:10
});

// start game
var btnStartGame = Titanium.UI.createButton({
	title:'Start Game',
	height:40,
	width:145,
	left:10,
	top:90
});
btnStartGame.addEventListener('click', function()
{
	
});
winMain.add(btnStartGame);


winMain.open();

