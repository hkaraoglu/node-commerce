
# node-commerce 
E-commerce API by written in  [Mongo](https://www.mongodb.com/) + [Express](https://expressjs.com) + [NodeJS](https://nodejs.org)    
    
This project is under maintainence and development. This project aims to:    
    
  
 - Implement standard endpoint services that can be used e-commerce projects.  
 - Provide an e-commerce development framework to developers  
 - Provide real time operations by using [socket.io](https://github.com/socketio/socket.io) . (Etc. chat app, social media plugin)

**

# Endpoints:

## *Auth*

**[POST]**
**auth/login**
	Login for a user in the system.
	
**[GET]**
**auth/logout**
    Logout user and delete session from the system.
    
   **[POST]**
**auth/register**
	Register a user into the system.

## *Account*

**[GET]**
**account/address**
Returns user's address list.

**[GET]**
**account/address/:address_id**
Returns user's an address by address_id.

**[POST]**
**account/address**
Adds a new address for a user.

**[PUT]**
**account/address/:address_id**
Updates user's an address by address_id.

**[DELETE]**
**account/address/:address_id**
Deletes user's an address by address_id.
