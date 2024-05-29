const pagesRouter = require("express").Router();
const {sendIndex, sendDashboard} = require("../controllers/auth");
const { checkCookiesJWT, checkAuth } = require("../middleware/auth");
pagesRouter.get("/", sendIndex);
pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth,sendDashboard)
module.exports = pagesRouter