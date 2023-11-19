"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
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
//# sourceMappingURL=server.js.map