const express = require("express");

const server = express();

const carRouter = require("./car/car-router");

server.use(express.json());
server.use("/api/cars", carRouter);
server.use(carRouter);

module.exports = server;
