const express = require("express")
const mongoose = require("mongoose")
const dotEnv = require("dotenv")
const hyd = require("./routes/productRoutes")
const cors = require("cors")

const app = express()
dotEnv.config()
app.use(express.json())
const PORT = 4000
app.use(cors())


mongoose.connect(process.env.MONGO_LINK)
.then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log(err)
})

app.use("/demo",hyd)

app.listen(PORT, ()=>{
    console.log(`server started and running ${PORT}`)
})

// model (schema), controller (logic), route (methods, )