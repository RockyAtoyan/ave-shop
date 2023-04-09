import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../store";
import {HomeProduct} from "../Home/HomeProduct";
import {NavLink} from "react-router-dom";
import {setSearch} from "../shopReducer";


export const SearchCatalog = () => {
    const dispatch = useDispatch()

    const searchValue = useSelector((state:AppStateType) => state.shop.searchValue)
    const products = useSelector((state:AppStateType) => state.shop.products).filter(product => product.name.includes(searchValue) ||  product.description.text.includes(searchValue) ||  product.about.text.includes(searchValue))

    return <div className={'catalog'}>
        <div className="line"></div>
        {products.length ? <div className="catalog_products">
            {products.map(product => {
                return <HomeProduct key={product.id} product={product} />
            })}
        </div> : <div className={'cart_empty'}>
            <h2>There are no such products</h2>
            <NavLink to={'/ave-shop/'} onClick={() => {
                dispatch(setSearch(''))
            }}>
                <button>To the home page</button>
            </NavLink>
        </div>}
    </div>

}
