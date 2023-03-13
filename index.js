const express = require("express")
const app = express();
const { connection } = require("./configs/db")
require('dotenv').config()
const { signupRouter } = require("./routes/signup")
const { loginRouter } = require("./routes/login")
const { logoutRouter } = require("./routes/logout")
const { productRouter } = require("./routes/products")
const { productaddRouter } = require("./routes/addproducts")
const { productdeleteRouter } = require("./routes/deleteproducts")
const { refreshRouter } = require("./routes/refresh")

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("JWT AUTH AND AUTHORISATION - II - ONLY BACKEND || HOME ROUTE")
})

// routes/endpoints
app.use("/signup", signupRouter)
app.use("/login", loginRouter)
app.use("/logout", logoutRouter)
app.use("/products", productRouter)
app.use("/addproducts", productaddRouter)
app.use("/deleteproducts", productdeleteRouter)
app.use("/refresh", refreshRouter)

app.listen(process.env.PORT, async()=>{
    try {
        await connection;
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log(`server is running on port ${process.env.PORT}`)
})