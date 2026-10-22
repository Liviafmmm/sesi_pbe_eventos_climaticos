const con = require('../db')

const cadastrar = (req, res) => {
    const { usuarioId, cidade, tipoEvento, temperaturaMaxima, nivelImpacto } = req.body

    const sql = 'INSERT INTO evento (usuarioId, cidade, tipoEvento, temperaturaMaxima, nivelImpacto) VALUES (?, ?, ?, ?, ?)'

    con.query(sql, [usuarioId, cidade, tipoEvento, temperaturaMaxima, nivelImpacto], (err, results) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: 'Erro ao cadastrar evento' })
        }

        res.status(201).json({
            message: 'Evento cadastrado com sucesso',
            id: results.insertId,
            ...req.body
        })
    })
}

const listar = (req, res) => {
    const sql = 'SELECT * FROM evento'

    con.query(sql, (err, results) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: 'Erro ao buscar eventos' })
        }

        res.json(results)
    })
}

const atualizar = (req, res) => {
    const { id } = req.params
    const { usuarioId, cidade, tipoEvento, temperaturaMaxima, nivelImpacto } = req.body

    const sql = 'UPDATE evento SET usuarioId = ?, cidade = ?, tipoEvento = ?, temperaturaMaxima = ?, nivelImpacto = ? WHERE id = ?'

    con.query(sql, [usuarioId, cidade, tipoEvento, temperaturaMaxima, nivelImpacto, id], (err, results) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: 'Erro ao atualizar evento' })
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Evento não encontrado ou sem alterações' })
        }

        res.json({ message: 'Evento atualizado com sucesso' })
    })
}

const excluir = (req, res) => {
    const { id } = req.params

    const sql = 'DELETE FROM evento WHERE id = ?'

    con.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: 'Erro ao excluir evento' })
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Evento não encontrado' })
        }

        res.json({ message: 'Evento excluído com sucesso' })
    })
}

const resumo = (req, res) => {
    const sql = 'SELECT AVG(temperaturaMaxima) AS mediaTemperatura FROM evento'

    con.query(sql, (err, resultado) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: 'Erro ao calcular resumo' })
        }

        const sqlEventos = 'SELECT * FROM evento'

        con.query(sqlEventos, (err, eventos) => {
            if (err) {
                console.error(err)
                return res.status(500).json({ error: 'Erro ao buscar eventos' })
            }

            res.json({
                eventos: eventos,
                mediaTemperatura: resultado[0].mediaTemperatura === null
                    ? null
                    : Number(resultado[0].mediaTemperatura)
            })
        })
    })
}

module.exports = {
    cadastrar,
    listar,
    atualizar,
    excluir,
    resumo
}
