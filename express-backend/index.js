require('dotenv').config();
const mongoose = require("mongoose");
const cors = require("cors");

const port = process.env.PORT || 3000;
const dbURL = process.env.MONGODB;
const app = require("./app");
const routes = require("./routes");

var bodyParser = require('body-parser')


mongoose.connect(dbURL)
.then(() => {
    app.listen(3000, ()=>{
        console.log("DB connected", port);
    });

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());

    app.use((req, res, next)=>{
        const apiKye = req.get('API-Key');
        if(!apiKye || apiKye !== process.env.APIKey){
            res.status(401).json({message: 'unauthorised'});
        }
        else{
            next();
        }
    });
 
    app.use('/api', routes);
});
