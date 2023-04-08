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

    const search = useSelector((state: AppStateType) => state.shop.searchValue)

    useEffect(() => {
        if(searchValue && !(location.pathname.includes('catalog'))){
            navigate('ave-shop//catalog')
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

    const catalogItems = categories.map((category, index) => {
        // @ts-ignore
        return <MenuItem key={index} name={category.name} values={category.values} setMode={setShowMode}
                         mode={showMode}/>
    })

    useEffect(() => {
        setShowMode('')
    },[location.pathname])

    return <header className={'header'}>
        <div className="header_inner">
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
                            <ul>
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
                        <div className="burger_menu" onClick={(event) => {
                            menu.current?.classList.toggle('active')
                            event.currentTarget.classList.toggle('active')
                        }}></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
}