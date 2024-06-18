const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(morgan ("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//CORS middleware
app.use(cors({
    origin: '*'
}));

app.use((req, res, next) => {
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
});

//const router = require ("../routes/routes");
// app.use("/", router);

//Untuk error 404
app.use((req, res, next) => {
    const err = new Error(`${req.url} not found on this server`);
    err.status = 404;
    next(err);
});

//Untuk error middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({error: err.message});
});

module.exports = app;