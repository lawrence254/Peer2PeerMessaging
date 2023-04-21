import { Request, Response } from "express";

export async function message(req:Request, res: Response) {
    const{from, message} = req.body;
    console.log(`${message} from ${from}`);
    res.json({message:'Message received'});
    
}