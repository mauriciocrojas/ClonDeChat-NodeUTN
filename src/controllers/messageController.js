const Message = require('../models/Message');

exports.sendMessage = async (req, res, next) => {
    try {
        const newMessage = await Message.create(req.body);
        res.status(201).json({ success: true, data: newMessage, message: 'Mensaje enviado exitosamente' });
    } catch (error) {
        next(error);
    }
};

exports.getMessages = async (req, res, next) => {
    try {
        const messages = await Message.find({ chatId: req.params.chatId }).populate('userId', 'username');
        res.status(200).json({ success: true, data: messages, message: 'Historial obtenido exitosamente' });
    } catch (error) {
        next(error);
    }
};