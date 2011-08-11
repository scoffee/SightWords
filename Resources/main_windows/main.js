//Main page
var winMain = Titanium.UI.currentWindow;
var db = Titanium.Database.open('mydb');
var margin = 10

//	Choose Player
var lblPlayer = Ti.UI.createLabel({text:'Choose a player:',height:80,width:Titanium.Platform.displayCaps.platformWidth/2-margin,left:margin,top:margin});
winMain.add(lblPlayer);

// show pick list with new option
var picPlayer = Ti.UI.createPicker({height:80,left:Titanium.Platform.displayCaps.platformWidth/2,top:margin});
var data = [];
var rows = db.execute('select * from players')
while (rows.isValidRow()) {
	data.push(Ti.UI.createPickerRow({title:rows.fieldByName('name'),custom_item:rows.fieldByName('Player_ID') }));
	rows.next();
}

data.push(Ti.UI.createPickerRow({title:'New Player',custom_item:'new'}));

// turn on the selection indicator (off by default)
picPlayer.selectionIndicator = true;

picPlayer.add(data);

winMain.add(picPlayer);

//select most recent player
picPlayer.setSelectedRow(0,1,true);


//	Choose Word List
var lblPlayer = Ti.UI.createLabel({text:'Choose a word list:',height:80,width:Titanium.Platform.displayCaps.platformWidth/2-margin,left:margin,top:margin+picPlayer.top+picPlayer.height});
winMain.add(lblPlayer);

//update to read this from xml
var picWordList = Ti.UI.createPicker({height:80,left:Titanium.Platform.displayCaps.platformWidth/2,top:margin+picPlayer.top+picPlayer.height});
var data = [];
data[0]=Ti.UI.createPickerRow({title:'Pre-Primer',custom_item:'pp'});
data[1]=Ti.UI.createPickerRow({title:'Primer',custom_item:'p'});
data[2]=Ti.UI.createPickerRow({title:'1st Grade',custom_item:'1'});
data[3]=Ti.UI.createPickerRow({title:'2nd Grade',custom_item:'2'});
data[4]=Ti.UI.createPickerRow({title:'3rd Grade',custom_item:'3'});
data[5]=Ti.UI.createPickerRow({title:'Nouns',custom_item:'n'});
// turn on the selection indicator (off by default)
picWordList.selectionIndicator = true;
picWordList.add(data);
winMain.add(picWordList);
//set a property to persist this selection
picWordList.setSelectedRow(0,1,true);

//	Start Game
var btnStartGame = Titanium.UI.createButton({
	title:'Start Game',height:80,width:Titanium.Platform.displayCaps.platformWidth/2,left:Titanium.Platform.displayCaps.platformWidth/4,top:margin+picWordList.top+picWordList.height});
btnStartGame.addEventListener('click', function(){
	Titanium.UI.createWindow({  
	    title:'Game',url:'game.js',backgroundColor:'#008'}).open();
});
winMain.add(btnStartGame);

//Show Statistics
var btnStatistics = Titanium.UI.createButton({
	title:'Player Statistics',height:80,width:Titanium.Platform.displayCaps.platformWidth/2,left:Titanium.Platform.displayCaps.platformWidth/4,top:margin+btnStartGame.top+btnStartGame.height});
btnStatistics.addEventListener('click', function(){
	Titanium.UI.createWindow({  
	    title:'Player Statistics',url:'player_stats.js',backgroundColor:'#800'}).open();
});
winMain.add(btnStatistics);

//Tests
var btnTests = Titanium.UI.createButton({
	title:'Tests',width:Titanium.Platform.displayCaps.platformWidth/2,left:Titanium.Platform.displayCaps.platformWidth/4,top:margin+btnStatistics.top+btnStatistics.height});
btnTests.addEventListener('click', function(){
	Titanium.UI.createWindow({  
	    title:'Tests',url:'tests.js',backgroundColor:'#fff'}).open();
});
winMain.add(btnTests);
