Titanium.include('../modules/wordHandler.js');
Titanium.include('../modules/db.js');

//Tests
var win = Titanium.UI.currentWindow;

//close
var btnClose = Titanium.UI.createButton({
	title:'Close',height:80,width:145,left:10,top:10});
btnClose.addEventListener('click', function(){win.close();});
win.add(btnClose);

//module test

var btnModuleTest = Titanium.UI.createButton({
	title:'Test Module',height:80,width:145,left:10,top:100});
win.add(btnModuleTest);
var lblModuleTest1 = Ti.UI.createLabel({text:'A',
	height:80,width:40,left:165,top:100});
win.add(lblModuleTest1);
var lblModuleTest2 = Ti.UI.createLabel({text:'B',
	height:80,width:40,left:210,top:100});
win.add(lblModuleTest2);
var lblModuleTest3 = Ti.UI.createLabel({text:'C',
	height:80,width:40,left:255,top:100});
win.add(lblModuleTest3);

btnModuleTest.addEventListener('click', function(){
		lblModuleTest1.text=wordHandler.moduleProperty;
		lblModuleTest2.text=wordHandler.test2();
		lblModuleTest3.text=wordHandler.test3();
	});

//show players
var btnShowPlayers = Titanium.UI.createButton({
	title:'Show Players',height:80,width:145,left:10,top:190});
win.add(btnShowPlayers);
btnShowPlayers.addEventListener('click', function(){
		var players = db.getPlayers();
		for each (var player in players) {
			alert(player);
			btnShowPlayers.title=player.name;
		}
	});

//Read all mp3 files in resources, display in a list, play when clicked
var btnPlaySounds = Titanium.UI.createButton({
	title:'Play Sounds',height:80,width:145,left:10,top:280});
win.add(btnPlaySounds);
var btnStopSounds = Titanium.UI.createButton({
	title:'Stop Sounds',height:80,width:145,left:165,top:280});
win.add(btnStopSounds);
var lblSoundName = Ti.UI.createLabel({text:'filename',
	height:80,width:145,left:320,top:280});
win.add(lblSoundName);

var soundFilesToPlay=[];
btnPlaySounds.addEventListener('click', function(){
		soundFilesToPlay=[];
		var resourceDir = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + Ti.Filesystem.separator + 'sounds');
		var dirList = resourceDir.getDirectoryListing();
		for each (var soundFile in dirList) {
			if (soundFile.search('mp3$')) {
				soundFilesToPlay.push(soundFile);
				lblSoundName.text=soundFile.name;
			}
		};
		soundFilesToPlay=soundFilesToPlay.sort();
		playSoundFile();
	});
btnStopSounds.addEventListener('click',function(){soundFilesToPlay=[];})
var sound;
function playSoundFile(){
	if (soundFilesToPlay.length>0) {
		var soundFile = soundFilesToPlay.shift();
		lblSoundName.text=soundFile;
		var file = Titanium.Filesystem.getFile('sounds' + Ti.Filesystem.separator + soundFile);
		if (sound != undefined) {sound.release();};
		sound = Titanium.Media.createSound({sound:file});
		//sound.addEventListener('complete',function(){setTimeout(function(){sound.release();playSoundFile();},1000);});
		//sound.addEventListener('complete',function(){setTimeout(playSoundFile,1000);});
		sound.addEventListener('complete',playSoundFile);
		sound.play();
		//setTimeout(playSoundFile,1000);
	}
}
