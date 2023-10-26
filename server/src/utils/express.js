const express = require("express");

function createNewRouter() {
  return express.Router();
}
module.exports = { express, createNewRouter };
