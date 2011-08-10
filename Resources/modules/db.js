// encapsulate all db interaction

var db = (function () { 
    // ... all vars and functions are in this scope only 
    // still maintains access to all globals
    var my = {}, 
    	conn; 
     
    function MyConnection() {
    	if (conn == undefined) {
			conn = Titanium.Database.open('mydb');
   		} 
        return conn;
    } 

	my.getPlayers = function(){
		var rows = MyConnection().execute('select * from players order by name');
		var result=[];
		while (rows.isValidRow()) {
			result.push({name:rows.fieldByName('name'), id:rows.fieldByName('Player_ID')});
			rows.next();
		}
		return result;
	}     

//insert test row
//db.execute('insert into players (NAME) VALUES(?)','Steve');

//read all rows
     
    return my; 
     
}());