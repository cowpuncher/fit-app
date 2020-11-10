import Logo from '../elemets/Logo'
import Button from '../elemets/Button'
import Auth from '../Auth'
import {} from '../../styles/enter.css'

const Enter = (props) => {
    return(
        <section className="screen">
            <Logo />
            <div className="dflex">
                <Button class="btn active" title="Авторизация"/>
                <Button class="btn " title="Регистрация"/>
            </div>
            <Auth />
        </section>
    );
}

export default Enter;