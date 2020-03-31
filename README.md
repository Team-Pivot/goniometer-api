# Pivot API

Exposes routes used to manage the connected goniometer system.

## API Reference

## Predefined types

**Measurement types:** 'flexion', 'extension'
**Joint types:** 'elbow', 'knee', 'shoulder'

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

### POST /clients/:clientId/measurements

#### Description

#### Params

##### URL

- **clientId:** the 36 character UUID of the client

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

## Installation

In order to use this api, you should have node v12+ running on your system, as well as a MySQL v8 database running. If you need to set up node, you can follow this [install node with nvm](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/) tutorial. To install MySQL version 8, follow this [MySQL 8.0 installation](https://dev.mysql.com/doc/refman/8.0/en/installing.html) tutorial.

Once you have both installed and configured, just clone this repository onto your system and do the following in the project's root folder:

### Set up the databases

To set up the databases, you'll need to run the following command:

```bash
npm db:init
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
      user: "pivotAdmin",
      password: "<PIVOT ADMIN PASSWORD>", // whatever password you made for pivotAdmin
      host: "localhost",
      database: "pivot_api",
    }
    test: {
        user: "pivotAdmin",
        password: "<PIVOT ADMIN PASSWORD>", // whatever password you made for pivotAdmin
        host: "localhost",
        database: "pivot_api_test",
    }
  }
}
```

### Run npm install

```bash
npm install
```

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
