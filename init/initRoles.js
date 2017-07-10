// /*
//  * This script will initialize the default roles in the database for the app
//  * This is a sample of roles that you can use, feel free to create your own.
//  *
//  * Default roles:
//  * 	owner:
//  * 		-owner of the league
//  * 		-has access to all privileges
//  *	manager:
//  *		-manager of the league
//  *		-has access to all the teams, players, and season privileges
//  *		-no access to settings tab
//  *	coach:
//  *		-coach of team(s)
//  *		-has access to the teams tab
//  *		-no access to the players, season, or settings tab
//  *		-can view a subset of team(s) that he is assigned to and their roster(s)
//  *		-can view player information through the roster
//  *
//  * A description of what each privilege
// does can be found in ../models/roles.js
//  */

// const mongoose = require('mongoose');
// require('dotenv').config();
// <<<<<<< HEAD:init/initRoles.js
// const MONGO_URI = process.env.MONGO_URI;
// const Role = require('../server/models/roles.js');
// =======

// const MONGO_URI = process.env.MONGO_URI;
// const Role = require('../models/roles.js');
// >>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2:server/init/initRoles.js


// mongoose.connect(MONGO_URI);
// mongoose.connection
//     .once('open', () => console.log('Connected to MongoDB'))
//     .on('error', error => console.log(error));


// <<<<<<< HEAD:init/initRoles.js
// const adminRole = new Role({
// 	title: 'Administrator',
//       	privileges: {
// =======
// const ownerRole = new Role({
// 	name: 'owner',
// 		privileges: {
// >>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2:server/init/initRoles.js
// 		viewTeams: true,
// 		viewSubsetTeams: false,
// 		createTeams: true,
// 		editTeams: true,
// 		deleteTeams: true,
// 		viewPlayers: true,
// 		viewPlayerRegistrations: true,
// 		createPlayers: true,
// 		editPlayers: true,
// 		assignPlayers: true,
// 		viewSeasons: true,
// 		editSeasons: true,
// 		deleteSeasons: true,
// 		viewSettings: true,
// 		createStaff: true,
// 		editStaff: true,
// 		deleteStaff: true,
// <<<<<<< HEAD:init/initRoles.js
// 		deleteLeague: false,
// 	},
// });

// const managerRole = new Role({
// 	title: 'Manager',
//       	privileges: {
// =======
// 		deleteLeague: true
// 	}
// });

// const managerRole = new Role({
// 	name: 'manager',
// 		privileges: {
// >>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2:server/init/initRoles.js
// 		viewTeams: true,
// 		viewSubsetTeams: false,
// 		createTeams: true,
// 		editTeams: true,
// 		deleteTeams: true,
// 		viewPlayers: true,
// 		viewPlayerRegistrations: true,
// 		createPlayers: true,
// 		editPlayers: true,
// 		assignPlayers: true,
// 		viewSeasons: true,
// 		editSeasons: true,
// 		deleteSeasons: true,
// 		viewSettings: false,
// 		createStaff: false,
// 		editStaff: false,
// 		deleteStaff: false,
// 		deleteLeague: false
// 	}
// });

// const coachRole = new Role({
// <<<<<<< HEAD:init/initRoles.js
// 	title: 'Coach',
//       	privileges: {
// =======
// 	name: 'coach',
// 		privileges: {
// >>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2:server/init/initRoles.js
// 		viewTeams: false,
// 		viewSubsetTeams: true,
// 		createTeams: false,
// 		editTeams: false,
// 		deleteTeams: false,
// 		viewPlayers: false,
// 		viewPlayerRegistrations: false,
// 		createPlayers: false,
// 		editPlayers: false,
// 		assignPlayers: false,
// 		viewSeasons: false,
// 		editSeasons: false,
// 		deleteSeasons: false,
// 		viewSettings: false,
// 		createStaff: false,
// 		editStaff: false,
// 		deleteStaff: false,
// 		deleteLeague: false
// 	}
// });


// const adminPromise = adminRole.save()
// 	.then(() => console.log('Owner role added'));
// const managerPromise = managerRole.save()
// 	.then(() => console.log('Manager role added'));
// const coachPromise = coachRole.save()
// 	.then(() => console.log('Coach role added'));

// Promise.all([adminPromise, managerPromise, coachPromise])
// 	.then(() => console.log('Roles added'))
// 	.catch(err => console.log(err));