/**
 * Created by aravind on 10/11/17.
 */

const newUser = (db,user) =>{
	//check in db for user is already present
	return new Promise((resolve,reject)=>{
		db.users.find({googleid:user},(err,docs) =>{
			//console.log(docs);
			if(!err){
				if(Object.keys(docs).length!=0) {
					if(docs[0].verified==true){
						docs[0].registered = true;
						resolve(docs[0]);
					}
					else{
						resolve({registered:false});
					}
				}
				else{
					resolve({registered:false});
				}
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
	newUser:newUser
};