/**
 * Created by aravind on 15/11/17.
 */


//File created as Part of Testing google calendar api

const config = require('../settings.js');
const calendarapi = require('node-google-calendar');

let cal = new calendarapi(config);


var event = {
	'summary': 'Google I/O 2015',
	'location': '800 Howard St., San Francisco, CA 94103',
	'description': 'A chance to hear more about Google\'s developer products.',
	'start': {
		'dateTime': new Date(),
		'timeZone': 'Asia/Calcutta',
	},
	'end': {
		'dateTime': new Date(2017,11,19,2,33,30,0),
		'timeZone': 'Asia/Calcutta',
	},
	'recurrence': [
		'RRULE:FREQ=DAILY;COUNT=2'
	],
	'attendees': [
		{'email': 'aravindcranjan54@gmail.com'},
	],
	'reminders': {
		'useDefault': false,
		'overrides': [
			{'method': 'email', 'minutes': 24 * 60},
			{'method': 'popup', 'minutes': 10},
		],
	},
};

cal.Events.insert('primary', event)
	.then(resp => {
		console.log('inserted event:');
		console.log(resp);
	})
	.catch(err => {
		console.log('Error: insertEvent-' + err.message);
	});