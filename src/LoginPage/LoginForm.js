import React from 'react'
import './LoginPageStyle/LoginForm.css'
import LoginFormLeftComp from './Components/LoginFormLeftComp'
import LoginFormRaightComp from './Components/RaightPart/LoginFormRaightComp'

function LoginForm() {
    return (
        <div className='login-form-wrapper'>
            <div className='login-form-container'>
                
                
            <LoginFormLeftComp></LoginFormLeftComp>
            <LoginFormRaightComp></LoginFormRaightComp>
            </div>
        </div>
    )
}

export default LoginForm
