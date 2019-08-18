
# node-commerce 
E-commerce API by written in  [Mongo](https://www.mongodb.com/) + [Express](https://expressjs.com) + [NodeJS](https://nodejs.org)    
    
This project is under maintainence and development. This project aims to:    
    
  
 - Implement standard endpoint services that can be used e-commerce projects.  
 - Provide an e-commerce development framework to developers  
 - Provide real time operations by using [socket.io](https://github.com/socketio/socket.io) . (Etc. chat app, social media plugin)

**

# Endpoints:

## *Auth*

**[POST]**<br>
**auth/login**<br>
	Login for a user in the system.
	
**[GET]**<br>
**auth/logout**<br>
    Logout user and delete session from the system.
    
   **[POST]**<br>
**auth/register**<br>
	Register a user into the system.

## *Account*

**[GET]**<br>
**account/address**<br>
Returns user's address list.

**[GET]**<br>
**account/address/:address_id**<br>
Returns user's an address by address_id.

**[POST]**<br>
**account/address**<br>
Adds a new address for a user.

**[PUT]**<br>
**account/address/:address_id**<br>
Updates user's an address by address_id.

**[DELETE]**<br>
**account/address/:address_id**<br>
Deletes user's an address by address_id.
