
let gettokenno = (db,docs)=>{

    return new Promise((resolve,reject)=>{
        for(let i=0;i<docs.length;i++){
            docs[i].dates =[];
            let id = docs[i].doctorid+"";
            console.log(id);
            db.token.find({doctorid:id},(err,token)=>{
                //console.log(token);
                if(!err){
                    for(var j=0;j<token.length;j++){
                        docs[i].dates.push({date:token[j].date,tokenno:token[j].tokenno});
                    }
                    console.log(docs[i].dates);
                    resolve(docs);
                }
                else{
                    reject(err);
                }

            });
        }
    }).then((docs)=>{
        return docs;
    }).catch((err)=>{
        return err;
    })

};

module.exports = {gettokenno:gettokenno};