import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import './Profile.css';
import QuitProfile from '../../../images/icons/quit-profile.svg';
import Base from '../../../images/icons/icon-profile-base.svg';
import Body from '../../../images/icons/icon-profile-body.svg';
import Goals from '../../../images/icons/icon-profile-goals.svg';
import MyProgramms from '../../../images/icons/icon-profile-my-programms.svg';
import Notification from '../../../images/icons/icon-profile-notification.svg';
import Plan from '../../../images/icons/icon-profile-plan.svg';
import Reports from '../../../images/icons/icon-profile-reports.svg';
import Settings from '../../../images/icons/icon-profile-settings.svg';
import IconThirdSetings from '../../../images/icons/icon-settings-3.svg';
import IconFirstSetings from '../../../images/icons/icon-settings-1.svg';

const Profile = props => {
    return (
        <div className="profile-page">
            <div className="profile-page-header">
                <div className="profile-page-header__quit">
                    <h2>
                        Настройки
                    </h2>
                    <NavLink to="/">
                        <img src={QuitProfile} alt="quit" />
                    </NavLink>
                </div>
                <div className="profile-page-header__profile">
                    <div className="profile-page-header_icon profile-page-header__icon_settings">
                        <NavLink to="/Profile-settings">
                            <img src={Settings} alt="Settings" />
                        </NavLink>
                        <p>
                           Профиль 
                        </p>
                    </div>
                    <div className="profile-page-header_icon profile-page-header__icon_photo">
                        <img src={Settings} alt="Settings" />
                        <p>
                           Фотография 
                        </p>
                    </div>
                    <div className="profile-page-header_icon profile-page-header__icon_notifications">
                        <NavLink to="/Profile-notifications">
                            <img src={Notification} alt="Notification" />
                        </NavLink>
                        <p>
                           Уведомления 
                        </p>
                    </div>
                </div>
            </div>
            <div className="profile-page-bottom">
                <ul className="profile-page-bottom__list">
                    <li>
                        <NavLink to="/Plan">
                            <div className="profile-page-bottom__img-wrap"><img src={Plan} alt="Plan" /></div>
                            <p>
                                План на сегодня
                            </p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Body">
                            <div className="profile-page-bottom__img-wrap"><img src={Body} alt="Body" /></div>
                            <p>
                                Тело
                            </p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Goals">
                            <div className="profile-page-bottom__img-wrap"><img src={Goals} alt="Goals" /></div>
                            <p>
                                Цели
                            </p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Reports">
                            <div className="profile-page-bottom__img-wrap"><img src={Reports} alt="Reports" /></div>
                            <p>
                                Отчеты
                            </p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/MyProgramms">
                            <div className="profile-page-bottom__img-wrap"><img src={MyProgramms} alt="MyProgramms" /></div>
                            <p>
                                Мои программы
                            </p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Base">
                            <div className="profile-page-bottom__img-wrap"><img src={Base} alt="Base" /></div>
                            <p>
                                База знаний
                            </p>
                        </NavLink>
                    </li>
                </ul>
                <div className="profile-page-bottom__wrap-link">
                    <NavLink to="/Settings">
                        <div className="profile-page-bottom__img-wrap"><img src={IconFirstSetings} alt="first-icon" /></div>
                        <p>
                            Настройки
                        </p>
                    </NavLink>
                    <NavLink to="/AboutApp">
                        <div className="profile-page-bottom__img-wrap"><img src={IconThirdSetings} alt="third-icon" /></div>
                        <p>
                            О приложении
                        </p>
                    </NavLink>
                </div>
            </div>

        </div>
    )
}

export default Profile;