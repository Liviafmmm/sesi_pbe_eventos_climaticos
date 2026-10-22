const express = require("express")
const router = express.Router()

const Usuario = require('./controllers/usuario')
const Evento = require('./controllers/evento')

router.get('/', (req, res) => {
    res.json("Back-end Eventos Climáticos respondendo")
})

router.post('/usuarios', Usuario.cadastrar)
router.get('/usuarios', Usuario.listar)
router.put('/usuarios/:id', Usuario.atualizar)
router.delete('/usuarios/:id', Usuario.excluir)

router.post('/login', Usuario.login)

router.post('/eventos', Evento.cadastrar)
router.get('/eventos', Evento.listar)
router.put('/eventos/:id', Evento.atualizar)
router.delete('/eventos/:id', Evento.excluir)

router.get('/resumo', Evento.resumo)

module.exports = router
