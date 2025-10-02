import { Link } from "react-router-dom";
import checkNotActive from '@assets/images/detail/atomo_stepper-3.png';
import checkActive from '@assets/images/detail/atomo_stepper-4.png';
import line from '@assets/images/detail/line-2.png';
import userIcon from '@assets/images/detail/gl_family-24x24.png';
import iconButton from '@assets/images/home/Icon-button.png';
import "./detail.scss";
import { useUser } from "./userContext";

export default function DetailUser() {

    const { userData, selectedPlan } = useUser();

    if (!userData || !selectedPlan) return <p>No hay datos de usuario.</p>

    const { user, document, celular } = userData;
    const { description, cost } = selectedPlan;

    return (
        <>
            <div className="details">


                <div className="details__conten--purple">
                    <img src={checkNotActive} alt="" />
                    <span className="details__conten--purple__planes">

                        Planes y coberturas
                    </span>
                    <img src={line} alt="" />
                    <img src={checkActive} alt="" />
                    <span className="details__conten--purple__resumen">
                        Resumen
                    </span>
                </div>




                <div className="details__content--main">

                    <div className="details__content--main__contentLink">
                        <img src={iconButton} alt="" />
                        <div className="details__content--main__contentLink__link">
                            <Link to="/home">Volver</Link>
                        </div>
                    </div>

                    <h4 className="details__content--main__title"> Resumen del seguro </h4>

                    <div className="details__content--main__content">

                        <span className="details__content--main__content__text--first">Precios calculados para:</span>

                        <div className="details__content--main__content__content--title">
                            <img src={userIcon} alt="" width="24px" />
                            <h4>{user.name} Miranda Díaz</h4>
                        </div>


                        <div className="details__content--main__content__line"></div>

                        <p className="details__content--main__content__parraf--title">Responsable de pago</p>

                        <p className="details__content--main__content__parraf">DNI: {document}</p>
                        <p className="details__content--main__content__parraf">Celular: {celular}</p>

                        <p className="details__content--main__content__parraf--title">Plan elegido</p>

                        <p className="details__content--main__content__parraf">{description}</p>
                        <p className="details__content--main__content__parraf">Costo del Plan: {cost}</p>

                    </div>
                </div>

            </div>
        </>
    )
}