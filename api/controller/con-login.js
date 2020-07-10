const User = require('../model/customer')
const Login = require('../model/login-user-modal')
const jwt = require('jsonwebtoken')

/* ****************************Login User and Authenticate**************************** */
exports.authenticate = (req, res, next) => {
    Login.findOne({
        email: req.body.email
    })
        .then(data => {
          
                if (data) {
                    _getToken(data)
                        .then(token => {
                            res.status(201).json({
                                message: 'Loged In',
                                token: token,
                                success: true
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
                        message: 'Invalid email and password please try again.',
                        success: false
                    })
                }
        })
        .catch(err => {
            res.status(401).json({
                message: 'Invalid user',
                success: false
            })
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
        email: data.email,
        role: data.role,
    }
    return tokenData
}







