//Tests
var win = Titanium.UI.currentWindow;
var db = Titanium.Database.open('mydb');

//Read all mp3 files in resources, display in a list, play when clicked

//insert test row
db.execute('insert into players (NAME) VALUES(?)','Steve');

//read all rows
var rows = db.execute('select * from players')
while (rows.isValidRow()) {
	Titanium.API.info('Player_ID: ' + rows.fieldByName('Player_ID') 
		+ ' NAME: ' + rows.fieldByName('name'));
	rows.next();
}

var btnClose = Titanium.UI.createButton({
	title:'Close',height:40,width:145,left:10,top:210});
btnClose.addEventListener('click', function(){win.close();});
win.add(btnClose);
