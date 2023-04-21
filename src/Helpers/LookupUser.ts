import fetch from "cross-fetch";
import { Node } from "../servers";
export function lookupUser(user:string, uri:string, requestId: string){
    console.log(`${uri}/lookup?user=${user}`)
    return fetch(`${uri}/lookup?user=${user}`, {
    headers: {
      "x-request-id": requestId,
    },
  }).then((response) => {
    if (response.ok) {
      return response.json() as Promise<Node>;
    }
    throw new Error("user not found");
  });
}