const User = require('../models/user.model')

exports.getUsers = (req, res) => {
    User
        .find()
        .then((users) => res.status(200).json(users))
        .catch((err) => res.send(err));
}

exports.addUser = (req, res) => {
    const { login, password } = req.body;
    const user = new User({ login, password });
    user
        .save()
        .then((user) => res.status(200).json(user))
        .catch((err) => res.send(err));
}

exports.getUser = (req, res) => {
    User
        .findById(req.params.id)
        .then((user) => res.status(200).json(user))
        .catch((err) => res.send(err));
}

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    User
        .findByIdAndDelete(id)
        .then(() => { res.json(id); })
        .catch((err) => res.send(err));
}

exports.editUser = (req, res) => {
    const { login, password } = req.body;
    const { id } = req.params;
    User
        .findByIdAndUpdate(id, { login, password }, { new: true })
        .then((user) => res.json(user))
        .catch((err) => res.send(err));
}