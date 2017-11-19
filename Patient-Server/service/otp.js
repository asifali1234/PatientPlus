/**
 * Created by aravind on 10/11/17.
 */

let pythonshell = require('python-shell');
let otpverification = (db,mobilenumber,id)=>{
		return new Promise((resolve,reject)=>{
			let random = Math.ceil(Math.random()*10000);
			db.users.update({googleid:id},{$set:{mobilenumber:mobilenumber,otpno:random,verified:false}},function (err,docs) {
				if(!err){
					console.log("here");
					console.log(docs);
					let options = {
						args:["Your mobile verification code is"+random,mobilenumber]
					};
					pythonshell.run('sendSMS.py',options,(err,results)=>{
							if(!err){
								resolve(results);
							}
							else{
								reject(err);
							}
					});
				}
				else{
					reject(err);
				}
			})
		}).then((succ)=>{
			return succ;
		}).catch((err)=>{
			return err;
		});
};

let otpverify = (db,googleid,otpno)=>{
	return new Promise((resolve,reject)=>{
		db.users.find({googleid:googleid},(err,docs)=>{
			if(docs[0].otpno==otpno){
				db.users.update({googleid:googleid},{$set:{verified:true}},(err,docs)=>{
					if(!err){
						resolve(true);
					}
					else{
						reject(err);
					}
				})
			}
			else{
				resolve(false);
			}
		})
	}).then((succ)=>{
		return succ;
	}).catch((err)=>{
		return err;
	})
};
module.exports = {otpverification:otpverification,verify:otpverify};