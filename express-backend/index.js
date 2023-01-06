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
    const server = app.listen(3000, ()=>{
        console.log("DB connected", port);
    });

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());

    // const io = require('socket.io')(server,{
    //     pingTimeout: 60000,
    //     cors: {
    //         origin: "http://localhost:3000",
    //     },
    // });
    
    // io.on("connection",(socket) => {
    //     console.log("connected to the socket.io");
    // });
    
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
