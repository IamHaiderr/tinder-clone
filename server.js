import express from 'express';
import mongoose from 'mongoose';
import cards from './dbCards.js'
import cors from 'cors'
//App Config
const app = express();
const port= process.env.PORT || 8001
const connection_url= "mongodb+srv://admin:Haider123@tinderclone.4hxna.mongodb.net/tinderdb?retryWrites=true&w=majority"
//Middlewares
app.use(express.json())
app.use(cors());
//DB Config

 mongoose.connect(connection_url, {
      useNewUrlParser: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    //   useUnifiedTopology: true,
    })
  

//API end points
app.get('/', (req, res ) => {
    res.status(200).send('Hello Clever Programmer!!!mian g')
})

app.post('/tinder/cards', (req,res) => {
    const dbcards = req.body;
    cards.create(dbcards, (err, data)=> {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards', (req,res) => {
    
    cards.find( (err, data)=> {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

//App Listener
app.listen(port, () => console.log(`server is listening on port: ${port}`))