const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("public"));
app.use(express.json());
const cors = require("cors");
app.use(cors());

const upload = multer({ dest: __dirname + "/public/images"});

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/index.html");
})
let jewels =[{
    id:1,
    name: "Engagement-Ring",
    description: "soft",
    rating:4,
    igredients: [
        "ing 1",
        "ing 2",
        "ing 3"
    ]
}]

app.get("/api/jewelry", (req, res)=>{
    res.send(jewels)
});

app.listen(3000, ()=>{
    console.log("listening server.js");
});

app.post("api/jewelry", (req, res)=>{
    console.log(req.body);
    const result = validateThings(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
    }

    const thingies = {
        id : thing.length + 1,
        name : req.body.name,
        description : req.body.description,
        ingredients: req.body.split(",")
    }

    thingies.push(thing);
    res.send(thingies);
});

const validateThings = (thing) => {
    const schema = Joi.object({
        id:Joi.allow(""),//nothing
        ingredients:Joi.allow(""),
        name:Joi.string().min(3).required(),
        description:Joi.string().min(3).required()
    });
    return schema;
};

