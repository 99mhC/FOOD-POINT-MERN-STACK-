const   express = require('express');
const  cors = require('cors');
const  mongoose = require('mongoose');

//express use
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())



//Set connection with mongodb and useNewUrlParser and useUnifiedTopology

mongoose.connect("mongodb://127.0.0.1:27017/myregisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB conected")
})


// Make Schema and Model
const userSchema = new mongoose.Schema({
       name: String,
       email: String,
       phone: String,
       suggestion: String
       
   })

   // make document or collaction 

const User = new mongoose.model("User",userSchema);

app.post("/suggest", (req, res) => {
       console.log(req.body)
       const {name, email, phone, suggestion} = req.body

       const user = new User({
              name,
              email,
              phone,
              suggestion
             
          })

          user.save()
    
      
           }
       )
       





app.listen(9002,() => {
       console.log("started at port 9002")
   })
