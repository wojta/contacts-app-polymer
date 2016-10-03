# Contacts List demo application

This is a demo for implementation part of interview screener.

Demo is currently running at [http://contacts.sazel.cz:8080](http://contacts.sazel.cz:8080).


## Wireframes 

Check wireframes for [this application here](MOCKUP.md)

## Project structure

* bower_components - custom frontend components
* [controllers](controllers) - backend REST API controllers (currently only users)
* [models](models) - models for MongoDB (currently only User model)
* node_modules - custom backend components
* [seed](seed) - data to be filled for tests
* [src](src) - sources for frontend, Polymer elements
* [test](test - tests
* [validation](validation) - backend validations (currently only users)
* [API.md](API.md) - REST API documentation
* [app.js](app.js) - Backend Node.js app
* [bower.json](bower.json) - Configuration for frontend packages
* [index.html](index.html) - Start point for frontend 
* [package.json](package.json) - Configuration for backend packages
* [MOCKUP.md](MOCKUP.md) - Balsamiq mockups of application

Other directories are not that important.

## Backend

The backend consists of NoSQL database MongoDB and REST API written in JavaScript running on Node.js. 

### Requirements and installation

These application packages are required:
   
* [MongoDB](https://www.mongodb.com/) 
* [Node.js 5.x and later](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)

For Debian/Ubuntu based distro:

1. Install MongoDB, Node.js and npm
```
$ sudo apt-get install nodejs-legacy npm mongodb-server
$ source ~/.profile
```

2. Clone repo and cd to it
```
$ git clone https://github.com/wojta/contacts-app-polymer.git
$ cd contacts-app-polymer
```

3. Install node packages using npm
```
$ npm install
```

### Run tests!

This should also check your connection to MongoDB, app is set to default localhost connection on port 8000 (you can change it in [app.js](app.js)). 

```
$ npm test
```

If everything is ok, you can start backend.

### Start backend

```
$ npm start
```

### Check out documentation

Documentation is [here](API.md).

## Frontend

You should have already installed backend and I suppose that frontend will be hosted from the same computer.

### Installation

1. Install bowser and Polymer CLI (usually globally - root required, but local should work too)

```
$ sudo npm install -g bowser
$ sudo npm install -g polymer-cli
```

2. Install bower packages
```
$ cd contacts-app-polymer
$ bower install
```

### Viewing Application

This is mainly for development purposes. Not for production.

```
$ polymer serve
```

### Building Your Application

This should be suitable even for production.

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```

### Changing API URL

By default client uses http://localhost:8000 for accessing backend, so this is suitable only for localhost. To change the URL edit [index.html](index.html), line with `contacts-app` element:

`<contacts-app app_name="Contacts Demo" rest_url="http://localhost:8000"></contacts-app>`

