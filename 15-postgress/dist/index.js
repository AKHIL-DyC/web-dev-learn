"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://neondb_owner:t6UeoAWF0JLv@ep-crimson-frog-a1ldjccd.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
});
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const result = yield client.query(`
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
        }
        catch (error) {
            console.error("Error creating table:", error);
        }
        finally {
            yield client.end();
        }
    });
}
function addtotable() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield client.query(`
        INSERT INTO users(username,email,password) values('akhil','ak@gmail.com','crypto')
        `);
        console.log(result);
    });
}
function showtable() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield client.query(`select* from users`);
        console.log(result);
    });
}
createTable();
//addtotable();
showtable();
