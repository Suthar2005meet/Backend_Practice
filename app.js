const express = require('express')

const dbConnection = require('./src/utils/DBConnection.js')
dbConnection()

const app = express();
app.use(express.json())
const PORT = 3000

const prodRoute = require('./src/routes/productRoute.js')
app.use('/prod',prodRoute)

const bookroute = require('./src/routes/bookRoute.js')
app.use('/bk',bookroute)

const catagoryRoute = require('./src/routes/CatagoryRoute.js')
app.use('/cata',catagoryRoute)

const stateroute = require('./src/routes/stateRoute.js')
app.use('/st',stateroute)

const cityroute = require('./src/routes/cityRoute.js')
app.use('/ci',cityroute)

const empRoutes = require('./src/routes/employeeRoute.js')
app.use('/emp',empRoutes)

app.listen(PORT,()=>{
    console.log(`Server Has been port ${PORT}`)
})