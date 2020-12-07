import React, { useState } from 'react';
import Logo from '../../elements/Logo/Logo';
import Button from '../../elements/Button/Button';
import Auth from '../../Auth';
import Reg from '../../Reg';
import {} from './Enter.css';
import LoginLink from '../../elements/LoginLink/LoginLink';
import vk from '../../../images/icons/vk.svg';
import google from '../../../images/icons/google.svg';
import facebook from '../../../images/icons/facebook.svg';

const Enter = (props) => {

    const regPage = <Reg />
    const authPage = <Auth />

    const [count, setCount] = useState(regPage);

    return(
        <section className="screen">
            <Logo />
            <div className="dflex sign-login">
                <Button onclick={() => setCount(regPage)} class="btn active" title="Регистрация"/>
                <Button onclick={() => setCount(authPage)} class="btn" title="Авторизация"/>
            </div>
            <div className="form-wrap">
                {count}
            </div>
            <div className="social-info">
                <span>Войти через</span>
                <div className="links">
                    <LoginLink adressLink='/vk' image={vk} class="link link_vk"/>
                    <LoginLink adressLink='/google' image={google} class="link link_google"/>
                    <LoginLink adressLink='/facebook' image={facebook} class="link link_facebook"/>
                </div>    
            </div> 
        </section>
    );

}

export default Enter;