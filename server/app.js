// const express = require('express');
// const cors = require('cors');

import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api', (req, res) => {
  res.json({ name: 'idris' });
});

const port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
