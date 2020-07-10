import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/scss/style.scss'
import Aux from '../../hoc/_Aux'
import Breadcrumb from '../../App/layout/AdminLayout/Breadcrumb'
import decode from 'jwt-decode'
import { localDataSet } from '../../config/localDataSet';
import AuthService from '../../services/authService'
const AuthServiceApi = new AuthService()



class Login extends React.Component {
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
    
    handleValidation () {
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
      LoginMe = () => {

        if(this.handleValidation()){

            const loginVo={
                email:this.state.email,
                password:this.state.password
            }
            
            console.log('loginVologinVo',loginVo)
            
          AuthServiceApi.loginInfo(loginVo)
          .then(result => {

            console.log('resultresultresult',result)
              if (result.success) {
                //   this.setState({
                //     actionMessage: result.message,
                //     actionStatus: 'success',
                //     alertBox: true,
                //   })
                  
                //   setTimeout(() => {
                //     this.setState({
                //       alertBox: false
                //     })
                //   }, 2000)
                  if(result.token){
                      localDataSet.setLocal('token',result.token);
                     let tokenData = decode(JSON.parse(localStorage.getItem('token')))
                     if(tokenData.role=='1'){
                        this.props.history.push('/dashboard') 
                     }else{
                        this.props.history.push('/dashboard') 
                     }
                  }   
                } else {
                    
                  this.setState({
                    actionMessage: result.message,
                    actionStatus: 'warning',
                    alertBox: true,
                  })
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
                                <h3 className='mb-4'>Login</h3>

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
                                    onClick={this.LoginMe}
                                >
                                    Login
                </button>
                                <p className='mb-0 text-muted'>
                                    Don’t have an account?{' '}
                                    <NavLink to='/register'>register</NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default Login
