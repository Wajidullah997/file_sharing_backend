const express = require('express');
const path = require('path')
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use('/files', require('./routes/show'))
app.use('/api/files', require('./routes/files'))
app.use('/files/download', require('./routes/download'))
const connectDB = require('./config/db');
connectDB();


app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.send("heloo this  is  me")
})
app.listen(PORT, () => {
    console.log(`it sucessfuly run on port no ${PORT}`)
});












// xFVS8BoJpR9XmgT0
// mongodb+srv://<username>:<password>@cluster0.2jtoniq.mongodb.net/?retryWrites=true&w=majority