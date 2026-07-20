const User = require('../models/User');

exports.createUser = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({ success: true, data: newUser, message: 'Usuario creado exitosamente' });
    } catch (error) {
        next(error);
    }
};

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, data: users, message: 'Usuarios obtenidos exitosamente' });
    } catch (error) {
        next(error);
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ success: false, data: null, message: 'Usuario no encontrado' });
        res.status(200).json({ success: true, data: user, message: 'Usuario eliminado exitosamente' });
    } catch (error) {
        next(error);
    }
};