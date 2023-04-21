import fetch from "cross-fetch";

export function sendMessage(user:string, message:string, uri:string){
    return fetch(`${uri}/lookup?user=${user}`,{
        method:"POST",
        body:JSON.stringify({
            user, message

        }),
        headers:{
            "content-type":"application/json",
        }
    });
}