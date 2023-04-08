import {FC, useEffect} from "react";
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {NavLink, useLocation} from "react-router-dom";
import {ProductType, setCartProducts, setMyLookbook} from "../shopReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../store";
import {AddCartProductToLocalStorage, AddLookbookToLocalStorage, getLCItems} from "../Product";
import {Favorite} from "@mui/icons-material";

export const HomeProduct: FC<{ product: ProductType }> = ({product}) => {
    const dispatch = useDispatch()

    const cartProducts = useSelector((state:AppStateType) => state.shop.cartProducts)
    const lookbook = useSelector((state:AppStateType) => state.shop.lookbook)

    const cartProduct = product && cartProducts.filter(item => item.productId === product.id).length > 0 ? cartProducts.filter(item => {
        return item.productId === product.id
    })[0] : null

    const lookbookProduct = lookbook ? lookbook.filter(item => item.productId === (product ? product.id : ''))[0] : null


    return <div className={'home_products__item ibg'}>
        <NavLink to={`/product/${product.id}`}>
            <img src={product.image} alt=""/>
            <h3><span>£</span>{product.price}</h3>
            <InfoIcon className="hover"/>
        </NavLink>
        <div className="hover_block">
            <h2>{product.name.slice(0,1).toUpperCase() + product.name.slice(1)}</h2>
            <h4>{product.subtitle}</h4>
            <div className="hover_block__btns">
                <button style={cartProduct ? {color:'#00c8c8'} : {}} onClick={() => {
                    if(!cartProduct) {
                        AddCartProductToLocalStorage(product,product.colors[0],product.sizes[0],1)
                    }else {
                        localStorage.removeItem(cartProduct.id)
                    }
                    dispatch(setCartProducts(getLCItems('ave-product')))
                }}>
                    <ShoppingCartIcon />
                </button>
                <button style={lookbookProduct ? {color:'red'} : {}} onClick={() => {
                    if(!lookbookProduct) {
                        AddLookbookToLocalStorage(product)
                    }else {
                        localStorage.removeItem(lookbookProduct.id)
                    }
                    dispatch(setMyLookbook(getLCItems('ave-lookbook')))
                }}>
                    <Favorite />
                </button>
                <button>
                    <CloseFullscreenIcon />
                </button>
            </div>
        </div>
    </div>
}