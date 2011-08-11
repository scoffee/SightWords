/*jslint forin: true, maxerr: 50, indent: 4 */
/*global Ti, wordHandler, db */
(function () {
	"use strict";
	
	var win, btnClose, btnModuleTest, lblModuleTest1, lblModuleTest2, lblModuleTest3,
		btnShowPlayers, btnPlaySounds, btnStopSounds, lblSoundName, soundFilesToPlay, 
		sound;
	
	//Ti.include('../modules/wordHandler.js');
	Ti.include('../modules/db.js');
	
	//Tests
	win = Ti.UI.currentWindow;
	
	//close
	btnClose = Ti.UI.createButton({
		title: 'Close', 
		height: 80, 
		width: 145, 
		left: 10, 
		top: 10
	});
	btnClose.addEventListener('click', function () {
		win.close();
	});
	win.add(btnClose);
	
	//module test
	
	btnModuleTest = Ti.UI.createButton({
		title: 'Test Module', 
		height: 80, 
		width: 145, 
		left: 10, 
		top: 100
	});
	win.add(btnModuleTest);
	lblModuleTest1 = Ti.UI.createLabel({
		text: 'A',
		height: 80, 
		width: 40, 
		left: 165, 
		top: 100
	});
	win.add(lblModuleTest1);
	lblModuleTest2 = Ti.UI.createLabel({
		text: 'B',
		height: 80, 
		width: 40, 
		left: 210, 
		top: 100
	});
	win.add(lblModuleTest2);
	lblModuleTest3 = Ti.UI.createLabel({
		text: 'C',
		height: 80, 
		width: 40, 
		left: 255, 
		top: 100
	});
	win.add(lblModuleTest3);
	
	btnModuleTest.addEventListener('click', function () {
		lblModuleTest1.text = wordHandler.moduleProperty;
		lblModuleTest2.text = wordHandler.test2();
		lblModuleTest3.text = wordHandler.test3();
	});
	
	//show players
	btnShowPlayers = Ti.UI.createButton({
		title: 'Show Players', 
		height: 80, 
		width: 145, 
		left: 10, 
		top: 190
	});
	win.add(btnShowPlayers);
	btnShowPlayers.addEventListener('click', function () {
		var players, player;
		
		players = db.getPlayers();
		for (player in players) {
			//alert(player);
			btnShowPlayers.title = player.name;
		}
	});
	
	//Read all mp3 files in resources, display in a list, play when clicked
	btnPlaySounds = Ti.UI.createButton({
		title: 'Play Sounds', 
		height: 80, 
		width: 145, 
		left: 10, 
		top: 280
	});
	win.add(btnPlaySounds);
	btnStopSounds = Ti.UI.createButton({
		title: 'Stop Sounds', 
		height: 80, 
		width: 145, 
		left: 165, 
		top: 280
	});
	win.add(btnStopSounds);
	lblSoundName = Ti.UI.createLabel({
		text: 'filename',
		height: 80, 
		width: 145, 
		left: 320, 
		top: 280
	});
	win.add(lblSoundName);
	
	function playSoundFile() {
		if (soundFilesToPlay.length > 0) {
			var soundFile, file;
			
			soundFile = soundFilesToPlay.shift();
			lblSoundName.text = soundFile;
			file = Ti.Filesystem.getFile('sounds' + Ti.Filesystem.separator + soundFile);
			if (sound !== undefined) {
				sound.release();
			}
			sound = Ti.Media.createSound({sound: file});
			//sound.addEventListener('complete', function(){setTimeout(function(){sound.release();playSoundFile();}, 1000);});
			//sound.addEventListener('complete', function(){setTimeout(playSoundFile, 1000);});
			sound.addEventListener('complete', playSoundFile);
			sound.play();
			//setTimeout(playSoundFile, 1000);
		}
	}

	soundFilesToPlay = [];
	btnPlaySounds.addEventListener('click', function () {
		var soundFile, resourceDir, dirList, i; 
		soundFilesToPlay = [];
		resourceDir = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory + Ti.Filesystem.separator + 'sounds');
		dirList = resourceDir.getDirectoryListing();
		for (i = 0; i < dirList.length; i += 1) {
			if (dirList[i].search('mp3$') > 0) {
				soundFilesToPlay.push(dirList[i]);
				lblSoundName.text = dirList[i];
			}
		}
		soundFilesToPlay = soundFilesToPlay.sort();
		playSoundFile();
	});
	btnStopSounds.addEventListener('click', function () {
		soundFilesToPlay = [];
	});
}());