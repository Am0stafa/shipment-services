//! security routes middlewares
const express = require('express');
const shipmentRoute = require('./routes/shipmentRoutes');
const app = express();
//! 1)security
//CORS handler
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });
  

//! 2) middlewares
//? body paser, for reading data from the body
app.use(express.json());
//? to pass data coming from URL encoded form
app.use(express.urlencoded({extended: true}));

//! 3) routes
app.use("/api/v1/shipments", shipmentRoute);

module.exports = app;