export type Node = {
    uri:string;
    user:string
} 
const servers: Node[] = [];

export function getNodes(){
    return [... servers]
}
export function addNode(node:Node){
    console.log(`Registering ${node.user}`);
    const isAlreadyAdded = servers.find((existingNode)=> existingNode.user === node.user)
    if(isAlreadyAdded) return;
    // console.log(`${node.user} Registered at uri: ${node.uri}`)
    servers.push(node); 
}

export function getNodeByUser(user:string){
    return servers.find((server)=> server.user === user);

}
