import {FC} from "react";
import {NavLink} from "react-router-dom";
import {Favorite, Info} from "@mui/icons-material";
import {AddLookbookToLocalStorage, getLCItems} from "../Product";
import {setMyLookbook} from "../shopReducer";
import {useDispatch} from "react-redux";


export const LookbookItem:FC<{item:any}> = ({item}) => {
    const dispatch = useDispatch()


    return <div key={item.id} className={'post ibg'}>
        <img src={item.image} alt=""/>
        <div className="post_content">
            <h2>
                <span>REF</span>
                <span>{item.ref}</span>
            </h2>
        </div>
        <div className="hover_block">
            <button>
                <NavLink to={`/product/${item.productId}`}><Info /></NavLink>
            </button>
            <button style={{color:'red'}} onClick={() => {
                localStorage.removeItem(item.id)
                dispatch(setMyLookbook(getLCItems('ave-lookbook')))
            }}>
                <Favorite />
            </button>
        </div>
    </div>
}