import express, { Application } from "express";
import { getRandomSeedServer } from "./Helpers/GetRandomSeedServer";
import { registerWithSeedServer } from "./Helpers/RegisterWithSeedServer";
import { register } from "./routes/register";
import { lookup } from "./routes/lookup";
import { seeds } from "./Helpers/seed";
import { addNode } from "./servers";
import { send } from "./routes/send";
import { message } from "./routes/message";
require('dotenv').config();

const PORT = process.env.PORT ?? 3000;

const app: Application = express();

app.use(express.json());


app.post("/register", register)
app.get("/lookup", lookup)
app.post("/send", send);
app.post("/message", message)

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`)
})


async function initialize() {
    for(let seed of seeds){
        addNode(seed);
    }
    const randomSeedServer = getRandomSeedServer();
    // console.log(process.env);
    await registerWithSeedServer(randomSeedServer?.uri!)
}
setTimeout(()=>{
    initialize();
}, 500)
