## API Documentation

This sample project will give you a small RESTful API to build your template against. It is built using JavaScript/Node.js (our language of choice), ExpressJS (a small, lightweight web MVC framework) & Mongoose (a MongoDB object modelling library).

**List Users**
----
Returns a list of Users

* **URL**

  `/users`

* **Method:**

  `GET`

*  **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```javascript
    [{
      "_id": "57b330de848a005e48f5de94",
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "olivia",
        "last": "young"
      },
      "location": {
        "street": "1119 grove road",
        "city": "Mountmellick",
        "state": "rhode island",
        "zip": 88061
      },
      "email": "olivia.young@example.com",
      "username": "crazykoala938",
      "password": "malibu",
      "salt": "78TEnNQ1",
      "md5": "9bebcc9d890f8c9e04c9e40fc1f41476",
      "sha1": "36d6a69cabff0ad780a3dcceb4e94d44edb62fc6",
      "sha256": "9e39c873967f52d67e8d052aad87daf4b63d5464a27de982b64abfe9b208efc8",
      "registered": 1411100094,
      "dob": 818810543,
      "phone": "011-475-1126",
      "cell": "081-725-2254",
      "PPS": "4335321T",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/20.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/20.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/20.jpg"
      },
      "__v": 0
    }, {
      "_id": "57b330de848a005e48f5de95",
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "susanne",
        "last": "russell"
      },
      "location": {
        "street": "6896 grafton street",
        "city": "Naas",
        "state": "louisiana",
        "zip": 25003
      },
      "email": "susanne.russell@example.com",
      "username": "ticklishswan833",
      "password": "reader",
      "salt": "Qp38szSx",
      "md5": "57f8e3404f1926bf3fa50c152f037a33",
      "sha1": "43bf7f8fe85e46957cdcb33be61f19dfe9014317",
      "sha256": "c12980f91c86dae1ba9d4d880e8d51645e59f95c6b3d1f28854891d6587b39b5",
      "registered": 1345063087,
      "dob": 481147180,
      "phone": "061-032-9311",
      "cell": "081-609-1066",
      "PPS": "7348900T",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/69.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/69.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/69.jpg"
      },
      "__v": 0
    }]
    ```

* **Error Response:**

* **Code:** 500 INTERNAL SERVER ERROR <br />
  **Content:**

  ```javascript
  { "error": "Error listing users" }
  ```

* **Sample Call:**

  ```javascript
  $.ajax({
    url: "/users",
    dataType: "json",
    type : "GET",
    success : function(r) {
      console.log(r);
    }
  });
  ```


**Show User**
----
  Returns JSON data about a single user.

* **URL**

  `/users/:id`

* **Method:**

  `GET`

*  **URL Params**

   **Required:**

   `id=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```javascript
    {
      "_id": "57b330de848a005e48f5de94",
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "olivia",
        "last": "young"
      },
      "location": {
        "street": "1119 grove road",
        "city": "Mountmellick",
        "state": "rhode island",
        "zip": 88061
      },
      "email": "olivia.young@example.com",
      "username": "crazykoala938",
      "password": "malibu",
      "salt": "78TEnNQ1",
      "md5": "9bebcc9d890f8c9e04c9e40fc1f41476",
      "sha1": "36d6a69cabff0ad780a3dcceb4e94d44edb62fc6",
      "sha256": "9e39c873967f52d67e8d052aad87daf4b63d5464a27de982b64abfe9b208efc8",
      "registered": 1411100094,
      "dob": 818810543,
      "phone": "011-475-1126",
      "cell": "081-725-2254",
      "PPS": "4335321T",
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/20.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/20.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/20.jpg"
      },
      "__v": 0
    }
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
    { "error": "Error reading user" }
    ```

* **Sample Call:**

  ```javascript
  $.ajax({
    url: "/users/1",
    dataType: "json",
    type : "GET",
    success : function(r) {
      console.log(r);
    }
  });
  ```

**Update user detail**
----
Changes user data in database.

* **URL**

  `/users/:id`

* **Method:**

  `PUT`

*  **URL Params**

   **Required:**

   `id=[string]`

* **Body**
  ```javascript
  {"PPS":"3124689T","__v":0,"_id":"57f174c7b6f7f92c1a604a33","cell":"081-452-4664","dob":47355091,"email":"alex.weaver@example.com","gender":"female","location":{"street":"3730 high street","city":"Athlone","state":"minnesota","zip":54022},"md5":"faafa79fe47b7b14ceba8a18e67d7c16","name":{"title":"mrs","first":"Alex","last":"Weaver"},"password":"republic","phone":"051-382-8814","picture":{"large":"https://randomuser.me/api/portraits/women/67.jpg","medium":"https://randomuser.me/api/portraits/med/women/67.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/67.jpg"},"registered":1051376017,"salt":"Ydcc0rrt","sha1":"2d07e68c37b68e8078e048049cc6dafff7237576","sha256":"adc09a9cf0868d0efcbf3894c2a314b4d8c52c4419bbbb9368023ad9da29e3e2","username":"bluebear966"}
  ```
* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```javascript
    {
    	"ok": 1,
    	"n": 0,
    	"upserted": []
    }
    ```

* **Error Response:**

  * **Validation errors:** 400 BAD REQUEST <br />
    **Other errors:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
    { "error": "Error reading user" }
    ```
  
