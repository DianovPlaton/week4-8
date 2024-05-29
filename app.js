const express = require('express');
const path = require("path");
const pagesRouter = require("./routes/pages")
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const apiRouter = require("./routes/apiRouter");
const PORT = 3001;
const connectToDatabase = require("./database/connect")
const app = express();
const cors = require("./CORS/cors");
connectToDatabase();
app.use(cors, cookieParser(),bodyParser.json(), pagesRouter, apiRouter, express.static(path.join(__dirname, 'public'))); 
     
app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
}) 