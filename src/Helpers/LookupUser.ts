import fetch from "cross-fetch";
export function lookupUser(user:string, uri:string, requestId: string){
    console.log(`${uri}/lookup?user=${user}`)
return fetch( `${uri}/lookup?user=${user}`,{
    headers:{
        "x-request-id": requestId
    }
}).then((response)=> {
    if(response.ok){
        response.json()
    }
    throw new Error("User was not found in server")
 });
}
