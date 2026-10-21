import express from 'express';
import cors from 'cors';
// import { use } from 'react';

const app = express();
app.use(cors({origin: process.env.client_url}));
app.use(express.json());

app.get('/api/health', (req, res)=>{
    res.json({ status:'ok', message: "taskflow api is running", time: new Date().toISOString()});
});
export default app;