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
function add() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const values = ['raees', 'test1@gmail.ccom', 'bitcoin'];
            const query = `insert into users (username,email,password)values($1,$2,$3)`;
            const res = yield client.query(query, values);
            console.log(res);
        }
        catch (err) {
            console.log('error', err);
        }
        finally {
            yield client.end();
        }
    });
}
function doesuserexist(email) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const query = `select* from users where email=$1`;
        const result = yield client.query(query, [email]);
        if (result.rows.length == 0) {
            console.log("user not found");
            return null;
        }
        else {
            console.log("user found", result.rows[0]);
            return result.rows[0];
        }
        client.end();
    });
}
//add()
doesuserexist('ak@gmail.com');
