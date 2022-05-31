const User = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { validationResult } = require("express-validator")
const config = require('../config/config')


exports.registration = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: "Uncorrect request", errors })
        }

        const { login, password } = req.body
        const candidate = await User.findOne({ login })
        if (candidate) {
            return res.status(400).json({ message: `User with login ${login} already exist` })
        }

        const hashPassword = await bcrypt.hash(password, 8)
        const user = new User({ login, password: hashPassword })
        await user.save()

        res.json({ message: "User was created" })
    } catch (e) {
        console.log(e)
        res.send({ message: "Server error" })
    }
}

exports.login = async (req, res) => {
    try {
        const { login, password } = req.body
        const user = await User.findOne({ login })
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const isPassValid = bcrypt.compareSync(password, user.password)
        if (!isPassValid) {
            return res.status(400).json({ message: "Invalid password" })
        }
        const token = jwt.sign({ id: user.id }, config.SECRET_KEY, { expiresIn: "12h" })
        return res.json({
            token,
            user: {
                id: user.id,
                login: user.login,
                arrayOfIds: user.arrayOfIds
            }
        })
    } catch (e) {
        console.log(e)
        res.send({ message: "Server error" })
    }
}

exports.auth = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user.id })
        const token = jwt.sign({ id: user.id }, config.SECRET_KEY, { expiresIn: "12h" })
        return res.json({
            token,
            user: {
                id: user.id,
                login: user.login,
                arrayOfIds: user.arrayOfIds
            }
        })
    } catch (e) {
        console.log(e)
        res.send({ message: "Server error" })
    }
}
