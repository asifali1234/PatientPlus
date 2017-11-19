/**
 * Created by aravind on 11/11/17.
 */

const calendarapi = require('node-google-calendar');
const config = require('../settings.js');

let cal = new calendarapi(config);

var event = {
    'start': {
        'dateTime': new Date(),
        'timeZone': 'Asia/Calcutta',
    },
    'end': {
        'timeZone': 'Asia/Calcutta',
    },
    'recurrence': [
        'RRULE:FREQ=DAILY;COUNT=2'
    ],
    'attendees': [
    ],
    'reminders': {
        'useDefault': false,
        'overrides': [
            {'method': 'email', 'minutes': 24 * 60},
            {'method': 'popup', 'minutes': 10},
        ],
    },
};

let bookforDoctor = (db,userid,doctorid,date,doctorName,patientemail,starttime)=>{
	let currdate = new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear();
	let bookdate = date.split('/');
	let booktime = starttime.split(':');
	booktime[0] = parseInt(booktime[0]);
	booktime[1] = parseInt(booktime[1]);
	return new Promise((resolve,reject)=>{
		db.token.findAndModify({query:{doctorid:doctorid,date:date},update:{$inc:{tokenno:1}},upsert:true,new:true},(err,docs)=>{
			if(!err){
				let token =docs.tokenno;
				db.appointements.save({googleid:userid,doctorid:doctorid,date:date,tokenno:token,doctorName:doctorName},(err)=>{
					if(!err){
						event.summary = "Appointement with\t"+doctorName;
					    event.description = "Your token no is\t"+token+"Please don\'t forget about appointement!!";
					    event.attendees.push({'email':patientemail});
					    let endtime = token*15;
					    console.log(endtime);
					    console.log(Math.floor(endtime/60));
					    if (Math.floor(endtime/60)>0){
                            booktime[0] = booktime[0]+Math.floor(endtime/60);
                            endtime = endtime - (Math.floor(endtime/60)*60);
                            console.log(endtime);
                            if((booktime[1]+endtime)>=60){
                                booktime[0]++;
                                endtime = endtime-60;
                                booktime[1] = booktime[1]+endtime;
                            }
                            else{
                                booktime[1] = booktime[1]+endtime;
                            }
					    }
					    else{
					        if((booktime[1]+endtime)>=60){
					            booktime[0]++;
					            endtime = endtime -60;
					            booktime[1] = booktime[1]+endtime;
                            }
                            else{
					            booktime[1] = booktime[1]+endtime;
                            }
                        }

                        console.log(booktime);
					    event.end.dateTime = new Date(bookdate[2],bookdate[1],bookdate[0],booktime[0],booktime[1],0,0);
					    cal.Events.insert('primary',event).then((resp)=>{
					    	docs.doctorName = doctorName;
					        docs.calendarid = resp.id;
					        resolve(docs);
                        }).catch((err)=>{
					        docs.calendarerror = err;
					        resolve(docs);
                        });

					}
					else{
						reject(err);
					}
				});
			}
			else{
				reject(err);
			}
		});
	}).then((docs)=>{
		return docs;
	}).catch((err)=>{
		return err;
	});
};

module.exports = {booking:bookforDoctor};