var win = Titanium.UI.currentWindow;

var btnClose = Titanium.UI.createButton({
	title:'Close',height:40,width:145,left:10,top:210});
btnClose.addEventListener('click', function(){win.close();});
win.add(btnClose);
