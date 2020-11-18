import React from 'react';
import Input from './elemets/Input';
import Button from './elemets/Button';
import LoginLink from './elemets/Link';
import vk from '../images/icons/vk.svg';
import google from '../images/icons/google.svg';
import facebook from '../images/icons/facebook.svg';

const Auth = props => {
    return (
        <div>
            <form className="form">
                <Input placeholder="E-mail" class="input"/>
                <Input placeholder="Пароль" class="input"/>
                <Button title="Войти"/>
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

export default Auth;