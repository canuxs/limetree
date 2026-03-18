const express = require('express');
const fs = require('fs'); // Dosya sistemi kütüphanesi
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '/')));

const DATA_FILE = './posts.json';

// Mesajları JSON dosyasından oku
app.get('/api/posts', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).send("Dosya okuma hatası.");
        res.json(JSON.parse(data || '[]'));
    });
});

// Yeni mesajı JSON dosyasına kaydet
app.post('/api/posts', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        const posts = JSON.parse(data || '[]');
        const newPost = {
            id: Date.now(), // Benzersiz ID
            title: req.body.title,
            content: req.body.content,
            user: "Misafir"
        };
        posts.push(newPost);

        fs.writeFile(DATA_FILE, JSON.stringify(posts, null, 2), (err) => {
            if (err) return res.status(500).send("Kaydetme hatası.");
            res.status(201).json(newPost);
        });
    });
});

app.listen(port, () => {
    console.log(`Forum sistemi http://localhost:${port} adresinde kalıcı olarak çalışıyor.`);
});
