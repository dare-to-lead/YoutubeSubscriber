# Youtube Subscribers backend Project

This project using NodeJS, Express, MongoDB Atlas database, Mongoose and dotenv for setting Environment varialbles and including perticular routes end point in the URL, through this users can access all subscribers,access particular subscriber, add subscriber, delete, update subscriber by perticular IDs.

## Run Locally

Clone the project

```bash
  git clone https://github.com/dare-to-lead/YoutubeSubscriber/tree/master
```

Go to the project directory

```bash
  cd YoutubeSubscriber
```

Install dependencies

```bash
  npm install
```
Create .env file using .env

Set the environment key DATABASE_URL with you mongoDB connection URL

Start the server

```bash
  npm run start
```


## Quick Start

Node.js module should be installed in your machine befor download the project and run this command

```bash
  npm install
```
Start the server:
```bash
  npm start
```

    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DATABASE_URL`


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## API Reference

#### Get all subscribers

```http
  GET /api/ytSubscribers/
```

#### Get all subscriberChannel and name only

```http
  GET /api/ytSubscribers/names
```

#### Get single subscriber

```http
  GET /api/ytSubscribers/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of subscriber to fetch |

#### Add subscriber
```http
  POST /api/ytSubscribers/
```

#### Delete subscriber
```http
  DELETE /api/ytSubscribers/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of subscriber to delete |

#### Update subscriber
```http
  POST /api/ytSubscribers/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of subscriber to update |




## Demo
Demo weblink:


## Features

- Access all subscribers from remotely hoisted database
- Add new subscriber to database
- Access perticular data from database through a specific IDs
- Delete subscriber from the database through a specific IDs
- Update existing subscriber in the database through a specific IDs



## Deployment
Deployment link:




## FAQ

#### How to add new subscribers?

Use Postman to add new subscriber in the database.

#### How to delete new subscribers?
Use Postman to Delete subscriber from the database.

#### How to update new subscribers?
Use Postman to update subscriber from the database.
