'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: '*',
  },
});

require('dotenv').config();
const staffRoom = 'staff';
const { v4: uuidv4 } = require('uuid');


const authRoutes = require('./routes/auth.routes');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(authRoutes);


const PORT = process.env.PORT;


io.on('connection', (socket) => {
  console.log('user connected');

  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


app.use('*', notFoundHandler);
app.use(errorHandler);

const start = () => {
  if (!PORT) {
    throw new Error('Missing Port');
  }
  server.listen(PORT || 3000, () => console.log(`Listening on ${PORT}`));
};

module.exports = {
  server: app,
  start: start,
};
