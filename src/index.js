const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')

const app = express()
const port = 8000

app.use(express.static(path.join(__dirname,'\\public')))


//http logger
app.use(morgan('combined'))

//template engine
app.engine('.hbs',handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
console.log(__dirname)
app.set('views',path.join(__dirname,'resources\\views'))

//routes
app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})