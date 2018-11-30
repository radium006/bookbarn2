const port = 3001
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
app = express()
app.use(cors())

customBooks = []

app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({extended: false}))

app.post('/api/add-book', function(req, res){
    title = req.body.title
    publisher = req.body.publisher
    genre = req.body.genre
    year = req.body.year
    imageURL = req.body.imageURL

    customBooks.push({title: title, publisher: publisher, genre: genre, year: year, imageURL: imageURL})

    //console.log("Posted")
    console.log(customBooks)

    res.json({success: true})
})

app.get('/api/get-books', function(req, res){
    console.log("Sup")
    res.json({books: customBooks})
})

app.listen(port, function(req, res){
    console.log('Server running my dude...')
})