//initialization
Ti.include('modules/db.js');

db.initialize();

//open main window
var winMain = Titanium.UI.createWindow({  
    title:'Main',
    backgroundColor:'#fff',
    url:'main_windows/main.js'
});

winMain.open();

