/* Package import */
const express = require("express");

const router = express.Router();

/* Requiring Controller */
const { contact_me } = require("../controllers/contact.js");

/* Middleware */
router.post("/contact", contact_me)

module.exports = router;