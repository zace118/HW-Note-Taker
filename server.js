const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
// Initialize the app and create a port
const app = express();

// env - environment
const PORT = process.env.PORT || 3000;

// Set up body parsing, static, and route middleware

// Making sure the app understands JSON data
app.use(express.json());
// Allows us to parse info from request (URL bar)
app.use(express.urlencoded({ extended: true }));
// Allows us access to the public folder, which typically holds static files
app.use(express.static("public"));


// app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));