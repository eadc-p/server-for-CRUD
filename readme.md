A server for performing basic CRUD actions.

I have used Express as my framework, MongoDB as the database, and a package called body-parser to help deal with JSON requests.

This project is based on tutorial @ -
https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2

STEPS TO RUN:

1. Set up a mongo database.
	 The easiest way to set up a Mongo database is through mLab: it’s free for the smallest size, and quite fast to setup
	 Once you create an account and a MongoDB deployment, add a user to the database with a username and password.
	 Then grab the URL that is shown.

	And in a directory config in the root of your project, create a db.js file.
		mkdir config 
		cd config
		touch db.js
	
	Inside, add the URL:

		module.exports = {
		  url : YOUR URL HERE
		};
	Don’t forget to add your username and password (the ones from the database user, not your mLab account) into the URL.