const express = require('express') 
const path = require('path')
const pages = require('./pages.js')

//Criando Seridor
const server = express()

//Configurando rotas estáticas
server.use(express.static('public'))

//Configurando Template engine
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'hbs')

//Configurando rotas da aplicação
server.get('/', pages.index)
server.get('/orphanage', pages.orphanage)
server.get('/orphanages', pages.orphanages)
server.get('/create-orphanage', pages.createOrphanage)

server.listen(5500)