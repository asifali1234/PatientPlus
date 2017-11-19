/**
 * Created by aravind on 15/11/17.
 */
//const keyfile = 'carehack-bc8263d11b23';
const key = require('./carehack-bc8263d11b23.json').private_key;
const service_acc_id = 'carehack@carehack-186017.iam.gserviceaccount.com';
const calendar_url = 'https://calendar.google.com/calendar/embed?src=j0nr0jn0ltfhs0kboblp6b1bhs%40group.calendar.google.com&ctz=Asia/Calcutta';
const calendar_id = {
	'primary':'carehack@carehack-186017.iam.gserviceaccount.com@gmail.com',
	'calendar-1': 'calendar1@group.calendar.google.com',
	'calendar-2': 'calendar2@group.calendar.google.com'
};
const TIMEZONE = 'UTC+08:00';

module.exports.calendarUrl = calendar_url;
module.exports.serviceAcctId = service_acc_id;
module.exports.calendarId = calendar_id;
module.exports.key = key;           //or if using json keys - module.exports.key = key;
module.exports.timezone = TIMEZONE;