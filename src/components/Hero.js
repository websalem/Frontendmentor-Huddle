import heroImg from '../assets/images/illustration-mockups.svg';
import Nav from './Nav';
import logo from '../assets/images/logo.svg';
const Hero = () => {
    return (
        <div className="hero">
            <header>
                <div className="header-container">
                    <div className='logo'><img src={logo} alt="logo" /></div>
                    <Nav />
                </div>
            </header>
            <div className="container">
                <div className="hero-text">
                    <h1>Build The Community
                        Your Fans Will Love</h1>
                    <p>Huddle re-imagines the way we build communities. You have
                        a voice, out so does your audrence. Create connections with your users as you engage in genuine discussion.</p>
                    <button className='btn'>Get Started for Free</button>
                </div>
                <div className="hero-img">
                    <img src={heroImg} alt="hero" />
                </div>
            </div>
        </div>
    )
}
export default Hero