import React from 'react';
import Input from './elements/Input/Input';
import Button from './elements/Button/Button';

const Auth = props => {
    return (
        <div>
            <form className="form">
                <Input placeholder="E-mail" class="input"/>
                <Input placeholder="Пароль" class="input"/>
                <Button title="Войти" class="btn-form" />
            </form>
        </div>
    )
}

export default Auth;