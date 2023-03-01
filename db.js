import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });
export const db = mysql.createConnection({
  host: process.env.dbhost,
  user: process.env.dbuser,
  password: process.env.dbpassword,
  database: process.env.dbdatabase,
});
