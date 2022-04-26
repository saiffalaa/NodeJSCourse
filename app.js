const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const productRouter = require("./routes/admin")
const shopRouter = require("./routes/shop")
const errorPage = require("./controllers/errorController")
const app = express();

app.set("view engine","pug");
app.set("views","views");
app.use(shopRouter);
app.use(productRouter)

app.use(errorPage.error)
app.listen(3000)