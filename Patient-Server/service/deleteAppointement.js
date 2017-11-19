/**
 * Created by aravind on 14/11/17.
 */

let deleteappointement = (db,userid,date,doctorid,tokenno)=>{
	return new Promise((resolve,reject)=>{
		db.token.update({doctorid:doctorid,date:date},{$inc:{tokenno:-1}},(err)=>{
			if(!err){
				db.appointements.update({doctorid:doctorid,date:date,tokenno:{$gt:parseInt(tokenno)}},{$inc:{tokenno:-1}},{multi:true},(err)=>{
					if(!err){
						//resolve(true);
						db.appointements.remove({doctorid:doctorid,date:date,tokenno:parseInt(tokenno),googleid:userid},(err)=>{
							if(!err){
								resolve(true);
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
			}
			else{
				reject(err);
			}
		});
	}).then((status)=>{
		return status;
	}).catch((err)=>{
		return err;
	})
};

module.exports = {deleteappointement:deleteappointement};