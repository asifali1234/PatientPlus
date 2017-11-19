/**
 * Created by aravind on 11/11/17.
 */

let tokenno = require('./gettokenNos.js');

let doctordetails = (db)=>{

	return new Promise((resolve,reject)=>{
		db.doctors.find((err,doctors)=>{
			if(!err){
			    //console.log(doctors);
				tokenno.gettokenno(db,doctors).then((docs)=>{
				    resolve(docs);
                }).catch((err)=>{
				    reject(err);
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

module.exports = {
	doctordetails:doctordetails
};