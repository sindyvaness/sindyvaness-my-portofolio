import carrousel1 from "../assets/images/hero/carrousel-1.jpg";
import carrousel2 from "../assets/images/hero/carrousel-2.jpg";
import carrousel3 from "../assets/images/hero/carrousel-3.png";

const Hero = () => {
    return(
        <div id="home">
            <div id="web">
                <div id="carouselExampleCaptions" className="carousel slide hero">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={carrousel1} class="d-block w-100 carrousel-image" alt="..." />
                        <div class="carousel-caption d-none d-md-block carousel-text-container">
                            <h1>Sindy Montano</h1>
                            <p>.Net and React Full-Stack Software</p>
                            <p>More than 9 years of experience building robust, scalable solutions; Using .NET, C#, Power Platform, and modern web technologies. Focused on clean code, SOLID principles, and delivering high-quality software.</p>
                            <div>
                                <div className="hero-skills-logos">
                                    <div>
                                        <img src='assests/skills/dotNet.png' />
                                        <span className="hero-skills-title">.Net (FW, Core)</span>
                                    </div>

                                    <div>
                                        <img src='assests/skills/Csharp.png' />
                                        <span className="hero-skills-title">C Sharp</span>
                                    </div>

                                    <div>
                                        <img src='assests/skills/sqlServer.png' />
                                        <span className="hero-skills-title">SQL Sever</span>
                                    </div>

                                    <div>
                                        <img src='assests/skills/react.png' />
                                        <span className="hero-skills-title">React</span>
                                    </div>

                                    <div>
                                        <img src='assests/skills/express.png' />
                                        <span className="hero-skills-title">Express JS</span>
                                    </div>

                                    <div>
                                        <img src='assests/skills/mongoDB.png' />
                                        <span className="hero-skills-title">MongoDB</span>
                                    </div>

                                    <div>
                                        <img src='assests/skills/powerPlatform.png' />
                                        <span className="hero-skills-title">Power Platform</span>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item hero-2" data-bs-interval="10000">
                        <img src={carrousel2} class="d-block w-100 carrousel-image" alt="..." />
                        <div class="carousel-caption d-none d-md-block carousel-text-container hero-2-text">
                            <h2>Programming Methodologies & Best Practices</h2>
                            <p>My development approach incorporates Object-Oriented Programming (OOP), Scrum project management, industry best practices, and the application of key software design principles to ensure maintainable and scalable solutions.</p>
                            <div className="hero-best-practices">
                                <p>OOP</p>
                                <p>SOLID</p>
                                <p>DRY</p>
                                <p>KISS</p>
                                <p>YAGNI</p>
                                <p>Clean Code</p>
                                <p>Scrum Agile</p>
                                <p>Code Reviews</p>
                                <p>Maintainability & Scalability</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <img src={carrousel3} class="d-block w-100 carrousel-image" alt="..." />
                    {/* <div class="carousel-caption d-none d-md-block carousel-text-container">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div> */}
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            </div> 

            <div id="mobile">
                <div className="mobile-hero-container">
                    <h1>Sindy Montano</h1>
                    <h3>.Net and React Full-Stack Software</h3>
                    <p className="description">More than 9 years of experience building robust, scalable solutions; Using .NET, C#, Power Platform, and modern web technologies. Focused on clean code, SOLID principles, and delivering high-quality software.</p>

                    <div className='social-media-hero'>
                        <a class="nav-link" href="https://www.linkedin.com/in/sindy-vanessa-montano/" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a>
                        <a class="nav-link" href="https://github.com/sindyvaness" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>
                        <a class="nav-link" href="https://learn.microsoft.com/en-us/users/sindyvanessamontao-9072/transcript/d4ye3am310lyrpw?tab=credentials-tab" target="_blank" rel="noopener noreferrer"><i class="bi bi-microsoft"></i></a>

                    </div>

                    <div className="hero-skills-logos">
                        <div>
                            <img src='assests/skills/dotNet.png' />
                            <span className="hero-skills-title">.Net (FW, Core)</span>
                        </div>

                        <div>
                            <img src='assests/skills/Csharp.png' />
                            <span className="hero-skills-title">C Sharp</span>
                        </div>

                        <div>
                            <img src='assests/skills/sqlServer.png' />
                            <span className="hero-skills-title">SQL Sever</span>
                        </div>

                        <div>
                            <img src='assests/skills/react.png' />
                            <span className="hero-skills-title">React</span>
                        </div>

                        <div>
                            <img src='assests/skills/express.png' />
                            <span className="hero-skills-title">Express JS</span>
                        </div>

                        <div>
                            <img src='assests/skills/mongoDB.png' />
                            <span className="hero-skills-title">MongoDB</span>
                        </div>

                        <div>
                            <img src='assests/skills/powerPlatform.png' />
                            <span className="hero-skills-title">Power Platform</span>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;