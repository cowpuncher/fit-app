import React from 'react';
import {NavLink} from 'react-router-dom';
import './Settings.css';
import ArrowBack from '../../../images/icons/arrow-back.svg';
import ArrowRight from '../../../images/icons/arrow-right.svg';
import IconFirstSetings from '../../../images/icons/icon-settings-1.svg';
import IconSecondSetings from '../../../images/icons/icon-settings-2.svg';
import IconThirdSetings from '../../../images/icons/icon-settings-3.svg';
import IconFourthSetings from '../../../images/icons/icon-settings-4.svg';

const Settings = props => {
    return (
        <div className="settings-page">
            <div className="settings-page__header">
                <NavLink to="/">
                    <img src={ArrowBack} alt="arrow-back" />
                </NavLink>
                <h2>
                    Настройки
                </h2>
            </div>
            <ul className="settings-page__list">
                <li>
                    <NavLink to="/Interface">
                        <img src={IconFirstSetings} alt="first-icon" />
                        <div className="settings-page__info-wrap">
                            <p>
                                Интерфейс
                            </p>
                            <img src={ArrowRight} alt="arrow-right" />
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Notifictions">
                        <img src={IconSecondSetings} alt="second-icon" />
                        <div className="settings-page__info-wrap">
                            <p>
                                Уведомления
                            </p>
                            <img src={ArrowRight} alt="arrow-right" />
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/AboutApp">
                        <img src={IconThirdSetings} alt="third-icon" />
                        <div className="settings-page__info-wrap">
                            <p>
                                О приложении
                            </p>
                            <img src={ArrowRight} alt="arrow-right" /> 
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/More">
                        <img src={IconFourthSetings} alt="fourth-icon" />
                        <div className="settings-page__info-wrap">
                            <p>
                                Что-то ещё?
                            </p>
                            <img src={ArrowRight} alt="arrow-right" />
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Settings;