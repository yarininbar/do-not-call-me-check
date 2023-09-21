import express from "express";
import { checkCanCall } from "./checkNumber";



// Server configuration

const app = express();
const port = 8080; 
app.use(express.json());

// CORS middleware
  const cors = require('cors');

  const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow specific HTTP methods
    optionsSuccessStatus: 200,
  };

  app.use(cors(corsOptions));

// API endpoint
app.post('/checkNumberOnDNC', async (req, res) => {


    try {
      const phone = req.body.phone; 
      const token = req.body.token;
      const name = req.body.name;
      const canCall = await checkCanCall(phone, token, name);
  
      res.json(canCall);
    } catch (err: any) {
      res.status(500).json({error: err.message});
    }
  });


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });