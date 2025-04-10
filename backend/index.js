const express = require('express');
const app = express();
const testRoute = require('./routes/testRoute');  // Import route

app.use(express.json());  // Parse JSON data
app.use('/api', testRoute);  // Use the '/api' route

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
