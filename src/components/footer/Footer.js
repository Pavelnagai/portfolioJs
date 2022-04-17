import React from 'react';
import style from './Footer.module.css'
import telegram from './../../common/image/telegram-brands.svg'
import viber from './../../common/image/viber-brands.svg'
import ln from './../../common/image/linkedin-brands.svg'

const Footer = () => {
    return (
        <footer id="footer">
            <div className={style.footer_top}>
                <a href="#" className={style.resumo_fn_totop}>
                    <span>

                    </span>
                </a>
            </div>
            <div className={style.footer_content}>
                <h3>Nagai Pavel</h3>
                <div className={style.iconContainer}>
                    <a href="https://t.me/nagai_pavel">
                        <img className={style.icon} src={telegram} alt="telegram"/>
                    </a>
                    <a href="https://www.linkedin.com/in/pavel-nagai-7aa4b1230/">
                        <img className={style.icon} src={ln} alt="linkedin"/>
                    </a>
                    <a href="">
                        <img className={style.icon} src={viber} alt="viber"/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;