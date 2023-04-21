import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { sendMessage } from "../Helpers/SendMessage";
import { lookupUser } from "../Helpers/LookupUser";
require('dotenv').config();


export async function send(req:Request, res:Response){
    const{to, message} = req.body;
    try{

        const foundUser = await lookupUser(to,process.env.URI!, uuidv4());
        await sendMessage(to, message,foundUser.uri)
    }catch(err){
        return res.status(404).send("User not found. Cannot send message");
    }
    res.json({message:"success message"})
}