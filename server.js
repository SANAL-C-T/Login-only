const express=require("express")

const path=require("path")
const bodyparser=require("body-parser")

// const {v4:uuidv4}=require("uuid")


const session=require("express-session")
const app=express();

const port=process.env.PORT||3000;//this is the address.

app.set('view engine','ejs')
app.engine('html', require("ejs").renderFile);//regestering template engine.
//middleware
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))


app.use("/static",express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))


app.use(session({
    secret:"hellogoodmornig",
    resave:false,
    saveUninitialized:true
})); 


const router =require("./router"); //importing of router module.

app.use('/', router); //using the router.

app.listen(port);// input from url comes here.