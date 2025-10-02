import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./userContext";
import "./login.scss"
import logo from '@assets/images/login/Logo.png';
import phone from '@assets/images/login/phone.png';
import bannerImage from '@assets/images/login/desktop-banner.jpg';
import arrow from '@assets/images/login/gl-sm-down.png';
import bannerMobile from '@assets/images/login/mobile-banner.jpg';


export default function Login() {

    const { loginUser } = useUser();
    const [type, setType] = useState('DNI');
    const [document, setDocument] = useState('');
    const [celular, setCelular] = useState('');
    const [errors, setErrors] = useState({ document: '', celular: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {

        e.preventDefault();

        const newErrors: any = {};

        const documentError = validateDocumento(document, type);
        if (documentError) newErrors.document = documentError;

        const celularError = validateCelular(celular);
        if (celularError) newErrors.celular = celularError;

        if (!celular.trim()) newErrors.celular = 'Campo obligatorio';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({ document: '', celular: '' });

        try {
            const response = await fetch('https://rimac-front-end-challenge.netlify.app/api/user.json');

            if (!response.ok) {
                throw new Error('hubo un error')
            }

            const userDataApi = await response.json();


            const userData = {
                type: type,
                document: document,
                celular: celular,
                user: userDataApi
            }

            loginUser(userData);

            navigate('/home');

        } catch (error) {
            console.log(error)
        }


    };


    const validateDocumento = (document: string, type: string) => {
        if (!document.trim()) {
            return 'Campo obligatorio';
        }

        if (!/^\d+$/.test(document)) {
            return 'Debe contener solo números';
        }

        const expectedLength = type === 'DNI' ? 8 : type === 'RUC' ? 11 : null;

        if (expectedLength && document.length !== expectedLength) {
            return `${type} debe tener ${expectedLength} dígitos`;
        }

        return null;
    };

    const validateCelular = (celular: string) => {
        if (!celular.trim()) {
            return 'Campo obligatorio';
        }

        if (!/^\d+$/.test(celular)) {
            return 'Debe contener solo números';
        }

        if (celular.length !== 9) {
            return 'Celular debe tener 9 dígitos';
        }

        return null;
    };


    return (
        <>
            <div className="background" />
            <div className="background-right" />
            <div className="login">

                <div className="login__contentHeader">
                    <img src={logo} alt="logo rimac" width="73" className="login__contentHeader__logo" />

                    <div className="login__contentHeader__box">
                        <span className="login__contentHeader__box__text">¡Compra por este medio!</span>
                        <img src={phone} className="login__contentHeader__box__phone" alt="phone" />
                        <span className="login__contentHeader__box__cel">(01) 411 6001 </span>
                    </div>

                </div>

                <div className="login__contentBody">

                    <div className="login__contentBody__sizeBox">
                        <img src={bannerImage} alt="imagen banner" width="480" />
                    </div>


                    <div className="login__contentBody__sizeBoxRight">
                        <div className="login__contentBody__sizeBoxRight__contentItems">

                            <div className="login__contentBody__sizeBoxRight__contentItems__content--response">
                                <div>
                                    <span className="box-green">Seguro Salud Flexible</span>
                                    <h4>Creado para ti y tu familia</h4>
                                </div>

                                <img src={bannerMobile} alt="banner-mobile" width="136px" className="banner-mobile" />

                                
                            </div>

                            <div className="login__contentBody__sizeBoxRight__contentItems__linea"></div>


                            <p>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>

                            <form className="form" onSubmit={handleSubmit}>


                                <div className="input-group">

                                    <div className="input-group__block">
                                        <div className="input-group__flex">
                                            <div className="input-group__select-wrapper">
                                                <select className="input-group__select"
                                                    value={type}
                                                    onChange={(e) => setType(e.target.value)}>
                                                    <option value="DNI">DNI</option>
                                                    <option value="RUC">RUC</option>
                                                </select>
                                                <img
                                                    src={arrow}
                                                    alt="arrow"
                                                    width="20px"
                                                    className="input-group__icon"
                                                />
                                            </div>


                                            <div className="input-group__input-wrapper">
                                                <input type="text"
                                                    id="document"
                                                    value={document}
                                                    onChange={(e) => setDocument(e.target.value)}
                                                    className="input-group__input"
                                                />
                                                <label htmlFor="document" className="input-group__label">Nro. de documento</label>

                                            </div>
                                        </div>



                                        {errors.document && (
                                            <span className="form__error">{errors.document}</span>
                                        )}
                                    </div>





                                </div>

                                <div className="input-group__input-wrapper">
                                    <input type="text"
                                        id="celular"
                                        className="input-group__input-cel"
                                        value={celular}
                                        onChange={(e) => setCelular(e.target.value)}
                                    />
                                    <label htmlFor="celular" className="input-group__label">Celular</label>
                                    {errors.celular && (
                                        <span className="form__error">{errors.celular}</span>
                                    )}
                                </div>

                                <label className="checkbox checkbox__top16">
                                    <input type="checkbox" className="checkbox__input" checked />
                                    <span className="checkbox__custom"></span>
                                    <span className="checkbox__label">Acepto la Política de Privacidad</span>
                                </label>

                                <label className="checkbox">
                                    <input type="checkbox" className="checkbox__input" checked/>
                                    <span className="checkbox__custom"></span>
                                    <span className="checkbox__label">Acepto la Política Comunicaciones Comerciales</span>
                                </label>


                                <a href="#" className="login__contentBody__sizeBoxRight__contentItems__link-term">Aplican Términos y Condiciones.</a>

                                <button type="submit" className="form__submit">
                                    Cotiza aqui
                                </button>
                            </form>
                        </div>



                    </div>


                </div>

            </div>

        </>
    )
}