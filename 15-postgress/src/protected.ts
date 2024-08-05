import { Client } from "pg"
const client = new Client({
    connectionString: "postgresql://neondb_owner:t6UeoAWF0JLv@ep-crimson-frog-a1ldjccd.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
});

async function add() {
   
    try{
         await client.connect()
         const values=['raees','test1@gmail.ccom','bitcoin'];
         const query =`insert into users (username,email,password)values($1,$2,$3)`
         const res=await client.query(query,values)
         console.log(res)
    }
    catch(err){
        console.log('error',err);
    }
    finally{
      await  client.end()
    }
}
async function  doesuserexist(email:String) {
    await client.connect()
    const query=`select* from users where email=$1`
    const result=await client.query(query,[email]);

    if( result.rows.length==0){
        console.log("user not found")
        return null
    }
    else{
        console.log("user found",result.rows[0])
        return result.rows[0];
    }
    client.end()
}
//add()
doesuserexist('ak@gmail.com');