const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

const postRouter = require('./routes/blog')
const userRouter = require('./routes/users')

app.use('/myblogs',postRouter)
app.use('/users',userRouter)


app.listen(port, () => {
  console.log('listening on port: ' + port);
});
