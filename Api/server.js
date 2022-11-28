const express = require("express");
const cors = require("cors");
const { ErrorHandler } = require("./Middleware/Error/ErrorMiddleware");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

//mongodb connection
const connectDB = require("./Config/db");
connectDB();

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cors
app.use(cors());

//***************************************Global Routes *********************************/
//Admin auth route
app.use('/api/v1/admin/auth',require('./Routes/Admin/auth/authRoute'))

//Client auth route
app.use('/api/v1/client/auth',require('./Routes/Client/auth/authRoute'))

//Details route
app.use('/api/v1/details',require('./Routes/Car/detailsRoute'))

//Car route
app.use('/api/v1/cars',require('./Routes/Car/carRoute'))

//Type route
app.use('/api/v1/types',require('./Routes/Car/typeRoute'))

//Color route
app.use('/api/v1/colors',require('./Routes/Car/colorRoute'))

//Order route
app.use('/api/v1/orders',require('./Routes/Order/orderRoute'))
//*************************************************************************************/

//Error handler
app.use(ErrorHandler);

//run server
app.listen(PORT, () => console.log("Server running at the PORT " + PORT));
