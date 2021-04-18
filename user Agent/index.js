var express = require('express');
var app = express();
var useragent = require('express-useragent');
// const router = express.Router();

// app.use(app.router);
app.set("views", __dirname + "/templates");
app.set("view engine", "ejs");
// app.use('port', process.env.PORT || 8080)
app.use(useragent.express());

app.get("/", (req, res) => {
    console.log(req.useragent);
    var platform = req.useragent.platform;
    if (platform == 'iPad') {
        res.send('this is a Tablet');
    } else if (platform == 'Microsoft Windows') {
        res.send("this is Dekstop")
    } else if (platform == 'Android' || platform == 'iPhone' || platform == 'Microsoft Windows Phone') {
        res.send('this is a Mobile');
    } else {
        res.send("this is Dekstop")
    }
    // res.render("htmlFiles/index.ejs")
    // res.send(req.useragent)

})
var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(port, "has been started");
})
// module.exports = router;