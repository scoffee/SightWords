/*jslint forin: true, maxerr: 50, indent: 4 */
/*global Ti */

// encapsulate all db interaction

var db = (function () { 
	"use strict";

    var my = {}, conn; 
     
    function myConnection() {
		if (conn === undefined) {
			conn = Ti.Database.open('mydb');
		} 
        return conn;
    } 

	my.getPlayers = function () {
		var rows, result = [];
		
		rows = myConnection().execute('select * from players order by name');
		result = [];
		while (rows.isValidRow()) {
			result.push({name : rows.fieldByName('name'), id : rows.fieldByName('Player_ID')});
			rows.next();
		}
		return result;
	};     

//insert test row
//db.execute('insert into players (NAME) VALUES(?)','Steve');

//read all rows
     
    return my; 
     
}());