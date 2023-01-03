import { connectionDb } from "../database/db.js";

export default async function insertNewUserRepositorie(newUser) {
    try {
        const insert = await connectionDb.query('INSERT INTO users (username , email ,  password, "pictureUrl" ) VALUES ($1 , $2 , $3 , $4);' , [newUser.username, newUser.email, newUser.password, newUser.pictureUrl]);

    } catch (error) {
        console.log(error);
    };
};