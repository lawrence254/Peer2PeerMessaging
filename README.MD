### Peer To Peer Communication
This is an attempt to emulate peer to peer communicaton on a distributed system using NodeJS and TypeScript.

### How It Works

Users creates their 'account' on their own URI while seed servers are created on predetermined URIs(Others can be added if needed).

With a minimum of 2 users, they can be registered on the same seed servers or each on their own seed server randomly.

Each seed server is aware of the other and the users registered under it for purposes of communication.


When a user decides to send a message, the user is searched in the seed servers and once found, the URI is then returned to the sending server which then sends the message directly to the intended audience.

### Requirements
The followingare the base requirements and the versions at the time of creating this repository.
1. Node (v17.0.1)
2. TypeScript (Version 5.0.4)

### How To Run

Start the servers by running the following commands in the terminal:

```USER_NAME=seedX PORT=5001 npm run dev``` This creates a seed server called seedX at port ```5001```. You can run this on different terminals to create as many seed servers as you wish but be sure to change the USER_NAME and PORT variables.

To create a user, You can run one of the following commands in the terminal:

1. ```USER_NAME=UserX npm run dev``` This will create a __UserX__ on the default port that you serve the project on.

2. ```PORT=5012 USER_NAME=Bobby npm run dev``` This will create a different user at port ```5012``` with the name __Bobby__

You can use the second opton to create as many users as you wish to have in your test.

### Sending Messages

To be able to send messages to users registered on the nodes, you can use Postman, Insomnia or another API testing client of your choice to hit the  ```/send``` endpoint. 

Example: Assuming our user ___Bobby___ is started on port 5012, we can then navigate to ```localhost:5012/send``` to send a message to ___UserX___ who is registered on ```localhost:3000```.

The structure of the message will be as follows: 
```JSON
{
	"message":"Hello UserX, It is nice to meet you",
	"to":"UserX"
}
```
Once you submit your request, the seed servers will search for a user with the matching username and if the name is not found on the first seed server, the requst is send to the next seed server available until the user is found. If no user is found mathcing the name in all the servers, you will get a `User Not Found` message.


