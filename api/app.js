const express = require("express");
const cors = require('cors');
const app = express();
const corsConfig = require('./config/cors');

const jsonParser = express.json();

app.use(cors(corsConfig));

app.post("/call", jsonParser, function (request, response) {
	if(!request.body) return response.sendStatus(400);

	response.json(request.body);
});

// app.get("/", function(request, response){
//
// 	response.sendFile(__dirname + "/index.html");
// });

app.listen(4040);
