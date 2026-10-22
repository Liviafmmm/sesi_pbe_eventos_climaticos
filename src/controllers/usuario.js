const con = require('../db')

const cadastrar = (req, res) => {
    const { nome, email, senha } = req.body

    const sql = 'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, password(?))'

    con.query(sql, [nome, email, senha], (err, results) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: 'Erro ao cadastrar usuário' })
        }

        res.status(201).json({
            message: 'Usuário cadastrado com sucesso',
            id: results.insertId,
            nome,
            email
        })
    })
}

const listar = (req, res) => {
    const sql = 'SELECT id, nome, email FROM usuario'

    con.query(sql, (err, results) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: 'Erro ao buscar usuários' })
        }

        res.json(results)
    })
}

const atualizar = (req, res) => {
    const { id } = req.params
    const { nome, email, senha } = req.body

    const sql = 'UPDATE usuario SET nome = ?, email = ?, senha = password(?) WHERE id = ?'

    con.query(sql, [nome, email, senha, id], (err, results) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: 'Erro ao atualizar usuário' })
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' })
        }

        res.json({ message: 'Usuário atualizado com sucesso' })
    })
}

const excluir = (req, res) => {
    const { id } = req.params

    const sql = 'DELETE FROM usuario WHERE id = ?'

    con.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: 'Erro ao excluir usuário' })
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' })
        }

        res.json({ message: 'Usuário excluído com sucesso' })
    })
}

const login = (req, res) => {
    const { email, senha } = req.body

    const sql = 'SELECT id, nome, email FROM usuario WHERE email = ? AND senha = password(?)'

    con.query(sql, [email, senha], (err, results) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: 'Erro ao fazer login' })
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'E-mail ou senha inválidos' })
        }

        res.json({
            message: 'Login realizado com sucesso',
            usuario: results[0]
        })
    })
}

module.exports = {
    cadastrar,
    listar,
    atualizar,
    excluir,
    login
}
