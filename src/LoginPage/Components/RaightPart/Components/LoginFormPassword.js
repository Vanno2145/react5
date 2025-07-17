import React from 'react'

function LoginFormPassword() {
    return (
        <div className='login-cont-password'>
            <label for='password'>Пароль</label>
            <div className='login-form-password-input'>
                <input type='password' name='password'></input>
                <img src='/LoginComponentImg/PasswordEye.png'></img>
            </div>
            <a href='#'>Забули свій пароль?</a>
        </div>
    )
}

export default LoginFormPassword
