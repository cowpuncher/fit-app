import Input from '../elemets/Input'
import Button from '../elemets/Button'
import Link from '../elemets/Link'
import vk from '../../images/icons/vk.svg'
import google from '../../images/icons/google.svg'
import facebook from '../../images/icons/facebook.svg'

const Auth = props => {
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
                <Link image={vk} class="link link__vk"/>
                <Link image={google} class="link link__google"/>
                <Link image={facebook} class="link link__facebook"/>
            </div>
        </div>
    )
}

export default Auth;