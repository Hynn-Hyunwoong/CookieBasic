const express = require("express")
const nunjucks = require("nunjucks")
const app = express()
const router = require("./routes")
const cookieParser = require('cookie-parser')


//Nunjucks Engine Plugin
app.set("view engine", "html")
nunjucks.configure("views", {
    express: app,
})


//Middleware
app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(router)
app.use((error,req,res,next)=>{
    console.error(error, error.message)
    res.send(`<script type='text/javascript'>
                alert("${error.message}");
                history.back();
            </script>`)
})


//Server Start
app.listen(3000, () => {
    console.log(`Tony, Engine Start`)
})