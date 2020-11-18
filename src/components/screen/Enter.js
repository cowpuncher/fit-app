import React, { useState } from 'react';
import Logo from '../elemets/Logo';
import Button from '../elemets/Button';
import Auth from '../Auth';
import Reg from '../Reg';
import {} from '../../styles/enter.css';

const Enter = (props) => {


    const authPage = <Auth />
    const regPage = <Reg />

    const [count, setCount] = useState(authPage);

    return(
        <section className="screen">
            <Logo />
            <div className="dflex">
                <Button onclick={() => setCount(authPage)} class="btn active" title="Авторизация"/>
                <Button onclick={() => setCount(regPage)} class="btn " title="Регистрация"/>
                {count}
            </div>            
        </section>
    );

}

export default Enter;