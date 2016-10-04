const express = require('express')
const path = require('path')
const PORT = process.env.port || 3001
const app = express()

app.use(express.static('public'))

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => res.render('index.html'))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
