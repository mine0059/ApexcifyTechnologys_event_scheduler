<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" />
    <img src="https://img.shields.io/badge/-Express_5-000000?style=for-the-badge&logo=Express&logoColor=white" />
  </div>
</div>

# Simple Event Scheduler API

A simple REST API for scheduling and managing events. This project allows users to create events and retrieve a list of scheduled events sorted by date.

The API was built using Node.js and Express.js as part of a backend task.

Features

Create new events

Retrieve all scheduled events

Events are automatically sorted by date

Input validation using express-validator

Prevents creation of events with dates in the past

Clean and simple REST API structure

Event Data Structure

Each event contains the following fields:

Field	Type	Description
id	integer	Unique event identifier
title	string	Event title
description	string	Description of the event
date	string	Event date in YYYY-MM-DD format

Example event:

{
  "id": 1,
  "title": "Meeting with Team",
  "description": "Discuss project progress and next steps",
  "date": "2026-07-01"
}
API Endpoints
Get All Events

Returns all events sorted by date.

Endpoint

GET /events

Example Response

{
  "success": true,
  "data": [
    {
      "id": 3,
      "title": "Client Call",
      "description": "Discuss project requirements",
      "date": "2026-04-01"
    }
  ]
}
Create a New Event

Creates a new event.

Endpoint

POST /events

Request Body

{
  "title": "Project Review",
  "description": "Review quarterly progress",
  "date": "2026-08-01"
}

Validation Rules

title is required

title must not exceed 100 characters

description is required

date must be in YYYY-MM-DD format

date cannot be in the past

Installation

Follow these steps to run the project locally.

1. Clone the repository
git clone https://github.com/mine0059/ApexcifyTechnologys_event_scheduler.git
1. Navigate into the project folder
cd ApexcifyTechnologys_event_scheduler
1. Install dependencies
npm install
1. Start the server
npm run dev

The server will start at:

http://localhost:3000
Testing the API

This project includes request files for REST Client.

If you are using Visual Studio Code, you can test the API directly inside the editor.

Steps

Install the REST Client extension in VS Code.

Open the test.http file included in the project.

Click "Send Request" above the request.

Example request:

GET http://localhost:3000/api/v1/events

or

POST http://localhost:3000/api/v1/events
Content-Type: application/json

{
    "title": "We are going to have a meeting",
    "description": "Discuss project updates and next steps.",
    "date": "2026-10-01"
}
Project Structure
src
 ├── controllers
 │    └── events.controller.js
 │
 ├── routes
 │    └── events.route.js
 │
 ├── middlewares
 │    └── validationError.js
 │
 └── server.js
Technologies Used

Node.js

Express.js

express-validator

REST Client

Future Improvements

Possible improvements for the project:

Add a database (PostgreSQL or MongoDB)

Add update and delete event endpoints

Implement authentication

Add pagination for events

Add automated tests

Author

Onojefemue Oghenemine Emmanuel

Backend & Mobile Developer