**Create new user**
----
Creates new user in database.

* **URL**

  `/users`

* **Method:**

  `POST`

*  **URL Params**

   None

* **Body**
  ```javascript
  {
  	"gender": "mutant",
  	"name": {
  		"title": "ms",
  		"first": "kayla",
  		"last": "bates"
  	},
  	"location": {
  		"street": "3058 rochestown road",
  		"city": "Nenagh",
  		"state": "new york",
  		"zip": 78058
  	},
  	"email": "kayla.bates@example.com",
  	"username": "lazyelephant819",
  	"password": "thesims",
  	"salt": "8LduNFxn",
  	"md5": "e1ee6d78a0d9ad8c8ec144fdb9c6c365",
  	"sha1": "fe6397b6bbeb7e45b47f605d5ff78982c455a720",
  	"sha256": "cf448900b11e55f3afdc574acb35218d12c60f8ce3d3eaf6f224b4ef806c1451",
  	"registered": 1063092485,
  	"dob": 1236033715,
  	"phone": "041-219-9423",
  	"cell": "081-921-6762",
  	"PPS": "8959904T",
  	"picture": {
  		"large": "https://randomuser.me/api/portraits/women/83.jpg",
  		"medium": "https://randomuser.me/api/portraits/med/women/83.jpg",
  		"thumbnail": "https://randomuser.me/api/portraits/thumb/women/83.jpg"
  	}
  }
  ```
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    Usually same as request body, but with `_id` of created user.

    ```javascript
    {
   	"__v": 0,
   	"gender": "mutant",
   	"name": {
   		"last": "bates",
   		"first": "kayla",
   		"title": "ms"
   	},
   	"location": {
   		"zip": 78058,
   		"state": "new york",
   		"city": "Nenagh",
   		"street": "3058 rochestown road"
   	},
   	"email": "kayla.bates@example.com",
   	"username": "lazyelephant819",
   	"password": "thesims",
   	"salt": "8LduNFxn",
   	"md5": "e1ee6d78a0d9ad8c8ec144fdb9c6c365",
   	"sha1": "fe6397b6bbeb7e45b47f605d5ff78982c455a720",
   	"sha256": "cf448900b11e55f3afdc574acb35218d12c60f8ce3d3eaf6f224b4ef806c1451",
   	"registered": 1063092485,
   	"dob": 1236033715,
   	"phone": "041-219-9423",
   	"cell": "081-921-6762",
   	"PPS": "8959904T",
   	"picture": {
   		"thumbnail": "https://randomuser.me/api/portraits/thumb/women/83.jpg",
   		"medium": "https://randomuser.me/api/portraits/med/women/83.jpg",
   		"large": "https://randomuser.me/api/portraits/women/83.jpg"
   	},
   	"_id": "57f1bd2a31ea815c79a68798"
    } 
    ```

* **Error Response:**

  * **Validation errors:** 400 BAD REQUEST <br />
    **Other errors:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
    { "error": "Error reading user" }
    ```
  

**Delete user**
----
Deletes user data in database.

* **URL**

  `/users/:id`

* **Method:**

  `DELETE`

*  **URL Params**

   **Required:**

   `id=[string]`

* **Body**
  
  None
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    Empty body.

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**

    ```javascript
    { "error": "Error reading user" }
    ```
  



Inspired by https://gist.github.com/iros/3426278
