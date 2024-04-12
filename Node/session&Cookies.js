const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(session({
    secret:'key',
    resave:false,
    saveUninitialized:true
}))

app.get('/',(req,res)=>{
    res.cookie(
        'userCookie',
        'hellobro',
        {
            maxAge:10000,
            httpOnly:true,
            secure:true
        }
    )
    req.session.userId = 'Rithas';
    res.send('Cookies and Sessions set');
})

app.get('/get',(req,res)=>{
    const userId = req.session.userId;
    const cookieName = req.cookies.userCookie;
    res.send({cookieName:cookieName, userId:userId})
})

app.listen(3000,()=>{
    console.log("listening...");
})