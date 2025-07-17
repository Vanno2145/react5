import React from 'react'

import '../../LoginPageStyle/LoginForm.css'
import LoginFormCreate from './Components/LoginFormCreate'
import LoginFormEmail from './Components/LoginFormEmail'
import LoginFormPassword from './Components/LoginFormPassword'
import LoginFormSave from './Components/LoginFormSave'

function LoginFormRaightComp() {
    return (
        <div className='login-form'>
            <form>
                <LoginFormEmail></LoginFormEmail>
                <LoginFormPassword></LoginFormPassword>
                <LoginFormSave></LoginFormSave>
            </form>
            <LoginFormCreate></LoginFormCreate>
        </div>

    )
}

export default LoginFormRaightComp
