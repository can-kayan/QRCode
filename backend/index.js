

const express = require('express'); 
const http = require('http')
const socketIo=require('socket.io')
const app = express();
const server=http.createServer(app)
const io=socketIo(server)
const bodyParser= require('body-parser');
const morgan = require('morgan')
const mongoose = require('mongoose');
const cors= require('cors');

mongoose.Promise = global.Promise;
const adminRouter=require('./router/admin')
const userRouter=require('./router/user')
const loginRouter=require('./router/login')
require('dotenv/config');
const api = process.env.API_URL;
const connetion=process.env.CONNECTION_STRING
app.use(cors());
app.options('*',cors())
app.use(bodyParser.json());
app.use(morgan('tiny'));


app.use(`${api}/user`,userRouter);
app.use(`${api}/admin`,adminRouter)
app.use(`${api}/login`,loginRouter)
require('./helper/modelsReferance')

mongoose.connect(connetion,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    dbName:'qrCode'
})
.then(()=>{
    console.log('database connection is ready')
})
.catch((err) => { 
    console.log(err);
})



io.on('connection', (socket) => {
  console.log('Bir istemci bağlandı.');

  socket.on('notifyAdmin', (message) => {
    io.emit('adminNotification', message);
  });
});

app.listen(5000,()=>{
    console.log('server is running http://localhost:5000');
})
// require('./Services/modelsReferance')