import express, { Request, Response } from 'express';

const app = express();
const PORT = 5001;

app.use(express.json());

let books: { id: number; title: string; author: string }[] = [];


app.get('/books', (req: Request, res: Response) => {
    res.json(books);
});

app.post('/books', (req: Request, res: Response) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({ message: 'Le titre et l\'auteur sont requis.' });
    }

    const newBook = {
        id: books.length + 1,
        title,
        author
    };

    books.push(newBook);
    res.status(201).json(newBook);
});


app.listen(PORT, () => {
    console.log(`🚀 Serveur en cours d'exécution sur http://localhost:${PORT}`);
});