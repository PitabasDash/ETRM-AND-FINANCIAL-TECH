const express = require('express');
var cors = require('cors')
const app = express();
const port = 3000;



const companyData = {
    company1: [10, 20, 30],
    company2: [15, 25, 35],
    company3: [20, 30, 40]
    // Add more company data as needed
};

app.use(cors())

app.use(express.static('public')); // Serve static files from 'public' directory
app.get('/', (req, res) => {
  return res.send("api running")
    
});

app.get('/data/:company', (req, res) => {
    const company = req.params.company;
    res.json(companyData[company] || []);
});

app.listen(port, () => {
    console.log(`Server Start From http://localhost:${port}`);
});