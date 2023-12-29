// Create web server application
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const commentRoutes = require("./routes/comments");
const db = require("./config/db");
const port = process.env.PORT || 5000;

// Connect to database
db.connect();

// Allow all origin access
app.use(cors());

// Parse request body
app.use(bodyParser.json());

// Add comment routes
app.use("/api", commentRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});