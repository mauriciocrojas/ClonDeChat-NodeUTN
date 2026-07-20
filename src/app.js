require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const errorHandler = require('./middlewares/errorHandler');

const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const messageRoutes = require('./routes/messageRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Esencial para la integración con el frontend (React)
app.use(express.json());

// Base de Datos
connectDB();

// Rutas
app.use('/users', userRoutes);
app.use('/chats', chatRoutes);
app.use('/messages', messageRoutes);

// Manejo de Errores
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});