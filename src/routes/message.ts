import { Request, Response } from "express";

export async function message(req:Request, res: Response) {
    const{to, message} = req.body;
    console.log(message);
    res.json({message:'Message received'});
//     try{

//         const foundUser = await lookupUser(to,process.env.URI!, uuidv4());
//         await sendMessage(to, message,foundUser.uri)
//     }catch(err){
//         return res.status(404).send("User not found. Cannot send message");
//     }
//     res.json({message:"success message"})
// }
    
}