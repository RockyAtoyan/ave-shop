import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../store";
import {MenuItem} from "./MenuItem";
import {NavLink, useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {CartButton} from "./CartButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {setSearch} from "../shopReducer";
import SearchIcon from '@mui/icons-material/Search';


export const Header = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    const [showMode, setShowMode] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const burger = useRef<HTMLDivElement>(null)

    const search = useSelector((state: AppStateType) => state.shop.searchValue)

    useEffect(() => {
        if(searchValue && !(location.pathname.includes('catalog'))){
            navigate('/catalog')
        }
        dispatch(setSearch(searchValue))
    },[searchValue])

    useEffect(() => {
        if(search !== searchValue){
            setSearchValue(search)
        }
    },[search])

    const categories = useSelector((state: AppStateType) => state.shop.categories)

    const menu = useRef<HTMLDivElement>(null)
    const headerInner = useRef<HTMLDivElement>(null)
    const body = document.querySelector('body')

    const catalogItems = categories.map((category, index) => {
        return <MenuItem key={index} name={category.name} values={category.values}/>
    })

    useEffect(() => {
        burger.current?.classList.remove('active')
        menu.current?.classList.remove('active')
        headerInner.current?.classList.remove('active')
        body?.classList.remove('active')
        setShowMode('')
    },[location.pathname])

    return <header className={'header'}>
        <div className="header_logo mobile">
            <NavLink to={'/'}><h1><span>avenue</span> fashion</h1></NavLink>
        </div>
        <div className="burger_menu" ref={burger} onClick={(event) => {
            menu.current?.classList.toggle('active')
            headerInner.current?.classList.toggle('active')
            body?.classList.toggle('active')
            event.currentTarget.classList.toggle('active')
        }}></div>
        <div className="header_inner" ref={headerInner}>
            <div className="header_header">
                <div className="menu_container">
                    <div className="header_header__content">
                        <h3>Currency : <span>GBP</span></h3>
                        <div className="header_header__info">
                            <div className="header_header__info__btns">
                                <NavLink to={'/auth'}><button>Register</button></NavLink>
                                <NavLink to={'/auth'}><button>Sign in</button></NavLink>
                            </div>
                            <CartButton/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="header_menu">
                    <div className="header_logo">
                        <NavLink to={'/'}><h1><span>avenue</span> fashion</h1></NavLink>
                    </div>
                    <div className="header_menu__content">
                        <nav className={'menu'} ref={menu}>
                            <ul className={'menu_list'}>
                                {catalogItems}
                            </ul>
                            <div className="header_search">
                                <input type="text" value={searchValue}
                                       onChange={event => setSearchValue(event.currentTarget.value)}
                                       placeholder={'Search...'}/>
                                <button>
                                    <SearchIcon />
                                </button>
                            </div>
                        </nav>
                    </div>
                    <li className="banner mobile">
                        <h4>
                            <span>Autumn sale! </span>
                            up to 50% off
                        </h4>
                    </li>
                </div>
            </div>
        </div>
    </header>
}