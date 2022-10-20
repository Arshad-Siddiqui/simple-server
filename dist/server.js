"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.locals.counter = 0;
app.get('/', (req, res) => {
    res.send('Hello world. This is a web server!');
});
app.post('/counter', (req, res) => {
    app.locals.counter++;
    res.send('Counter: ' + app.locals.counter);
});
app.get('/counter', (req, res) => {
    res.send('Counter: ' + app.locals.counter);
});
app.delete('/counter', (req, res) => {
    app.locals.counter = 0;
    res.send('The counter has been reset!');
});
console.log(`Server listening on localhost:${port}`);
app.listen(port);
