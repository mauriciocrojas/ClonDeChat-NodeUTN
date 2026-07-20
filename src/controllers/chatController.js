const Chat = require('../models/Chat');

exports.createChat = async (req, res, next) => {
    try {
        const newChat = await Chat.create(req.body);
        res.status(201).json({ success: true, data: newChat, message: 'Chat creado exitosamente' });
    } catch (error) {
        next(error);
    }
};

exports.getChats = async (req, res, next) => {
    try {
        const chats = await Chat.find().populate('participants', 'username');
        res.status(200).json({ success: true, data: chats, message: 'Chats obtenidos exitosamente' });
    } catch (error) {
        next(error);
    }
};