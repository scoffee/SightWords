// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var winMain = Titanium.UI.createWindow({  
    title:'Main',
    backgroundColor:'#fff'
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
	var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'sounds/big.mp3');
	var sound = Titanium.Media.createSound({sound:file});
	sound.addEventListener('complete',function(){
		var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'sounds/blue.mp3');
		var sound = Titanium.Media.createSound({sound:file,preload:true});
		sound.addEventListener('complete',function(){
			var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'sounds/can.mp3');
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
	var winGame = Titanium.UI.createWindow({  
	    title:'Game',
	    backgroundColor:'#fff',
	    url:'main_windows/game.js'
	});
	winGame.open();
});
winMain.add(btnStartGame);


winMain.open();

