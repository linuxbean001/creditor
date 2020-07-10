
const User = require('../model/customer')
const Login = require('../model/login-user-modal')
const Role = require('../role/role')
const jwt = require('jsonwebtoken')

function _checkForAlreadyRegistered(email, username) {
    return new Promise((resolve, reject) => {
        Login.find({
            email: email
        })
            .countDocuments()
            .then(data => {
                if (data != 0) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
    })
}
exports.addUser = (req, res, next) => {
            const user = new Login({
                role: Role.customer,
                email: req.body.email,
                password: req.body.password,
                CreateDate: new Date(),
            })
            _checkForAlreadyRegistered(req.body.email).then(data => {
                if (!data) {
                    user
                        .save()
                        .then(result => {
                            _getToken(result)
                                .then(token => {
                                    const userVo = new User({
                                        email: result.email,
                                        role: result.role,
                                    })
                                    userVo
                                        .save()
                                        .then(result => {
                                            res.status(201).json({
                                                message: 'Registered Successfully xx',
                                                success: true,
                                                token: token

                                            })

                                        })
                                        .catch(err => {
                                            res.status(400).json({
                                                message: 'Backend Error',
                                                success: false,
                                                body: err
                                            })
                                        })

                                })
                                .catch(err => {
                                    res.status(400).json({
                                        message: 'Backend Error',
                                        success: false,
                                        body: err
                                    })
                                })
                        })

                        .catch(err => {
                            res.status(400).json({
                                message: 'Backend Error',
                                success: false,
                                body: err
                            })
                        })
                } else {
                    res.status(201).json({
                        message: 'Email address already registered',
                        success: false
                    })
                }
            })
}

function _getToken(data) {
    return new Promise((resolve, reject) => {
        const tokenData = _setDataForToken(data)
        const secret = 'JWT_TOKEN_SECRET'
        const token = jwt.sign(tokenData, secret, {
            expiresIn: '5h'
        })
        resolve(token)
    })
}

function _setDataForToken(data) {
    const tokenData = {
        id: data._id,
        role: data.role,
        email: data.email
    }
    return tokenData
}