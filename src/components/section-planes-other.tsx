import house from '@assets/images/planes/IcHomeLight.png';
import hospital from '@assets/images/planes/IcHospitalLight.png';
import "./section-planes-other.scss";
import { useUser } from './userContext';
import { useNavigate } from 'react-router-dom';


export default function SectionPlanesOther() {

    const {selectePlan, userData} = useUser();
    const navigate = useNavigate();

    if(!userData) return <p>No hay datos de usuario.</p>


    const handleSelectPlan = (value1:string, value2:string) => {
        const plan:any = { description: value1, cost: value2 }
        selectePlan(plan);
        navigate('/user/1');
      };

    return (

        <>
            <div className="plane-person">
                <div className="plane-person__planes">

                    <div className='plane-person__planes__header'>
                        <div className="plane-person__planes__header__item">
                            <h4>
                                Plan en Casa
                            </h4>
                            <p>
                                Costo del plan
                            </p>

                            <p className="plane-person__planes__header__item__tac">$39 antes</p>

                            <span>
                                $37.05 al mes
                            </span>
                        </div>
                        <img src={house} className='plane-person__planes__header__item__icon--img' alt="" width="56px" />
                    </div>

                    <div className="plane-person__planes__header__linea"> </div>

                    <div className="plane-person__planes__header__content">
                        <ul>
                            <li>
                                <strong> Médico general a domicilio</strong> por S/20 y medicinas cubiertas al 100%.

                            </li>
                            <li>
                                <strong>Videoconsulta</strong>
                                y orientación telefónica  al 100% en medicina general + pediatría.
                            </li>
                            <li>
                                <strong>Indemnización</strong>
                                de S/300 en caso de hospitalización por más de un día.
                            </li>
                        </ul>

                        <button onClick={()=>handleSelectPlan('Plan en Casa','$37.05 al mes')}>
                            Seleccionar Plan
                        </button>
                    </div>

                </div>

                <div className="plane-person__planes">
                    <h4 className='plane-person__planes__box-green'>Plan recomendado</h4>
                    <div className='plane-person__planes__header'>
                        <div className="plane-person__planes__header__item">
                            <h4>
                                Plan en Casa y Clínica
                            </h4>
                            <p>
                                Costo del plan
                            </p>
                            <p className="plane-person__planes__header__item__tac">$99 antes</p>
                            <span>
                                $94.05 al mes
                            </span>
                        </div>
                        <img src={hospital} className='plane-person__planes__header__item__icon--img' alt="" width="56px" />
                    </div>

                    <div className="plane-person__planes__header__linea"> </div>

                    <div className="plane-person__planes__header__content">
                        <ul>
                            <li>
                                <strong> Consultas en clínica</strong> para cualquier especialidad.

                            </li>
                            <li>
                                <strong>Medicinas y exámenes</strong> derivados cubiertos al 80%

                            </li>
                            <li>
                                Atención médica en <strong> más de 200 clínicas del país.</strong>
                            </li>
                        </ul>

                        <button onClick={()=>handleSelectPlan('Plan en Casa',' $94.05 al mes')}>
                            Seleccionar Plan
                        </button>
                    </div>

                </div>

                <div className="plane-person__planes">

                    <div className='plane-person__planes__header'>
                        <div className="plane-person__planes__header__item">
                            <h4>
                                Plan en Casa
                            </h4>
                            <p>
                                Costo del plan
                            </p>
                            <p className="plane-person__planes__header__item__tac">$49 antes</p>
                            <span>
                                $46.55 al mes
                            </span>
                        </div>
                        <img src={house} className='plane-person__planes__header__item__icon--img' alt="" width="56px" />
                    </div>

                    <div className="plane-person__planes__header__linea"> </div>

                    <div className="plane-person__planes__header__content">
                        <ul>
                            <li>
                                <strong>Un Chequeo preventivo general </strong> de manera presencial o virtual.

                            </li>
                            <li>
                                Acceso a <strong>Vacunas</strong> en el Programa del MINSA en centros privados.


                            </li>
                            <li>
                                <strong>Incluye todos los beneficios del Plan en Casa. </strong>

                            </li>
                        </ul>

                        <button onClick={()=>handleSelectPlan('Plan en Casa',' $46.55 al mes')}>
                            Seleccionar Plan
                        </button>
                    </div>

                </div>

            </div>

        </>
    )
}