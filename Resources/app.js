//initialization

//db
var db = Titanium.Database.open('mydb');

//players(player_id, name)
db.execute('Create table if not exists ' +
	' Players(' +
	' 	Player_ID integer primary key, ' +
	' 	Name text)');

//player_words(player_word_id, player_id, word, correct_count, incorrect_count)
db.execute('Create table if not exists ' +
	' Player_Words(' +
	' 	Player_Word_ID integer primary key, ' +
	' 	Player_ID integer, ' +
	' 	Word text, ' +
	' 	Correct_Count integer, ' +
	' 	Incorrect_Count integer)');

//player_word_choices(player_word_id, player_id, 
//		correct_word, option_word, total_trial_count, chosen_count)
db.execute('Create table if not exists ' +
	' Player_Word_Choices(' +
	' 	Player_Word_Choice_ID integer primary key, ' +
	' 	Player_ID integer, ' +
	' 	Correct_Word text, ' +
	' 	Option_Word text, ' +
	' 	Total_Trial_Count integer, ' +
	' 	Chosen_Count integer)');


//open main window
var winMain = Titanium.UI.createWindow({  
    title:'Main',
    backgroundColor:'#fff',
    url:'main_windows/main.js'
});

winMain.open();

