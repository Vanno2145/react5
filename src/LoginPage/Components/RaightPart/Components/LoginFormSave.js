import React from 'react'

function LoginFormSave() {
    return (
        <>
            <div className='login-form-saveinfo-container'>
                <div className='login-form-save'>
                    <input type='checkbox'></input>
                    <p>Зберегти інформацію</p>
                </div>
                <img src='/LoginComponentImg/Confirm.png'></img>
            </div>
            <button className='login-form-submit' type='submit'>продовжити</button>
        </>
    )
}

export default LoginFormSave
