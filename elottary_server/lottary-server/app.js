const express = require('express')
const app = express()
const bodyParser=require('body-parser');
const cors = require('cors');

const LoginRouter = require('./src/routes/loginRouter')
const UserRouter = require('./src/routes/userRouter')
const AgencyRouter = require('./src/routes/agencyRouter')
const SystemRouter = require('./src/routes/systemRouter')
const LottaryRouter = require('./src/routes/lottaryRouter')
const bookRouter = require('./src/routes/bookRouter')
const resultRouter = require('./src/routes/resultRouter')
const commentRouter = require('./src/routes/commentRouter')
const claimRouter = require('./src/routes/claimRouter')

app.use(cors());
app.use(express.json())   //convert to json
app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });
 
  
 app.use('/',LoginRouter)
// app.use('/register',RegisterRouter)
// app.use('/ration',ShopRouter)
app.use('/lottary',LottaryRouter)
app.use('/user',UserRouter)
app.use('/agency',AgencyRouter)
app.use('/system',SystemRouter)
app.use('/book',bookRouter)
app.use('/result',resultRouter)
app.use('/comment',commentRouter)
app.use('/claim',claimRouter)


app.listen(5000,()=>{
    console.log('server started at port 5000')
})