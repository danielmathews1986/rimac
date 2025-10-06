import { Link } from "react-router-dom"
import "./home.scss";
import circulePurple from '@assets/images/home/atomo_stepper.png';
import circuleGrey from '@assets/images/home/atomo_stepper-2.png';
import line from '@assets/images/home/line.png';
import IcProtectionLight from '@assets/images/home/IcProtectionLight.png';
import IcAddUserLight from '@assets/images/home/IcAddUserLight.png';
import radio from '@assets/images/home/Radio.png';
import radioCheckOn from '@assets/images/home/RadioCheck-on.png';
import iconButton from '@assets/images/home/Icon-button.png';
import atomsuttonCircle from '@assets/images/home/atoms-button-circle-icons-web.png';
import { useState } from "react";
import { useUser } from "../userContext";
import Carousel from "../carrusel/carrusel";
import CarouselPer from "../carrusel/carruselPer";
import SectionPlanes from "../planes/section-planes";
import SectionPlanesOther from "../planes/section-planes-other";


export default function Home() {

    const withOutCheck = radio;
    const withCheck = radioCheckOn;

    const { userData } = useUser();

    const [seletedPlan, setSeletedPlan] = useState('');
    const [showPlan, setShowPlan] = useState(false);
    const [textPlan, setTextPlan] = useState('');

    if (!userData) return <p>No hay datos de usuario.</p>

    const { user } = userData;

    const { name } = user;

    const handleClickCheck = (value: string) => {
        setSeletedPlan(value);
        setShowPlan(true);
        setTextPlan(value);
    }

    return (
        <>
            <div className="home">

                <div className="home__main--barra">
                    <div className="home__main--barra__barra">
                        <div className="home__main--barra__barra__header">
                            <Link to={"/"}><img src={atomsuttonCircle} alt="" width="24px" /></Link>

                            <span className="home__main--barra__barra__header__texto">Paso 1 de 2</span>
                        </div>

                        <div className="home__main--barra__barra__fondo">
                            <div className="home__main--barra__barra__fondo__relleno"></div>
                        </div>
                    </div>
                </div>


                <div className="home__conten--purple">
                    <img src={circulePurple} alt="" />
                    <span className="home__conten--purple__planes">
                        Planes y coberturas
                    </span>
                    <img src={line} alt="" />
                    <img src={circuleGrey} alt="" />
                    <span className="home__conten--purple__resumen">
                        Resumen
                    </span>
                </div>

                <div className="home__contentLink">
                    <img src={iconButton} alt="" />
                    <div className="home__contentLink__link">
                        <Link to="/">Volver</Link>
                    </div>
                </div>


                <div className="home__conten--center">
                    <h4>
                        {name} ¿Para quién deseas cotizar?
                    </h4>
                    <p>
                        Selecciona la opción que se ajuste más a tus necesidades.
                    </p>

                    <div className="home__conten--center__box">
                        <div className={`home__conten--center__box__item ${seletedPlan === 'plan1' ? 'home__conten--center__box__item__selected' : ''}`}>
                            <div className="home__conten--center__box__item__check">
                                <img src={seletedPlan === 'plan1' ? withCheck : withOutCheck}
                                    onClick={() => handleClickCheck('plan1')}
                                    alt=""
                                    width="24px" />
                            </div>
                            <div className="home__conten--center__box__item__square">
                                <div className="home__conten--center__box__item__square__items">
                                    <img src={IcProtectionLight} alt="" />
                                    <h4>Para mí</h4>
                                </div>

                                <p>Cotiza tu seguro de salud y agrega familiares si así lo deseas.</p>
                            </div>

                        </div>

                        <div className={`home__conten--center__box__item ${seletedPlan === 'plan2' ? 'home__conten--center__box__item__selected' : ''}`}>
                            <div className="home__conten--center__box__item__check">
                                <img src={seletedPlan === 'plan2' ? withCheck : withOutCheck}
                                    onClick={() => handleClickCheck('plan2')}
                                    alt="" width="24px" />
                            </div>
                            <div className="home__conten--center__box__item__square">
                                <div className="home__conten--center__box__item__square__items">
                                    <img src={IcAddUserLight} alt="" />
                                    <h4>Para alguien más</h4>
                                </div>

                                <p>Realiza una cotización para uno de tus familiares o cualquier persona.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="desktop">

                {showPlan && (
                    <>
                        {textPlan === 'plan1' && <SectionPlanes />}
                        {textPlan === 'plan2' && <SectionPlanesOther />}
                    </>
                )}
            </div>

            <div className="mobile">

                {showPlan && (
                    <>
                        {textPlan === 'plan1' && <Carousel></Carousel>}
                        {textPlan === 'plan2' && <CarouselPer></CarouselPer>}
                    </>
                )}
            </div>


            
            
        </>
    )
}