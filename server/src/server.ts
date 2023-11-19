import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();


// declare a route with a response
app.get('/', (req, res) => {
    res.send("What's up doc ?!");
});

// start the server
app.listen(process.env.BACK_PORT, () => {
    console.log(`server running : http://${process.env.BACK_HOST}:${process.env.BACK_PORT}`);
});

// Please note that to access an env variable, follow the syntax:
// process.env.NAME_OF_YOUR_VARIABLE_DECLARED_IN_THE_ENV_FILE