const express = require('express');
const app = express();
const port = 3000;

// Add CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Serve the JSON file
app.get('/gene_data.json', (req, res) => {
  res.sendFile(__dirname + '/gene_data.json');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});