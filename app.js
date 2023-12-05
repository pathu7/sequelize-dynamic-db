// const express = require("express");
// // const cors = require("cors");

// const app = express()

// //middleware
// app.use(express.json({}))
// app.use(express.urlencoded({ extended: true }))

// //router
// const router = require("./routes/index")
// app.use(router)

// // error
// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({
//         error:{
//             message: error.message
//         }
//     })
// })

// const PORT = 7070
// // console.log("HIIIII");

// // port
// app.listen(PORT, () => {
//     console.log(`server is on ${PORT}`);
// })


const express = require('express')
const cors = require('cors')


const app = express()

// middleware

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


// routers
const router = require('./routes/index')
app.use(router)

//static Images Folder

// app.use('/Images', express.static('./Images'))


//port

module.exports = app
