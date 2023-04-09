import {NavLink, useLocation, useParams, useSearchParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../store";
import {Sort} from "../Categories";
import {HomeProduct} from "../Home/HomeProduct";


export const Catalog = () => {
    const params = useParams()
    const location = useLocation()

    const [type,setType] = useState<any>([])

    const products = useSelector((state:AppStateType) => state.shop.products)
    const sort = useSelector((state:AppStateType) => state.shop.sort)

    const sortProducts = useCallback((a:typeof products[0],b:typeof products[0]) => sort === 'popular' ? b.rating - a.rating : (sort === 'new arrivals' ? a.arrivalDaysLeft - b.arrivalDaysLeft : (sort === 'best sellers' ? a.sellRating - b.sellRating : 0)),[sort])

    useEffect(() => {
        debugger
        setType([...location.pathname.split('/').slice(1),params.category])
    },[params,location])

    const items = products.filter(product => product.type.sex === type[0] && product.type.clothes.type === type[1] && product.type.clothes.name.toLowerCase().split(' ').join('').split('`').join('') === type[2]).sort(sortProducts)

    return <section className={'catalog'}>
        <div className="container">
            <div className="line"></div>
        </div>
        <Sort />
        <div className="container">
            {items.length ? <div className={'catalog_products'}>
                {items.map(product => {
                    return <HomeProduct key={product.id} product={product} />
                })}
            </div> : <div className={'cart_empty'}>
                <h2>There are no such products</h2>
                <NavLink to={'/'}>
                    <button>To the home page</button>
                </NavLink>
            </div>}

        </div>
    </section>
}