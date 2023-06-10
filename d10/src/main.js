import { MongoClient } from "mongodb";

async function main() {
    const uri = "mongodb://127.0.0.1:27017";
    //open connection
    const client = new MongoClient(uri);

    const db = client.db("mydb");
    const message = db.collection("message");

   await message.insertOne({"username":"Rohit"});
  // close the connection
  await client.close();
  console.log("Record Added....");
//   console.log("Record Added....");


}

main();