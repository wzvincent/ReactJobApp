const express = require('express')
const utils = require('utility')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')




// mongoose.connection.on('connected', function(){
//   console.log('mongo connect success')
// })
const app = express()
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/user', userRouter)

app.listen(9093, function(){
  console.log('Node app start at port 9093')
})
