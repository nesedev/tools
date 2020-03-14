'use strict'

const express = require('express');
const app = express();
const serveStatic = require('serve-static');
const port = 3000;

app.use(serveStatic('static'));

app.listen(3000);