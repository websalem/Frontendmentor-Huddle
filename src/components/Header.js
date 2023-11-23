import Nav from './Nav';
import logo from '../assets/images/logo.svg';
function Header() {
    return (
        <header>
            <div className="container">
                <div className='logo'><img src={logo} alt="logo" /></div>
                <Nav />
            </div>
        </header>
    )
}
export default Header;