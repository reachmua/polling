// Beget: 11/26/2017
// # server.js
//
// A simple file update Polling server.
//
'use strict';

// Base Node requirements
var https = require('https');
var express = require('express');
var app = express();
var request = require('request');
var url = require('url');

// HTTP Authentication object.
var url = request.get('https://api.box.com/2.0/events?stream_position=now', {
  'auth': {
    'bearer': 'L0nA2a9BBa0WvYqsGW4qZ5LEXGxVQELb'
  }
});

// Determine current stream position.
https.get(url, (res) => {
  var data = '';
 
  // A chunk of data has been recieved.
  res.on('data', (chunk) => {
    data += chunk;
  });
 
  // Print out the result.
  res.on('end', () => {
    // data = JSON.parse(body);
    // console.log(JSON.parse(data).chunk_size);
    // console.log(JSON.parse(data).next_stream_position);
    console.log(JSON.parse(data));
  });
 
}).on("error", (err) => {
  console.log("Error: " + err.message);
});