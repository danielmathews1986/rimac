
import "./portafolio.scss"
import user from '@assets/images/portafolio/mf-daniel.svg';
import computer from '@assets/images/portafolio/tecnology.svg';
import logo1 from '@assets/images/portafolio/logo-p1.png';

export const PortafolioHome = () => {

    return (
        <>
            <div className="section_user">
                <div className="section_user__father">
                    <div className="section_user__father__content">
                        <h4>Designer, Frontend Developer & backend Developer</h4>
                        <p>Diseño y codifico cosas maravillosamente, y me encanta lo que hago.</p>
                        <img src={user} alt="user" />
                    </div>
                </div>

                <img src={computer} className="section_user__computer" alt="computer" />
            </div>



            <div className="section_detail">

                <div className="section_detail__container">
                    <div className="section_detail__container__columns">
                        <div className="section_detail__container__columns__column">
                            <h2>Hola, soy Daniel. Un placer conocerte.</h2>
                            <p>Graduado de la carrera de Computación e Informática en Cibertec, una institución educativa privada, con más de siete años de experiencia colaborando en proyectos del campo bancario y telecomunicaciones, tanto a nivel global como local (en España). Durante mi trayectoria profesional, he trabajado sobre todo como desarrollador frontend y en la actualidad como desarrollador fullstack, lo cual me ha proporcionado una perspectiva completa del desarrollo de software. </p>

                            <p>Me entusiasma programar, tanto en el frontend como en el backend. Me gusta asumir nuevos desafíos tecnológicos, adquirir conocimientos de forma permanente y ofrecer soluciones que tengan un impacto significativo. Siempre estoy en búsqueda de superarme como profesional y miembro de un equipo, contribuyendo a través de la colaboración, el compromiso con las metas del proyecto y la comunicación.</p>
                        </div>

                    </div>
                </div>

            </div>


            <div className="section_hability">
                <div className="section_hability__container">
                    <div className="section_hability__container__box">
                        <div className="section_hability__container__box__columns">
                            <div className="section_hability__container__box__columns__column">
                                <img src="" alt="" />
                                <h4>Diseñador</h4>
                                <p>
                                    Valoro la estructura de contenido simple, los patrones de diseño limpios y las interacciones reflexibles.</p>

                                <h5>Cosas que disfruto diseñar</h5>
                                <p>UX, UI, Web, Apps, Logos</p>

                                <h5>Herramienta de diseñado:</h5>
                                <ul>
                                    <li>Figma</li>
                                    <li>Ilustrator</li>
                                    <li>Photoshop</li>
                                </ul>
                            </div>

                            <div className="section_hability__container__box__columns__column">
                                <img src="" alt="" />
                                <h4>Frontend Developer</h4>
                                <p>
                                    me motiva de manera constante observar cómo cada línea de código genera una experiencia visual en el navegador.
                                </p>

                                <h5>Lenguajes de programación</h5>
                                <p>Javacript, typescript, php, HTML5, JAVA</p>

                                <h5>Frameword</h5>
                                <p>Angular 10, 16 y 19</p>

                                <h5>Librerias</h5>
                                <p>Reactjs, Next, Redux, React tooltik</p>

                                <h5>Repositorios</h5>
                                <p>AWS, Gitlab, Githud y Bibucket</p>

                                <h5>CMS</h5>
                                <p>Wordpress y Drupal</p>

                                <h5>Arquitectura</h5>
                                <p>PWA, Principios solid, microfronts, Hexagonal y monolitico</p>

                                <h5>Herramienta de programación y conocimmientos:</h5>
                                <ul>
                                    <li>nodejs</li>
                                    <li>Testing React Library.</li>
                                    <li>jest</li>
                                    <li>bootstrap</li>
                                    <li>tailwind css</li>
                                    <li>Unit test</li>
                                    <li>Json</li>
                                    <li>Paquetes de Node personalizados</li>
                                    <li>JWT</li>
                                    <li>Hooks(react)</li>
                                    <li>RXJS(Angular)</li>
                                    <li>Responsive design</li>
                                    <li>Metodologia BEM</li>
                                    <li>Directivas</li>
                                    <li>Formularios reactivos</li>
                                    <li>Obsevables, promesas</li>
                                    <li>Atomic design</li>
                                    <li>Procesadores css(SASS,STYLUS)</li>
                                    <li>css3</li>
                                    <li>Git</li>
                                    <li>Postman</li>
                                    <li>Visual code</li>
                                    <li>Intelligent</li>
                                    <li>Sublime</li>
                                </ul>
                            </div>

                            <div className="section_hability__container__box__columns__column">
                                <img src="" alt="" />
                                <h4>Backend Developer</h4>
                                <p>me ocupo de la creación de APIs, la administración de bases de datos, la autenticación y los procesos empresariales. Me interesa garantizar que cada elemento funcione de modo eficaz y seguro, dando prioridad a la escalabilidad, el mantenimiento del código y las buenas prácticas.</p>

                                <h5>Lenguajes de programación</h5>
                                <p>JAVA, NET CORE, PHP</p>

                                <h5>Repositorios</h5>
                                <p>AWS, Gitlab, Githud</p>

                                <h5>Arquitectura</h5>
                                <p>MVC, Hexagonal y monolitico</p>

                                <h5>Base de datos</h5>
                                <p>Mysql Workbench, Sql server, MongoDB y Progress</p>

                                <h5>Herramienta de desarrollo y conocimentos:</h5>
                                <ul>
                                    <li>Spring boot 3</li>
                                    <li>Nodejs</li>
                                    <li>Spring JPA, Web, security</li>
                                    <li>JWT</li>
                                    <li>Mockito</li>
                                    <li>Git</li>
                                    <li>Postman</li>
                                    <li>Intelligent</li>
                                    <li>Dockers</li>
                                    <li>Ciclo de vida</li>
                                    <li>Hibernate</li>
                                    <li>RESTfull</li>
                                    <li>Inyecciones de dependencias</li>
                                    <li>Spring Authorization</li>
                                </ul>
                            </div>



                        </div>
                    </div>

                </div>
            </div>

            <div className="section_work">
                <div className="section_work__container">
                    <h2>Mi trabajos recientes</h2>
                    <p>Aquí tienes algunos proyectos de diseño en los que he trabajado. ¿Quieres ver más? Escríbeme.</p>
                    <div className="section_work__container__project-grid">

                        <div className="section_work__container__project-grid__columns">

                            <div className="section_work__container__project-grid__columns__column">

                                <div className="card">
                                    <img src={logo1} alt="Imagen" className="card__image" />

                                    <div className="card__content2">
                                        <h2 className="card__title">Mountain Lodges of Peru</h2>
                                        <button className="card__button">
                                            <a href="https://www.mountainlodgesofperu.com/" target="_blank">Ver más</a>
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <div className="section_work__container__project-grid__columns__column">

                                <div className="card">
                                    <img src={logo1} alt="Imagen" className="card__image" />

                                    <div className="card__content2">
                                        <h2 className="card__title">Rimac</h2>
                                        <button className="card__button">
                                            <a href="https://legendary-gelato-23d09f.netlify.app/" className="" target="_blank">Ver más</a>
                                        </button>

                                    </div>
                                </div>

                            </div>

                            <div className="section_work__container__project-grid__columns__column">

                                <div className="card">
                                    <img src={logo1} alt="Imagen" className="card__image" />

                                    <div className="card__content2">
                                        <h2 className="card__title">Mi banco</h2>
                                        <button className="card__button">
                                            <a href="https://ahorros.mibanco.com.pe/" className="" target="_blank">Ver más</a>
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <div className="section_work__container__project-grid__columns__column">

                                <div className="card">
                                    <img src={logo1} alt="Imagen" className="card__image" />

                                    <div className="card__content2">
                                        <h2 className="card__title">Banco Pichincha</h2>
                                        <button className="card__button">
                                            <a href="https://zonadigital.pichincha.pe/blog/" className="" target="_blank">Ver más</a>
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <div className="section_work__container__project-grid__columns__column">

                                <div className="card">
                                    <img src={logo1} alt="Imagen" className="card__image" />

                                    <div className="card__content2">
                                        <h2 className="card__title">Banbif</h2>

                                        <button className="card__button">
                                            <a href="https://www.banbif.com.pe/" className="" target="_blank">Ver más</a>
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <div className="section_work__container__project-grid__columns__column">

                                <div className="card">
                                    <img src={logo1} alt="Imagen" className="card__image" />

                                    <div className="card__content2">
                                        <h2 className="card__title">Movistar(VISOR)</h2>

                                        <button className="card__button">
                                            <a href="https://valeassiso.com/visor-es/" className="" target="_blank">Ver más</a>
                                        </button>
                                    </div>
                                </div>

                            </div>

                            

                        </div>
                    </div>
                </div>

            </div>

            <div className="section_footer">

                <div className="section_footer__container">

                    <div className="section_footer__container__columns">

                        <div className="section_footer__container__columns__column">
                            <h2>Vivir, aprender y mejorar cada día.</h2>
                            <p>Daniel Mathews Blanco</p>

                            <p className="section_footer__container__columns__column__par">2025</p>
                        </div>

                    </div>
                </div>


                <div className="">
                    <img src="logo company" alt="" />
                    <img src="logo company" alt="" />
                </div>
            </div>
        </>
    )
}