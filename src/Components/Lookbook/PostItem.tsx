import {FC} from "react";
import {NavLink} from "react-router-dom";
import {Favorite, Info} from "@mui/icons-material";
import {AddLookbookToLocalStorage, getLCItems} from "../Product";
import {setMyLookbook} from "../shopReducer";
import {useDispatch} from "react-redux";


export const PostItem:FC<{post:any,lookbook:any,products:any}>= ({post,lookbook,products}) => {
    const dispatch = useDispatch()

    const lookbookProduct = lookbook ? lookbook.filter((item:any) => item.productId === (post ? post.productId : ''))[0] : null
    const product = products.filter((product:any )=> product.id === post.productId)[0]

    return  <div key={post.id} className={'post ibg'}>
        <img src={post.image} alt=""/>
        <div className="post_content">
            <h2>
                <span>REF</span>
                <span>{post.ref}</span>
            </h2>
        </div>
        <div className="hover_block">
            <button>
                <NavLink to={`/product/${post.productId}`}><Info /></NavLink>
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
        </div>
    </div>
}