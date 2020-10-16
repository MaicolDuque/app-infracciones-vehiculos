const express = require('express')
const app = express()

const path = require('path')
const hbs = require ('hbs')

const dirPublic = path.join(__dirname, "../public")
const dirViews = path.join(__dirname, './views')
const dirPartials = path.join(__dirname, './views/partials')
// const dirNode_modules = path.join(__dirname , '../../node_modules')

//hbs
app.set('view engine', 'hbs')
app.set('views', dirViews)
app.use(express.static(dirPublic))
hbs.registerPartials(dirPartials)

app.get('/', (req, res) => {
  res.send("Sizas, melo")
})

app.get('/test', (req, res ) => {
  res.render('index', {
    titulo: 'Inicio',
    session: JSON.stringify(req.session)
  })
});

module.exports = app;