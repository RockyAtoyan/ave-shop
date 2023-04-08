import {homeProductsCategories} from "./Home/HomeProducts";
import {useDispatch, useSelector} from "react-redux";
import {setSort} from "./shopReducer";
import {AppStateType} from "./store";
import {useState} from "react";


export const Sort = () => {
    const dispatch = useDispatch()

    const [mobileShowMode,setMobileShowMode] = useState(false)

    const sort = useSelector((state:AppStateType) => state.shop.sort)

    return <>
        <div className="container">
            <div className="categories">
                {homeProductsCategories.map((category,index) =>{
                    return <button key={index} onClick={() => dispatch(setSort(category.toLowerCase()))} className={category === sort ? 'active' : ''}>{category.toUpperCase()}</button>
                })}
            </div>
            <div className="mobile_categories">
                <h2 className={mobileShowMode ? 'active' : ''} onClick={() => setMobileShowMode(prevState => !prevState)}>{sort.toUpperCase()}</h2>
                <div className={"mobile_categories__btns" + (mobileShowMode ? ' active' : '')}>
                    {homeProductsCategories.map((category,index) =>{
                        return <button key={index} onClick={() => {
                            dispatch(setSort(category.toLowerCase()))
                            setMobileShowMode(false)
                        }} className={category === sort ? 'active' : ''}>{category.toUpperCase()}</button>
                    })}
                </div>
            </div>
        </div>
        </>
}