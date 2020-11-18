import React from 'react';
import Input from './elemets/Input';
import Button from './elemets/Button';
import LoginLink from './elemets/Link';
import vk from '../images/icons/vk.svg';
import google from '../images/icons/google.svg';
import facebook from '../images/icons/facebook.svg';

const Reg = props => {
    return (
        <div>
            <form className="form">
                <Input placeholder="Имя" class="input"/>
                <Input placeholder="E-mail" class="input"/>
                <Input placeholder="Пароль" class="input"/>
                <Input placeholder="Повторите пароль" class="input"/>
                <Button title="Зарегистрироваться"/>
            </form>
            <span>Войти через</span>
            <div className="links">
                <LoginLink adressLink='/vk' image={vk} class="link link__vk"/>
                <LoginLink adressLink='/google' image={google} class="link link__google"/>
                <LoginLink adressLink='/facebook' image={facebook} class="link link__facebook"/>
            </div>
            
        </div>
    )
}

export default Reg;