import {useEffect} from "react";
import {getCartProducts, setMyLookbook} from "../shopReducer";
import {getLCItems} from "../Product";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../store";
import {CartItem} from "../Cart/CartItem";
import {LookbookItem} from "./LookbookItem";
import {Team} from "../Home/Team";
import {NavLink} from "react-router-dom";


export const MyLookbook = () => {
    const dispatch: any = useDispatch()

    useEffect(() => {
        dispatch(setMyLookbook(getLCItems('ave-lookbook')))
    }, [])

    const lookbook = useSelector((state: AppStateType) => state.shop.lookbook)

    return <section className={'mylookbook'}>
        <div className="menu_container">
            {lookbook.length ? <div className="mylookbook_items">
                {lookbook.filter(item => item.type === 'ave-lookbook').map(item => {
                    return <LookbookItem key={item.id} item={item}/>
                })}
            </div> : <div className={'cart_empty'}>
                <h2>Your lookbook is still empty</h2>
                <NavLink to={'/ave-shop/'}>
                    <button>To the home page</button>
                </NavLink>
            </div>}

        </div>
    </section>
}