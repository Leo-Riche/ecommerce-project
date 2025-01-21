const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('./ecommerce.db', (err) => {
    if (err) {
        console.error('Error opening database:', err);
    } else {
        console.log('Connected to SQLite database.');
        db.run(`CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            price REAL NOT NULL,
            description TEXT,
            image TEXT
        )`);
        db.run(`CREATE TABLE IF NOT EXISTS cart (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            productId INTEGER,
            quantity INTEGER,
            FOREIGN KEY (productId) REFERENCES products(id)
        )`);
    }
});

app.get('/products', (req, res) => {
    db.all('SELECT * FROM products', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});

app.post('/cart', (req, res) => {
    const { productId, quantity } = req.body;
    db.run(
        'INSERT INTO cart (productId, quantity) VALUES (?, ?)',
        [productId, quantity],
        function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({ cartId: this.lastID });
            }
        }
    );
});

app.get('/cart', (req, res) => {
    const query = `SELECT c.id, p.name, p.price, c.quantity, (p.price * c.quantity) AS totalPrice
                   FROM cart c
                   JOIN products p ON c.productId = p.id`;
    db.all(query, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});