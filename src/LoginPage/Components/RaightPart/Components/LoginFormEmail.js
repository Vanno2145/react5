import React from 'react'

function LoginFormEmail() {
    return (
        <div className='login-cont-email'>
            <label for='email'>Електронна пошта або мобільний номер</label>
            <input name='email' type='text' className='login-form-email-phone'></input>
            <p>By entering your mobile number and one-time code sign-in option, you agree to receive a one-time verification code via SMS from IKEA. Message and data rates may apply.</p>
            <a href='#'>More info about Privacy Policy</a><br />
        </div>
    )
}

export default LoginFormEmail
