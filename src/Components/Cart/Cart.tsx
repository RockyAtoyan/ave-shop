import {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../store";
import {Select} from "../Select";
import {getCartProducts, setFetching} from "../shopReducer";
import {CartItem} from "./CartItem";
import {getLCItems} from "../Product";
import {Count} from "../Count";
import {NavLink} from "react-router-dom";


export const Cart = () => {
    const dispatch: any = useDispatch()

    useEffect(() => {
        dispatch(getCartProducts(getLCItems('ave-product')))
    }, [])

    const products = useSelector((state: AppStateType) => state.shop.cartProducts)

    const productsPrice = useMemo(() => {
        return products.reduce((a, b) => a + b.price * b.quanity, 0)
    }, [products])

    const productsQuanity = useMemo(() => {
        return products.reduce((a, b) => a + b.quanity, 0)
    }, [products])

    return <section className={'cart'}>
        <div className="container">
            {products.length > 0 ? <>
                <div className="cart_inner">
                    <div className="cart_items">
                        {products.filter(item => item.type === 'ave-product').map(item => {
                            return <CartItem key={item.id} item={item}/>
                        })}
                    </div>
                    <div className="cart_info">
                        <div className="cart_quanity">
                            <span>{productsQuanity} {productsQuanity > 1 ? 'products' : 'product'}</span>
                            <span>£{productsPrice.toFixed(2)}</span>
                        </div>
                        <div className="cart_end">
                            <span>Total price : </span>
                            <span>£{productsPrice.toFixed(2)}</span>
                        </div>
                        <button>
                            order
                        </button>
                    </div>
                </div>
            </> : <div className={'cart_empty'}>
                <h2>The cart is still empty</h2>
                <NavLink to={'/'}>
                    <button>To the home page</button>
                </NavLink>
            </div>}

        </div>
    </section>
}