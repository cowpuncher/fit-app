import React from 'react';
import Input from './elements/Input/Input';
import Button from './elements/Button/Button';

const Reg = props => {
    return (
        <div>
            <form className="form">
                <Input placeholder="Имя" class="input"/>
                <Input placeholder="E-mail" class="input"/>
                <Input placeholder="Пароль" class="input"/>
                <Input placeholder="Повторите пароль" class="input"/>
                <Button title="Зарегистрироваться" class="btn-form" />
            </form>            
        </div>
    )
}

export default Reg;