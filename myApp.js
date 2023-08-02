let express = require('express');
let app = express();
console.log("Hello World")
const absolutePath = __dirname + '/views/index.html'
app.listen(5000)
const css = __dirname + '/public'
app.use(express.static(css))
app.get("/", function(req,res) {
    res.sendFile(absolutePath)
})

const data = {"message": "Hello json"}
app.get("/json", function(req,res) {
    res.json(data)
})

app.get('/now', function(req, res, next) {
    req.time = new Date().toString(); 
    next();
  }, function(req, res) {
    const obj = {time: req.time}
    res.send(obj);
  });































 module.exports = app;
