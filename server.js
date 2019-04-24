const express = require ('express'),
            bp = require('body-parser'),
            path = require('path'),
        DB_NAME = "truckin",
            port = 8000,
            app = express(),
            cors = require('cors');

app.use(bp.json()); //getting form data it will come in a json file
const react_path = path.join(__dirname, './client/build');
// console.log(react_path);
app.use(express.static(react_path));
app.use(cors());

// app.get("/trucks", (req, res) => {
//     res.json({status:'ok', trucks: ["ford f150", "optimus prime", "toyota taco", "bmw", "hotdog truck"]});  //send back json files to whatever is requesting it
// 
require('./server/utils/mongoose')(DB_NAME);
require('./server/utils/routes')(app);


app.all('*',(req, res, next) =>{
    res.sendFile(path.resolve('./client/build/index.html'));
});

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});

