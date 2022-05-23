const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config(); //global variable
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.static('./public')); //Here we ad frontend!
app.use(express.json());

//routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

// app.get('/api/v1/tasks')	//get all the tasks
// app.post('/api/v1/tasks')	//create a new task
// app.get('/api/v1/tasks/:id')	//get single task
// app.patch('/api/v1/tasks/:id')	//update task
// app.delete('/api/v1/tasks/:id')		//delete taskx

//Server listening
const port = process.env.PORT || 3000; //to test: PORT='whatever port' node app.js

const start = async () => {
   try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, console.log(`server listening on port ${port}`)); //server is only started if connection to DB is successfull
   } catch (error) {
      console.log(error);
   }
};

start();
