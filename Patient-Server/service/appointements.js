/**
 * Created by aravind on 15/11/17.
 */

let currentappointements = (db,userid)=>{

	return new Promise((resolve,reject)=>{
		let date =  new Date();
		let currdate = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
		db.appointements.find({googleid:userid,date:{$gte:currdate}},(err,docs)=>{
			if(!err){
				resolve(docs);
			}
			else{
				reject(err);
			}
		});
	}).then((docs)=>{
		return docs;
	}).catch((err)=>{
		return err;
	})
};

let previousappointements = (db,userid)=>{

	return new Promise((resolve,reject)=>{
		let date = new Date();
		let currdate = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
		db.appointements.find({googleid:userid,date:{$lt:currdate}},(err,docs)=>{
			if(!err){
				resolve(docs);
			}
			else{
				reject(err);
			}
		});
	}).then((docs)=>{
		return docs;
	}).catch((err)=>{
		return err;
	})
};

module.exports = {prevAppointements:previousappointements,currAppointements:currentappointements};