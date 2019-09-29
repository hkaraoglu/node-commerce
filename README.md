
  
# node-commerce E-commerce API by written in  [Mongo](https://www.mongodb.com/) + [Express](https://expressjs.com) + [NodeJS](https://nodejs.org)      
      
This project is under maintainence and development. This project aims to:      
      
    
 - Implement standard endpoint services that can be used e-commerce projects.    
 - Provide an e-commerce development framework to developers    
 - Provide real time operations by using [socket.io](https://github.com/socketio/socket.io) . (Etc. chat app, social media plugin)  

DEMO URL:

https://node-commerce-advanced.herokuapp.com/

**  
  
# Endpoints:  
  
## *Auth*  
  
**[POST]**<br>  
**auth/login**<br>  
  Login for a user in the system.  <br>
  **Example Output:**<br>
  

      {
        "success": true,
        "message": "",
        "error_code": -1,
        "data": {
            "_id": "5d45745a6ee6f0b4a75e67ba",
            "firstname": "Hasan",
            "lastname": "Karaoğlu",
            "cart_products": [
                {
                    "product_id": "5d45cdb64f402f3018156f92",
                    "quantity": 9
                }
            ],
            "email": "hkaraoglutr@gmail.com",
            "favorite_products": [],
            "language_id": 1
        }
    }
     
**[GET]**<br>  
**auth/logout**<br>  
  Logout user and delete session from the system.  <br>
  **Example Output:** <br>

      {
        "success": true,
        "message": "Session was ended!",
        "error_code": -1,
        "data": {}
    }
      
   **[POST]**<br>  
**auth/register**<br>  
  Register a user into the system.  
  
## *Account*  
  
**[GET]**<br>  
**account/address**<br>  
Returns user's address list.  <br>
**Example Output:** <br>

    {
        "success": true,
        "message": "",
        "error_code": -1,
        "data": [
            {
                "_id": "5d587d27d577f878e171dcdc",
                "firstname": "Hasan23324434rr444",
                "lastname": "Karaoğlu 2",
                "definition": "Office address",
                "country_id": "1",
                "postal_code": null,
                "address_line": "bla bla street.",
                "tax_number": "123213",
                "tax_office": "sdfsfdd",
                "phone": "1231213",
                "mobile_phone": "4534343434"
            },
            {
                "_id": "5d587d8eb768a87960e73840",
                "firstname": "hasan",
                "lastname": "kara",
                "definition": "office address",
                "country_id": "1",
                "postal_code": "1232332",
                "address_line": "bla2 bla 2street number 1 ",
                "tax_number": null,
                "tax_office": null,
                "phone": "3524233444",
                "mobile_phone": null
            }
      ]

<hr />
  
**[GET]**<br>  
**account/address/:address_id**<br>  
Returns user's an address by address_id.  

**Example Output : <br>**

      {
        "success": true,
        "message": "",
        "error_code": -1,
        "data": {
            "_id": "5d45fc8f79a77b317222b4da",
            "firstname": "Hasan2332",
            "lastname": "Karaoğlu 2",
            "definition": "Office address",
            "country_id": "1",
            "postal_code": null,
            "address_line": "bla bla street.",
            "tax_number": "123213",
            "tax_office": "sdfsfdd",
            "phone": "1231213",
            "mobile_phone": "4534343434"
        }
    }

  
**[POST]**<br>  
**account/address**<br>  
Adds a new address for a user.   <br>
**Example Output:**

      {
        "success": true,
        "message": "The address was added successfully!",
        "error_code": -1,
        "data": [
            {
                "firstname": "hasan333343433",
                "lastname": "karagggbbbb",
                "definition": "office address",
                "country_id": "1",
                "postal_code": "1232332",
                "address_line": "bla2 bla 2street number 1 ",
                "phone": "3524233444",
                "customer_id": "5d59caf133be9b5e74f08d10",
                "_id": "5d59cb0933be9b5e74f08d11"
            }
        ]
    }

<hr/>

**[PUT]**<br>  
**account/address/:address_id**<br>  
Updates user's an address by address_id.  
  
  <hr/>
  
**[DELETE]**<br>  
**account/address/:address_id**<br>  
Deletes user's an address by address_id.
<hr/>

**[GET]**<br>  
**account/favorite/**<br>  
Returns user's favorite products.<br>  
**Example Output:**<br>  
    
    {
        "success": true,
        "message": "",
        "error_code": -1,
        "data": [
            {
                "_id": "5d45745a6ee6f0b4a75e67ba",
                "name": "Macbook Pro",
                "price": "280.00",
                "list_price": "300.00"
            }
        ]
    }
<hr/>

**[POST]** <br>  
**account/favorite/:product_id**<br>
Add a product into user's favorite products.
**Example Output:**<br>  

    {
        "success": true,
        "message": "Product was added into your favorites!",
        "error_code": -1,
        "data": {}
    }

  <hr/>

**[DELETE]**<br>  
**account/favorite/:product_id**<br>  
Delete a product from user's favorite products.
**Example Output:**<br>  

    {
        "success": true,
        "message": "Product was removed from your favorites!",
        "error_code": -1,
        "data": {}
    }
<hr/>
