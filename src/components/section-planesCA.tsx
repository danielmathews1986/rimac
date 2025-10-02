import { useUser } from './userContext';
import house from '@assets/images/planes/IcHomeLight.png';
import "./section-planesCA.scss";
import { useNavigate } from 'react-router-dom';

interface ISectionPlanesCA {
    plans: any;
}

export default function SectionPlanesCA({ plans }: ISectionPlanesCA) {

    const { selectePlan, userData } = useUser();
    const navigate = useNavigate();

    if (!userData) return <p>No hay datos de usuario.</p>

    const handleSelectPlan = (value1: string, value2: string) => {
        const plan: any = { description: value1, cost: value2 }
        selectePlan(plan);
        navigate('/user/1');
    };

    return (

        <>
            <div className="plane-bodyM">
                <div className="plane-bodyM__planes">
                    <div className='plane-bodyM__planes__header'>
                        <div className="plane-bodyM__planes__header__item">
                            <h4>
                                {plans.name}
                            </h4>
                            <p>
                                Costo del plan
                            </p>
                            <span>
                                ${plans.price} al mes
                            </span>
                        </div>
                        <img src={house} className='plane-bodyM__planes__header__item__icon--img' alt="" width="56px" />
                    </div>

                    <div className="plane-bodyM__planes__header__linea"> </div>

                    <div className="plane-bodyM__planes__header__content">
                        <ul>
                            {plans.description.map((item: any, index: any) => (
                                <li key={index}>
                                    {item}
                                </li>
                            ))}

                        </ul>

                        <button onClick={() => handleSelectPlan(plans.name, plans.price)}>
                            Seleccionar Plan
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}