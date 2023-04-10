import {NavLink, useLocation, useParams, useSearchParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../store";
import {Sort} from "../Categories";
import {HomeProduct} from "../Home/HomeProduct";
import {CatalogSort} from "../Lookbook/Lookbook";


export const Catalog = () => {
    const params = useParams()
    const location = useLocation()

    const [type,setType] = useState<any>([])
    const [sort,setSort] = useState('latest')

    const products = useSelector((state:AppStateType) => state.shop.products)

    const sortProducts = useCallback((a:any,b:any) => sort === 'latest' ? a.arrivalDaysLeft - b.arrivalDaysLeft : (sort === 'like' ? b.likeCount - a.likeCount : (sort === 'cheap' ? a.price - b.price : b.price - a.price)),[sort])

    useEffect(() => {
        debugger
        setType([...location.pathname.split('/').slice(1),params.category])
    },[params,location])

    const items = products.filter(product => product.type.sex === type[0] && product.type.clothes.type === type[1] && product.type.clothes.name.toLowerCase().split(' ').join('').split('`').join('') === type[2]).sort(sortProducts)

    return <section className={'catalog'}>
        <div className="container">
            <div className="line"></div>
        </div>
        <div className="container">
            <CatalogSort likeMode={false} sort={sort} setSort={(value:string) => setSort(value)} />
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