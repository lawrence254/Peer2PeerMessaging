import { Request, Response } from "express";
import { getNodeByUser, getNodes } from "../servers";
import { lookupUser } from "../Helpers/LookupUser";
import { v4 as uuidv4 } from 'uuid';

const seedIds = new Set();
export async function lookup(req: Request, res:Response) {
    const {user} = req.query as {user:string};
    const serverByUser = getNodeByUser(user);
    console.log(`Request for: ${req.query.user} was made`, serverByUser)
    const requestId = req.get("x-request-id") ?? uuidv4();

    if(seedIds.has(requestId)) return res.status(404).send(`User Not Found: ${req.query.user}`)

    seedIds.add(requestId);
    
    if(!serverByUser){
        let foundUser;
        for(let server of getNodes()){
            console.log('User not found. Checking ', server.user);
              foundUser = await lookupUser(user!,server.uri,requestId)
            }
            if(foundUser){
                return res.json(foundUser);
            }else{
                return res.status(404).send(`User Not Found: ${req.query.user}`)
            }
        }
        res.json(serverByUser)
    }