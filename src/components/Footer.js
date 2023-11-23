import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import logoWhite from '../assets/images/logo-white.svg';
import Overlapping from "./Overlapping";
function Footer() {
    return (
        <footer>
            <div className="footer-logo">
                <div className="container">
                    <img src={logoWhite} alt="Logo" />
                </div>
            </div>
            <div className="container">
                <div className="footer-1">
                    <div className="text-container">
                        <p><FaLocationDot /></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className="text-container">
                        <p><BsFillTelephoneInboundFill /></p>
                        <p><a href="#">+1-045-125-4567</a></p>
                    </div>
                    <div className="text-container">
                        <p><IoIosMail /></p>
                        <p><a href="#">example@huddle.com</a></p>
                    </div>
                </div>
                <div className="footer-2">
                    <nav>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">What we do</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-3">
                    <nav>
                        <ul>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-4">
                    <p> <a href="www.facebook.com"><FaFacebookF /></a></p>
                    <p> <a href="twitter.com"><FaTwitter /></a></p>
                    <p><a href="instagram.com"><FaSquareInstagram /></a></p>
                </div>
            </div>
            <div className="copyrights">
                <div className="container"> <p> &copy; copyrights 2018 Huddle. All rights reserved</p></div>
            </div>
            <Overlapping />
        </footer>

    )
}
export default Footer;