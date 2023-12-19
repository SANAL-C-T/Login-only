var express = require("express");
var router = express.Router();

const Credential = {
  email: "abc@gmail.com",
  password: "123",
};

router.get("/",(req,res)=>{ //this is the cover page/
  res.render("welcome.html") //rendering the html page.
})

router.get("/About",(req,res)=>{//this will take to about page
  res.render("about")
})


router.post("/login", (req, res) => {//this will post the data from login page.
  if (req.body.email == Credential.email && req.body.password == Credential.password) 
  
  {
    req.session.isauth=true;

    req.session.user = req.body.email;

    res.redirect("/login");
    res.end();
  } 
  
  else {
    res.redirect("/login");
    
  }

});

router.get('/login',(req,res)=>{
  if(req.session.isauth){
      res.locals.title = 'Hello,';
      res.locals.user = req.session.user; // dynamic data using locals.
    res.render('homepage')
  }else{
    
    res.render('base')
  }
})


router.get('/Logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/login')
    
})

router.get("*",(req,res)=>{//catch all
  res.send(401)
})

module.exports = router;
