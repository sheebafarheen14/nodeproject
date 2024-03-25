const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Example endpoint to handle form submission
app.post('/api/user', (req, res) => {
    // Here you can save user data to a database or perform any other necessary actions
    const userData = req.body;
    console.log('Received user data:', userData);
    // Example response
    res.json({ message: 'User data received successfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
