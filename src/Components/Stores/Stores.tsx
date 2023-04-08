import {Intro} from "../Intro";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkIcon from '@mui/icons-material/Link';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const Stores = () => {
    return <section className={'stores'}>
        <div className="stores_inner">
            <Intro title={'local store'} subtitle={'find a store near you'} />
            <div className="menu_container">
                <div className="stores_cities">
                    <div className="stores_cities__item">
                        <h2>London</h2>
                        <h3>180-182 Regent Street, London, W1B 5BT</h3>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing esi elit. Vivamus at arcu sem. Vestibulum ornare eleifendit massa, nec tempor odio. Fusce posuere nunc iaculis ligula viverra iaculis. Aliquam erat volutpat.</h4>
                        <button>view details</button>
                    </div>
                    <div className="stores_cities__item">
                        <h2>New York</h2>
                        <h3>109 Columbus Circle, New York, NY 10023</h3>
                        <h4>Nunc non posuere nisl. Etiam finibus vel dui nec lobortis. Aliquam egestas, sem quis condimentum venenatis, erat leo fermentum dolor, non sollicitudin massa mi eu nibh. Nullam vitae aliquam dui, non sodales nisl.</h4>
                        <button>view details</button>
                    </div>
                    <div className="stores_cities__item">
                        <h2>Paris</h2>
                        <h3>2133 Rue Saint-Honoré, 75001 Paris</h3>
                        <h4>Ut interdum fermentum blandit. Donec nec lacus egetit mi rhoncus eleifend. Curabitur laoreet nisl eget rutruml auctor. Vestibulum ante ipsum primis in faucibus orcip luctus et ultrices posuere cubilia curae cras ligula.</h4>
                        <button>view details</button>
                    </div>
                </div>
            </div>
            <div className="stores_map">
                <div className="map">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A614d0b35edcc06953b10b75bd9aac0ad421587a7cfc7bfd56a729b6a2507d9cc&amp;source=constructor"
                        width="100%" height="100%" frameBorder="0"></iframe>
                </div>
                <div className="map_info">
                    <h2>London</h2>
                    <h3>180-182 Regent Street, London, W1B 5BT</h3>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing esi elit. Vivamus at arcu sem. Vestibulum ornare eleifendit massa, nec tempor odio. Fusce posuere nunc iaculis ligula viverra iaculis. Aliquam erat volutpat.</h4>
                    <ul>
                        <li>
                            <span>
                                <PlaceIcon />
                            </span>
                            <span>180-182 Regent Street, London, W1B 5BT</span>
                        </li>
                        <li>
                            <span>
                                <LocalPhoneIcon />
                            </span>
                            <span>0123-456-789</span>
                        </li>
                        <li>
                            <span>
                                <LinkIcon />
                            </span>
                            <span>www.yourwebsite.com</span>
                        </li>
                        <li>
                            <span>
                                <EmailIcon />
                            </span>
                            <span>support@yourwebsite.com</span>
                        </li>
                        <li>
                            <span>
                                <AccessTimeIcon />
                            </span>
                            <span>Monday-Friday: 9am to 6pm  Saturday: 10am to 6pm  Sunday: 10am to 2pm</span>
                        </li>
                    </ul>
                    <div className="map_info__btns">
                        <button>
                            <FacebookIcon />
                        </button>
                        <button>
                            <TwitterIcon />
                        </button>
                        <button>
                            <InstagramIcon />
                        </button>
                        <button>
                            <PinterestIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
}