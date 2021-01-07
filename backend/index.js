const express = require('express');
const app = express();
const cors = require('cors');

const pool = require('./database/db.js');
const port = 199;

app.use(cors());
app.use(express.json());

// CREATE A TODO
app.post('/todos', async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *', [description]);
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// GET ALL TODOS
app.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query('SELECT * FROM todo');
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// GET A TODO
app.get('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query('SELECT * FROM todo WHERE t_id = $1', [id]);
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// DELETE A TODO
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTodo = await pool.query('DELETE FROM todo WHERE t_id = $1', [id]);
        res.json({ status: 'success' });
    } catch (err) {
        console.error(err.message);
    }
});

// EDIT A TODO
app.put('/todos/:id', async (req, res) => {
    try {
        const { description } = req.body;
        const { id } = req.params;
        const updatedTodo = await pool.query('UPDATE todo SET description = $1 WHERE t_id = $2 RETURNING *', [description, id]);
        res.json(updatedTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});