import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://neondb_owner:t6UeoAWF0JLv@ep-crimson-frog-a1ldjccd.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
});

async function createTable() {
    try {
        await client.connect();
        const result = await client.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(30) UNIQUE NOT NULL,
                email VARCHAR(30) UNIQUE NOT NULL,
                password VARCHAR(30) NOT NULL
            )
        `);
        //passing sql commands like this will lead to sql injection where the user can put delete sql command in username and all the db will be gone
        //here all the things are directly taken as sql commands instead of value.
        console.log(result);
    } catch (error) {
        console.error("Error creating table:", error);
    } finally {
        await client.end();
    }
}

async function addtotable(){

    const result =await client.query(`
        INSERT INTO users(username,email,password) values('akhil','ak@gmail.com','crypto')
        `)
        console.log(result);
}
async function showtable (){
    const result= await client.query(`select* from users`)
    console.log(result);
}
createTable();
//addtotable();
showtable();