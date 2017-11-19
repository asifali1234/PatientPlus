/**
 * Created by aravind on 10/11/17.
 */
let updatedetails = (db,googleid,user)=>{
	return new Promise((resolve,reject)=>{
		db.users.save(user,(err,docs)=>{
			if(!err){
				resolve("sucess");
			}
			else{
				reject(err);
			}
		});
	}).then((succ)=>{
		return succ;
	}).catch((err)=>{
		return err;
	});
};

module.exports = {details:updatedetails};