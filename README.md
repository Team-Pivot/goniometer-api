# Pivot API
Exposes routes used to manage the connected goniometer system.

## Predefined types
**Measurement types:** 'flexion', 'extension'
**Joint types:** 'elbow', 'knee', 'shoulder'

## API Reference
1. [Clients](#clients-routes)
1. [Clinics](#clinics-routes)
1. [Goniometer](#goniometers-routes)


## Clients Routes
### GET /clients
#### Description
Gets a list of clients

#### Params
##### Query
- **limit:** _(Integer)_ How many clients to pull (default 1000)
- **offset:** _(Integer)_ The index from which to start pulling items (default 0)

#### Responses
##### 200 Ok
```js
[
  {
    id: '12345678-1234-1234-1234-1234567890ab', // the uuid of the client,
    firstName: 'Bob',
    lastName: 'Robertson',
    clinic: '12345679-1234-1234-1234-1234567890ab', // uuid of the associated clinic
    birth_date: '1960-01-01',
  },
  // ... rest of the clients in the system
];
```


### POST /clients
#### Description
Create a new client

#### Params
##### Body
- **firstName:** _(Integer)_ How many clients to pull (default 1000)
- **lastName:** _(Integer)_ The index from which to start pulling items (default 0)
- **birstDate:** _(Integer)_ The index from which to start pulling items (default 0)
- **clinic:** _(Integer)_ The clinic at which to add the client (default 0)
- **ehrlink:** _(Integer)_ A valid url link to an endpoint resource (not required)

#### Responses
##### 200 Ok
```js
[
  {
    id: '12345678-1234-1234-1234-1234567890ab', // the uuid of the client,
    firstName: 'Bob',
    lastName: 'Robertson',
    clinic: '12345679-1234-1234-1234-1234567890ab', // uuid of the associated clinic
    birth_date: '1960-01-01',
  },
  // ... rest of the clients in the system
];
```


### PUT /clients/:client
#### Description
Updates a client

#### Params
##### URL
- **client** _(String)_ the 36 character UUID of the client to update

##### Body
- **firstName:** _(Integer)_ How many clients to pull (default 1000)
- **lastName:** _(Integer)_ The index from which to start pulling items (default 0)
- **birstDate:** _(Integer)_ The index from which to start pulling items (default 0)
- **clinic:** _(Integer)_ The clinic at which to add the client (default 0)
- **ehrlink:** _(Integer)_ A valid url link to an endpoint resource (not required)

#### Responses
##### 204 No Content
```json
{}
```


### DELETE /clients/:clientId
#### Description
Deletes a given client
#### Params
##### URL
- **client** _(String)_ the 36 character UUID of the client to update

#### Responses
##### 204 No Content
```json
{}
```


### GET /clients/:clientId/measurements
#### Description
Gets a list of measurements for a given client

#### Params
##### URL
- **clientId:** _(String)_ the 36 character UUID of the client

##### Query
- **dateRange:** _(String[2])_ an upper and lower bound date range in ISO format _(e.g. ["2020-04-13T23:10:01.000Z"])_
- **limit:** _(Integer)_ How many items to pull (default 1000)
- **offset:** _(Integer)_ The index from which to start pulling items (default 0)

#### Responses
##### 200 Ok
```js
[
  {
    id: '8f375edb-7dd1-11ea-96d0-448a5b898492',
    angle: '43.23',
    endAngle: null,
    jointType: 'elbow',
    measurementType: 'flexion',
    client: '9c99e9c8-7dbf-11ea-96d0-448a5b898492',
    clinic: '9c99e665-7dbf-11ea-96d0-448a5b898492',
    createdAt: '2020-04-13T21:55:59.000Z',
    updatedAt: '2020-04-13T21:55:59.000Z',
  },
  // ...
];
```
##### 400 Bad Request
```js
{
  errors: [
    // ... list of formatting errors
  ];
}
```


### POST /clients/:client/measurements
#### Description
#### Params
##### URL
- **client:** the 36 character UUID of the client

##### Body
- **clinic:** _(String)_ the 36 character UUID of the clinic that the measurement is taken at
- **angle:** _(Decimal)_ the angle of the measurement
- **endAngle:** _(Decimal)_ the second angle in a dynamic measurement
- **jointType:** _(String)_ one of the predefined types given
- **measurementType:** _(String)_ one of the predefined types given

#### Responses
##### 201 Resource Created
```js
{
  id: '12345678-1234-1234-1234-1234567890ab', // the uuid of the created measurement
}
```
##### 400 Bad Request
```js
{
  errors: [
    // ... list of formatting errors
  ];
}
```


## Clinics Routes
### GET /clinics
#### Description
Gets a list of all clinics

#### Params
**_N/A_**

#### Responses
##### 200 Resource Created
```js
[
  {
    id: '9c99e665-7dbf-11ea-96d0-448a5b898492',
    name: 'GT Clinic',
    street: '200 Techwood Dr.',
    zipcode: '30313',
    state: 'GA',
    createdAt: '2020-04-13T19:47:30.000Z',
    updatedAt: '2020-04-13T19:47:30.000Z',
  },
  // ...
];
```
##### 400 Bad Request
```js
{
  errors: [
    // ... list of formatting errors
  ];
}
```


### POST /clinics
#### Description
#### Params
##### Body
- **name** _(String)_ The name of the clinic,
- **street** _(String)_ The street address of the clinic,
- **zipcode** _(String)_ A 5 digit zipcode,
- **state** _(String)_ A two character state representation

#### Responses
##### 201 Resource Created
```js
{
  id: "c8dd9a68-8265-11ea-898a-448a5b898492"
}
```
##### 400 Bad Request
```js
{
  errors: [
    // ... list of formatting errors
  ];
}
```

### GET /clinics/:clinic
#### Description
Gets the specific clinic's information **Not yet implemented**

#### Params
##### URL
- **clinic:** the 36 character UUID of the clinic

#### Responses
##### 200 Ok
```js
{
  id: "c8dd9a68-8265-11ea-898a-448a5b898492",
  name: "GT Clinic",
  street: "200 Techwood Dr.",
  zipcode: "30313",
  state: "GA",
  createdAt: "2020-04-19T17:47:06.000Z",
  updatedAt: "2020-04-19T17:47:06.000Z"
}
```
##### 400 Bad Request
```js
{
  errors: [
    // ... list of formatting errors
  ];
}
```

### PUT /clinics/:clinic
#### Description
Updates clinic information
#### Params
##### URL
- **clinic:** the 36 character UUID of the clinic

##### Body
- **name** _(String)_ The name of the clinic,
- **street** _(String)_ The street address of the clinic,
- **zipcode** _(String)_ A 5 digit zipcode,
- **state** _(String)_ A two character state representation

#### Responses
##### 204 No Content
```js
{}
```
##### 400 Bad Request
```js
{
  errors: [
    // ... list of formatting errors
  ]
}
```

### DELETE /clinics/:clinic
#### Description
Deletes the clinic
#### Params
##### URL
- **clinic:** the 36 character UUID of the clinic

#### Responses
##### 204 No Content
```js
{}
```
##### 400 Bad Request
```js
{
  errors: [
    // ... list of formatting errors
  ]
}
```


### GET /clinics/:clinic/goniometers
#### Description
Get all goniometers at a given clinic
#### Params
##### URL
- **clinic:** _(String)_ the 36 character UUID of the clinic that the measurement is taken at

##### Query
- **search:** _(String)_ a string to match to a goniometer name
- **limit:** _(Integer)_ How many items to pull (default 1000)
- **offset:** _(Integer)_ The index from which to start pulling items (default 0)

#### Responses
##### 200 Resource Created
```js
[
  {
    id: '16220219-826a-11ea-898a-448a5b898492',
    name: 'test-goniometer',
    clinic: 'c8dd9a68-8265-11ea-898a-448a5b898492',
    lastUsed: null,
    createdAt: '2020-04-19T18:17:53.000Z',
    updatedAt: '2020-04-19T18:57:22.000Z',
  },
  // ...
];
```
##### 400 Bad Request
```js
{
  errors: [
    // ... list of formatting errors
  ];
}
```


### POST /clinics/:clinic/goniometers
#### Description
Registers an existing goniometer to the clinic (will NOT create a new goniometer). Fails if the goniometer is registered to a different clinic, or if the given goniometer does not exist.

#### Params
##### URL
- **clinic** _(String)_ the 36 character UUID of the clinic

##### Body
- **goniometer** _(String)_ the 36 character UUID of the goniometer

#### Responses
##### 204 No Content
```js
{}
```

##### 400 Bad Request
```js
{
  errors: [
    // ... list of formatting errors
  ]
}
```

### PUT /clinics/:clinic/goniometers/:goniometer
#### Description
Allows updating of the clinic's goniometer name (but not assigned clinic).

#### Params
##### URL
- **clinic** _(String)_ the 36 character UUID of the clinic
- **goniometer** _(String)_ the 36 character UUID of the goniometer

##### Body
- **name** _(String)_ the name of the goniometer

#### Responses
##### 204 No Content
```js
{}
```
##### 400 Bad Request
```js
{
  errors: [
    // ... list of formatting errors
  ]
}
```

### DELETE /clinics/:clinic/goniometers/:goniometer
#### Description
Unregisters the goniometer from the clinic (but does not delete it)

#### Params
##### URL
- **clinic** _(String)_ the 36 character UUID of the clinic
- **goniometer** _(String)_ the 36 character UUID of the goniometer

#### Responses
##### 204 No Content
```js
{}
```
##### 400 Bad Request
```js
{
  errors: [
    // ... list of formatting errors
  ]
}
```


## Goniometers Routes

### GET /goniometers
#### Description
Gets a list of all clinics

#### Params
- **limit:** _(Integer)_ How many items to pull (default 1000)
- **offset:** _(Integer)_ The index from which to start pulling items (default 0)

#### Responses
##### 200 Ok
```js
[
  {
    id: '16220219-826a-11ea-898a-448a5b898492',
    name: 'test-goniometer',
    clinic: null,
    lastUsed: null,
    createdAt: '2020-04-19T18:17:53.000Z',
    updatedAt: '2020-04-19T18:17:53.000Z',
  },
  // ...
];
```
##### 400 Bad Request
```js
{
  errors: [
    // ... list of formatting errors
  ];
}
```


### POST /goniometers
#### Description
Gets a list of all clinics

#### Params
##### Body
- **name:** _(String)_ the name of the goniometer (doesn't need to be unique, only letters,numbers, hyphens, underscores and spaces)
- **clinic:** _(String)_ the 36 character UUID of the goniometer's clinic (optional)

#### Responses
##### 201 Resource Created
```js
{
  id: '16220219-826a-11ea-898a-448a5b898492',
}
```
##### 400 Bad Request
```js
{
  errors: [
    // ... list of formatting errors
  ];
}
```


### DELETE /goniometers/:goniometer
#### Description
Deletes the given goniometer. Fails if the goniometer does not exist

#### Params
##### URL
- **goniometer:** _(String)_ the uuid of the goniometer to delete

#### Responses
##### 204 No Content
```json
{}
```
##### 400 Bad Request
```js
{
  errors: [
    // ... list of formatting errors
  ];
}
```


### PUT /goniometers/:goniometer
#### Description
Updates the goniometer clinic and name

#### Params
##### URL
- **goniometer:** _(String)_ the uuid of the goniometer to delete

##### Body
- **name:** _(String)_ the name of the goniometer (doesn't need to be unique, only letters,numbers, hyphens, underscores and spaces)
- **clinic:** _(String)_ the 36 character UUID of the goniometer's clinic (optional, blank = NULL)

#### Responses
##### 204 No Content
```json
{}
```
##### 400 Bad Request
```js
{
  errors: [
    // ... list of formatting errors
  ];
}
```
---

## Installation
In order to use this api, you should have node v12+ running on your system, a MySQL v8 database running, and Apache version 2.4 server. If you need to set up node, you can follow this [install node with nvm](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/) tutorial. To install MySQL version 8, follow this [MySQL 8.0 installation](https://dev.mysql.com/doc/refman/8.0/en/installing.html) tutorial. To install Apache, follow the installation guide for you platform [Download - Tha Apache HTTP Server Project](http://httpd.apache.org/download.cgi#apache24)

Once you have them installed and configured, just clone this repository onto your system and do the following in the project's root folder:

### Set up the databases

To set up the databases, you'll need to run the following command:

```bash
npm run db:init
```

This runs the setup script which will create two databases, _pivot_api_ and _pivot_api_test_. The script will prompt you for a MySQL username and password for an existing MySQL account on your system with the permissions to create users, databases, and procedures.

You will also need to create a new user in MySQL, and grant it privileges on the databases you just created. To do this, run the following:

```bash
mysql -u root -p

# from inside the mysql terminal
CREATE USER 'pivotAdmin'@'localhost' IDENTIFIED BY "<SOME PASSWORD YOU'LL PUT HERE AND NOT LOSE>";

GRANT all ON pivot_api.* TO 'pivotAdmin'@'localhost';
GRANT all ON pivot_api_test.* TO 'pivotAdmin'@'localhost';

FLUSH PRIVILEGES;
```

### Add a .config.js file

Create a file called _.config.js_ Make sure you don't forget the '.' before config or it will not be imported properly (and will be committed to the repository, which is very bad).

This file will hold all necessary application secrets. For now, just put the following placeholders.

```js
module.exports = {
  db: {
    dev: {
      user: 'pivotAdmin',
      password: '<PIVOT ADMIN PASSWORD>', // whatever password you made for pivotAdmin
      host: 'localhost',
      database: 'pivot_api',
    },
    test: {
      user: 'pivotAdmin',
      password: '<PIVOT ADMIN PASSWORD>', // whatever password you made for pivotAdmin
      host: 'localhost',
      database: 'pivot_api_test',
    },
  },
};
```

### Run npm install

```bash
npm install
```

### Setting Up the Apache Server
You'll need to set the document root and index in the httpd.conf file for the server to return the webapplication to the user. The location of this file and the comands used to control the server will very based on your opperating system.

Inside of your Apache2 directory open the /conf/httpd.conf file.

Set the DocumentRoot to [file path to repository]/dashboard

Set the DirectoryIndex to login.html

Start the server using the command specific to your OS.


## Running the api

### Run the tests

```bash
npm run test
```

### Start the server

```bash
npm run start
```

### Start the server in dev mode (auto-refresh)

```bash
npm run dev
```
