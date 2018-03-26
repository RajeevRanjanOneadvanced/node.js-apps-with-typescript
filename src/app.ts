import DbClient = require("./common/DbClient");
const packageJSON = require("../package.json");

class App {
    public async start() {
        console.log("Starting application...");

        try {
            let db = await DbClient.connect(packageJSON.name);
            
            console.log("Trying to connect second time...");
            
            db = await DbClient.connect(packageJSON.name);
            
            console.log("----------------------------------------");
            console.log("Trying to save some a document...");
            
            let results = await db.collection("todo").insertOne({
                topic: "learn angular.js", progress: 10
            });

            console.log(`Document saved. Inserted ID: ${results.insertedId}`);
            
        } catch (error) {
            console.log("Unable to connect to db");
        }
    }
}

const app = new App();
app.start();
