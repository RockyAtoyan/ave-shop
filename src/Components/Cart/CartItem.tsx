import {FC, useState} from "react";
import {Select} from "../Select";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../store";
import {getCartProducts, setFetching} from "../shopReducer";
import {getLCItems} from "../Product";
import {NavLink} from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import {Count} from "../Count";

export const CartItem: FC<{ item: any }> = ({item}) => {
    const dispatch: any = useDispatch()

    const fetching = useSelector((state: AppStateType) => state.shop.fetching)

    return <div className={'cart_item'}>
        <div className="cart_item__content">
            <div className="cart_item__img ibg">
                <img src={item.image} alt=""/>
            </div>
            <div className="cart_item__info">
                <NavLink to={`/ave-shop/product/${item.productId}`}>
                    <h2>{item.name.slice(0,1).toUpperCase() + item.name.slice(1)}</h2>
                </NavLink>
                <h3>{item.currentColor}</h3>
                <h3>{item.currentSize}</h3>
            </div>
        </div>
        <div className="cart_item__select">
            {/*<Select title={'color'} type={'select'} currentValue={item.currentColor} values={item.colors}*/}
            {/*        onSelect={(value) => {*/}
            {/*            if (value >= 1) {*/}
            {/*                localStorage.setItem(item.id, JSON.stringify({...item, currentColor: value}))*/}
            {/*                dispatch(getCartProducts(getLCItems('ave-product')))*/}
            {/*            }*/}
            {/*        }}/>*/}
            {/*<Select title={'size'} type={'select'} currentValue={item.currentSize} values={item.sizes}*/}
            {/*        onSelect={(value) => {*/}
            {/*            if (value >= 1) {*/}
            {/*                localStorage.setItem(item.id, JSON.stringify({...item, currentSize: value}))*/}
            {/*                dispatch(getCartProducts(getLCItems('ave-product')))*/}
            {/*            }*/}
            {/*        }}/>*/}
            <Select title={'qty'} type={'qty'} currentValue={item.quanity} values={item.quanity} onSelect={(value) => {
                if (value >= 1) {
                    localStorage.setItem(item.id, JSON.stringify({...item, quanity: value}))
                    dispatch(getCartProducts(getLCItems('ave-product')))
                }
            }}/>
        </div>
        <div className="cart_item__actions">
            <div className="cart_item__price">
                <h3>£{(item.price*item.quanity).toFixed(2)}</h3>
            </div>
            <div className="cart_items__btns">
                <button onClick={() => {
                    localStorage.removeItem(item.id)
                    dispatch(getCartProducts(getLCItems('ave-product')))
                }}>
                    <DeleteIcon />
                </button>
            </div>
        </div>


    </div>
}