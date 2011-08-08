//Main page
var winMain = Titanium.UI.currentWindow;

//	Choose Player
	// show pick list with new option
//	Choose Word List

//	Start Game
var btnStartGame = Titanium.UI.createButton({
	title:'Start Game',height:40,width:145,left:10,top:110});
btnStartGame.addEventListener('click', function(){
	Titanium.UI.createWindow({  
	    title:'Game',url:'main_windows/game.js',backgroundColor:'#008'}).open();
});
winMain.add(btnStartGame);

//Show Statistics
var btnStatistics = Titanium.UI.createButton({
	title:'Player Statistics',height:40,width:145,left:10,top:160});
btnStatistics.addEventListener('click', function(){
	Titanium.UI.createWindow({  
	    title:'Player Statistics',url:'main_windows/player_stats.js',backgroundColor:'#800'}).open();
});
winMain.add(btnStatistics);

//Tests
var btnTests = Titanium.UI.createButton({
	title:'Tests',height:40,width:145,left:10,top:210});
btnTests.addEventListener('click', function(){
	Titanium.UI.createWindow({  
	    title:'Tests',url:'main_windows/tests.js',backgroundColor:'#888'}).open();
});
winMain.add(btnTests);
