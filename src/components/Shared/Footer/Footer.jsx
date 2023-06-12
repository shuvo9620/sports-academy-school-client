
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold">Sports Academy School</h2>
                    <p className="mt-4">
                        A premier sports academy school dedicated to nurturing young athletes
                        and promoting a passion for sports.
                    </p>
                </div>
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold mb-4">Contact</h3>
                    <p>Email: info@sportsacademyschool.com</p>
                    <p>Phone: +880 1645026688</p>
                    <p>Address: Pabna, Rajshahi, Bangladesh</p>
                </div>
                <div className="w-full md:w-1/3">
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="twitter.com" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="instagram.com" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-4 text-center">
                <p className="text-sm text-gray-500">Copyright &copy; {new Date().getFullYear()} All rights reserved by Sports Academy School. </p>
            </div>
        </footer>
    );
};

export default Footer;
