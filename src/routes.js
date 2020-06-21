const express = require("express");

const MailController = require("./MailController");

const routes = express.Router();

routes.post("/", MailController.send);

module.exports = routes;
