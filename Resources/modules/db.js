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

	my.initialize = function () {
		//players(player_id, name)
		myConnection().execute('Create table if not exists ' +
			' Players(' +
			' 	Player_ID integer primary key, ' +
			' 	Name text)');
		
		//player_words(player_word_id, player_id, word, correct_count, incorrect_count)
		myConnection().execute('Create table if not exists ' +
			' Player_Words(' +
			' 	Player_Word_ID integer primary key, ' +
			' 	Player_ID integer, ' +
			' 	Word text, ' +
			' 	Correct_Count integer, ' +
			' 	Incorrect_Count integer)');
		
		//player_word_choices(player_word_id, player_id, 
		//		correct_word, option_word, total_trial_count, chosen_count)
		myConnection().execute('Create table if not exists ' +
			' Player_Word_Choices(' +
			' 	Player_Word_Choice_ID integer primary key, ' +
			' 	Player_ID integer, ' +
			' 	Correct_Word text, ' +
			' 	Option_Word text, ' +
			' 	Total_Trial_Count integer, ' +
			' 	Chosen_Count integer)');
	};
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