import { secrets } from "../config/secrets.js";
import dbConfig from "../db/config.json" assert { type: "json" };

function connectDb() {
  return {
    host: dbConfig.host,
    user: dbConfig.user,
    password: secrets.dbPassword,
  };
}

function signToken(userId) {
  return `signed(${userId})with(${secrets.jwtSecret})`;
}

function main() {
  const db = connectDb();
  console.log("DB:", db.host, db.user, db.password);
  console.log("JWT:", signToken("demo-user"));
  console.log("AWS:", secrets.awsAccessKeyId, secrets.awsSecretAccessKey);
}

main();
