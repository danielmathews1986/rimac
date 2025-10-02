
import "./portafolio.scss"

export const PortafolioHome = () => {

    //96265727
    //080011800

    return(
        <>
            <div className="section_user">
                <h2>Designer, Frontend Developer & Mentor</h2>
                <p>I design and code beautifully simple things, and I love what I do.</p>

                <img src="" alt="" />

                <img src="" alt="" />
            </div>


            
            <div className="section_detail">
                <h2>Hi, I’m Matt. Nice to meet you.</h2>
                <p>Since beginning my journey as a freelance designer 12 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops.</p>

                <div className="">
                        <div className="">
                            <img src="" alt="" />
                            <h4>Designer</h4>
                            <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                            
                            <h5>Things I enjoy designing:</h5>
                            <p>UX, UI, Web, Apps, Logos</p>

                            <h5>Design Tools:</h5>
                            <ul>
                                <li>Figma</li>
                                <li>Pen & Paper</li>
                                <li>Sketch</li>
                            </ul>
                        </div>
                </div>
            </div>

            <div className="section_word">
                <h2>My Recent Work</h2>
                <p>Here are a few past design projects I've worked on. Want to see more? Email me.</p>

                <div className="">
                       <img src="logo company" alt="" />

                       <div>
                            <p>Accounting and tax services characterized by quality, reliability and trust.</p>
                            <button>Visit Website</button>
                       </div>
                </div>
            </div>


            <div className="section_footer">
                <h2>My Recent Work</h2>
                <p>Living, learning, & leveling up one day at a time.</p>

                <div className="">
                       <img src="logo company" alt="" />
                       <img src="logo company" alt="" />
                </div>
            </div>
        </>
    )
}