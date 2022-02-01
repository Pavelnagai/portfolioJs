import React from 'react';
import style from './Footer.module.css'
import telegram
    from '../../common/image/png-telegram-social-media-computer-icons-telegram-online-chat-social-media-blue-angle-triangle.png'
import vkontakte
    from '../../common/image/png-clipart-vkontakte-logo-facebook-messenger-computer-icons-facebook-blue-logo.png'
import viber from '../../common/image/vaiber.png'


const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <h3>Nagai Pavel</h3>
                <div className={style.iconContainer}>
                    <a href="https://t.me/nagai_pavel">
                        <img className={style.icon} src={telegram} alt="telegram"/>
                    </a>
                    <a href="https://m.vk.com/id289463994">
                        <img className={style.icon} src={vkontakte} alt="vkontakte"/>
                    </a>
                    <a href="">
                        <img className={style.icon} src={viber} alt="viber"/>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Footer;