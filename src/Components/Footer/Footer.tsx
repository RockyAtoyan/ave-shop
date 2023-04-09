import {NavLink} from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import {setMyLookbook} from "../shopReducer";
import {getLCItems} from "../Product";
import {useDispatch} from "react-redux";

export const Footer = () => {
    const dispatch = useDispatch()

    return <footer>
        <div className="footer_inner">
            <div className="menu_container">
                <div className="footer_items">

                    <div className="footer_item">
                        <div className="footer_item__title">
                            <h3>information</h3>
                        </div>
                        <ul className="footer_item__links">
                            <li>
                                <NavLink to={'/ave-shop/thebrand'}>The brand</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/ave-shop/localstores'}>Local stores</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/ave-shop/'}>Customer service</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/ave-shop/'}>Privacy & cookies</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/ave-shop/'}>Site map</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="footer_item">
                        <div className="footer_item__title">
                            <h3>why buy from us</h3>
                        </div>
                        <ul className="footer_item__links">
                            <li>
                                <NavLink to={'/ave-shop/'}>Shopping & returns</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/ave-shop/'}>Secure shopping</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/ave-shop/'}>Testimonials</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/ave-shop/'}>Award winning</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/ave-shop/'}>Ethical trading</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="footer_item">
                        <div className="footer_item__title">
                            <h3>your account</h3>
                        </div>
                        <ul className="footer_item__links">
                            <li>
                                <NavLink to={'/ave-shop/auth'}>Sign in</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/ave-shop/auth'}>Register</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/ave-shop/cart'}>View cart</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/ave-shop/lookbook/yourlookbook/viewandedit'}>View your lookbook</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/ave-shop/'}>Track an order</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/ave-shop/'}>Update information</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="footer_item">
                        <div className="footer_item__title">
                            <h3>lookbook</h3>
                        </div>
                        <ul className="footer_item__links">
                            <li>
                                <NavLink to={'/ave-shop/lookbook/ourlookbook/latestposts(mixed)'}>Latest posts</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/ave-shop/'}>Men`s lookbook</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/ave-shop/'}>Women`s lookbook</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/ave-shop/'}>Lookbooks RSS feed</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/ave-shop/lookbook/yourlookbook/viewandedit'}>View your lookbook</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/ave-shop/lookbook/yourlookbook/viewandedit'} onClick={() => {
                                    Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key) + '')).filter(item => item.type === 'ave-lookbook').forEach(item => localStorage.removeItem(item.id))
                                    dispatch(setMyLookbook(getLCItems('ave-lookbook')))
                                }}>Delete your lookbook</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="footer_item">
                        <div className="footer_item__title">
                            <h3>contact details</h3>
                        </div>
                        <ul className="footer_item__links">
                            <li>
                                <NavLink to={'/ave-shop/'}>Head Office: Avenue Fashion,
                                    180-182 Regent Street, London.</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/ave-shop/'}>Telephone: 0123-456-789</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/ave-shop/'}>Email: support@yourwebsite.com</NavLink>
                            </li>
                        </ul>
                    </div>


                </div>
                <div className="footer_actions">
                    <div className="footer_actions__item">
                        <h3><span>award winner</span><span>fashion awards 2016</span></h3>
                    </div>
                    <div className="footer_actions__item">
                        <div className="footer_actions__item__links">
                            <a href="#">
                                <FacebookIcon />
                            </a>
                            <a href="#">
                                <TwitterIcon />
                            </a>
                            <a href="#">
                                <InstagramIcon />
                            </a>
                            <a href="#">
                                <PinterestIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header_header footer">
            <div className="menu_container">
                <div className="header_header__content">
                    <h3>© 2016 Avenue Fashion™</h3>
                    <div className="header_header__info">
                        <div className="header_header__info__btns">
                            <span>Design by RobbyDesigns.com</span>
                            <span>Dev by Loremipsum.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}