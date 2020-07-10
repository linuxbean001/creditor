import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/scss/style.scss'
import Aux from '../../hoc/_Aux'
import Breadcrumb from '../../App/layout/AdminLayout/Breadcrumb'
import AuthService from '../../services/authService'

const AuthServiceApi = new AuthService()



class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: {},
        }
    }

    componentDidMount() {

    }

    getInputTextValue = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value,
            isinvalid: '',
        })
    }
    handleValidation() {
        let errors = {}
        let formIsValid = true
        // Name
        // Email
        if (!this.state.email) {
            formIsValid = false
            errors['email'] = 'Cannot be empty'
        }
        if (typeof this.state.email !== 'undefined') {
            let lastAtPos = this.state.email.lastIndexOf('@')
            let lastDotPos = this.state.email.lastIndexOf('.')
            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    this.state.email.indexOf('@@') == -1 &&
                    lastDotPos > 2 &&
                    this.state.email.length - lastDotPos > 2
                )
            ) {
                formIsValid = false
                errors['email'] = 'Email is not valid'
            }
        }
        if (!this.state.password) {
            formIsValid = false
            errors['password'] = 'Cannot be empty'
        }

        this.setState({ errors: errors })
        return formIsValid
    }
    RegisterMe = () => {

        if (this.handleValidation()) {

            const registerVo = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            }
            AuthServiceApi.registerInfo(registerVo)
                .then(result => {
                    if (result.token) {
                        // localDataSet.setLocal('token', result.token);
                         this.props.history.push('/login')
                    }
                })
                .catch(err => {
                    console.log('err', err)
                })
        }
    }
    render() {
        return (
            <Aux>
                <Breadcrumb />
                <div className='auth-wrapper'>
                    <div className='auth-content'>
                        <div className='auth-bg'>
                            <span className='r' />
                            <span className='r s' />
                            <span className='r s' />
                            <span className='r' />
                        </div>
                        <div className='card'>
                            <div className='card-body text-center'>
                                <div className='mb-4'>
                                    <i className='feather icon-user-plus auth-icon' />
                                </div>
                                <h3 className='mb-4'>Register</h3>
                                <div className='input-group mb-3'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='First Name'
                                        name='firstName'
                                        onChange={this.getInputTextValue}
                                        required
                                    />
                                    <span className='error-msg'>

                                    </span>
                                </div>
                                <div className='input-group mb-3'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Last Name'
                                        name='lastName'
                                        onChange={this.getInputTextValue}
                                        required
                                    />
                                    <span className='error-msg'>

                                    </span>
                                </div>
                                <div className='input-group mb-3'>
                                    <input
                                        type='email'
                                        className='form-control'
                                        placeholder='Email'
                                        name='email'
                                        onChange={this.getInputTextValue}
                                        required
                                    />
                                    <span className='error-msg'>
                                        {this.state.errors.email}
                                    </span>
                                </div>
                                <div className='input-group mb-4'>
                                    <input
                                        type='password'
                                        className='form-control'
                                        placeholder='password'
                                        name='password'
                                        onChange={this.getInputTextValue}
                                        required
                                    />
                                    <span className='error-msg'>
                                        {this.state.errors.password}
                                    </span>
                                </div>
                                <div className='form-group text-left'>

                                </div>
                                <button
                                    className='btn btn-primary shadow-2 mb-4'
                                    onClick={this.RegisterMe}
                                >
                                    Register
                </button>
                                <p className='mb-0 text-muted'>
                                    Allready have an account?{' '}
                                    <NavLink to='/login'>Login</NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default Register
