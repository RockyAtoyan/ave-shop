import {useSelector} from "react-redux";
import {AppStateType} from "../store";
import {HomeProduct} from "./HomeProduct";
import {useCallback, useState} from "react";
import {Sort} from "../Categories";


export const homeProductsCategories = ['popular','new arrivals','best sellers','special offers','coming soon']

export const HomeProducts = () => {

    const products = useSelector((state:AppStateType) => state.shop.products)
    const sort = useSelector((state:AppStateType) => state.shop.sort)

    const sortProducts = useCallback((a:typeof products[0],b:typeof products[0]) => sort === 'popular' ? b.rating - a.rating : (sort === 'new arrivals' ? a.arrivalDaysLeft - b.arrivalDaysLeft : (sort === 'best sellers' ? a.sellRating - b.sellRating : 0)),[sort])

    const items = products.sort(sortProducts).filter((product,index) => index < 6).map(product => {
        return <HomeProduct key={product.id} product={product} />
    })

    return <section className={'home_products'}>
        <div className="line home_products__line"></div>
        <Sort />

        <div className="items">
            <div className="item">
                {items.slice(0,3)}
            </div>
            <div className="item">
                {items.slice(3)}
            </div>
        </div>
    </section>
}