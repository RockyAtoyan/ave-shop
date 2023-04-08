import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {NavLink} from "react-router-dom";
import {useEffect} from "react";
import {getCartProducts} from "../shopReducer";
import {getLCItems} from "../Product";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../store";
import AddIcon from '@mui/icons-material/Add';

export const CartButton = () => {
    const dispatch: any = useDispatch()

    const cartProducts = useSelector((state: AppStateType) => state.shop.cartProducts)



    useEffect(() => {
        dispatch(getCartProducts(getLCItems('ave-product')))
    }, [])


    return <div className={'cart_btn'}>
        <NavLink to={'ave-shop//cart'}>
            <button>
            <span>
                <ShoppingCartIcon/>
            </span>
                <span>{cartProducts.length === 0 ? 'empty' : cartProducts.reduce((a,b) => a + b.quanity,0)}</span>
            </button>
        </NavLink>
        <ul className="cart_btn__products">
            {cartProducts.map(item => {
                const name = item.name.split(' ').slice(-2).join(' ')
                return <li key={item.id}>
                    <NavLink to={'/product/' + item.productId}>{name.slice(0, 1).toUpperCase() + name.slice(1)}</NavLink>
                    <span>£{(item.price*item.quanity).toFixed(2)}</span>
                </li>
            })}
            <li className={'summ'}>
                <span></span>
                <span>
                    <AddIcon />
                </span>
            </li>
            <li>
                <span>Price:</span>
                <span>£{cartProducts.length > 0 ? cartProducts.reduce((a,b) => a + b.price*b.quanity,0).toFixed(2): 0}</span>
            </li>
        </ul>
    </div>
}