// node js - is an runtime environment use for js run in back end ( v8 from google chrom in cpp)
// npm -  node pakage manager alow us to install pakage ( code written by some one else we can use that code in our project) 
// npm install pakage_name / npm i pakage name
// npm init / npm init -y use for installization folder for back end 
// for example we can use slurg pakage npm i slurg 
// server.mjs

//importting creatserver from node:http

//we can set common js or model in pakage.json "type" : "model"
//common js method
// const http = require("node:http");

//es6 new js way using import from 
import { createServer } from 'node:http';

//creating server data 
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1> checking the server </h1>');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`


