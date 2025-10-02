
import { Outlet } from 'react-router-dom';
import logo from '@assets/images/login/Logo.png';
import phone from '@assets/images/login/phone.png';
import "./layout.scss";

export default function Layout() {
    return (
        <>
            <div className="navbar">
                <div className="navbar__contentHeader">
                    <img src={logo} alt="logo rimac" width="73" className="navbar__contentHeader__logo" />

                    <div className="navbar__contentHeader__box">
                        <span className="navbar__contentHeader__box__text">¡Compra por este medio!</span>
                        <img src={phone} className="navbar__contentHeader__box__phone" alt="phone" />
                        <span className="navbar__contentHeader__box__cel">(01) 411 6001 </span>
                    </div>

                </div>
            </div>

            <div className="layout">
                <main className="layout__main">
                    <Outlet />
                </main>
            </div>
        </>
    )
}