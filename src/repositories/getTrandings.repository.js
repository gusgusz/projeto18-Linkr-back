import { connectionDb } from "../database/db.js";

export default async function getTrandings(){
    const hashtags = (await connectionDb.query(`SELECT hashtags.name, COUNT("hashtagPosts"."hashtagId") FROM "hashtagPosts"
    JOIN hashtags ON "hashtagPosts"."hashtagId" = hashtags.id GROUP BY hashtags.id;
    `)).rows;
    return hashtags;
}