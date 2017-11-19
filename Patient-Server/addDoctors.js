let mongojs = require('mongojs');
const db = mongojs('mongodb://carehack:carehack@ds155695.mlab.com:55695/carehack',['users','doctors','token','appointements']);

let data = require('./doctors.json');

for(var i=0;i<data.length;i++){
    db.doctors.save(data[i],(err)=>{
        if(!err){
            console.log("sucess");
        }
        else{
            console.log(err);
        }
    });
}