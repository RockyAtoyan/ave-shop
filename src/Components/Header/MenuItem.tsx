import {NavLink} from "react-router-dom";
import {FC} from "react";
import {setMenuItem, setMyLookbook} from "../shopReducer";
import {getLCItems} from "../Product";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../store";


type PropsType = { name: string, values:any}

export const MenuItem: FC<PropsType> = ({name,values}) => {
    const dispatch = useDispatch()

    const mode = useSelector((state:AppStateType) => state.shop.menuItem)

    const items = values && Object.keys(values).map(item => ({name:item,items:values[item]})).map((item,index) =>{
        return <ul key={index} className={'submenu_link'}>
            <li>{item.name ? item.name : ''}</li>
            {item.items && item.items.map((linkName:string,index:number) => {
                const uiName = linkName.slice(0, 1).toUpperCase() + linkName.slice(1)
                const link = linkName.toLowerCase().split(' ').join('').split('`').join('')
                return <li key={index} onClick={() => dispatch(setMenuItem(''))}>
                    {uiName === 'Delete' && name.toLowerCase().split(' ').join('') === 'lookbook' ? <a onClick={() => {
                        Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key) + '')).filter(item => item.type === 'ave-lookbook').forEach(item => localStorage.removeItem(item.id))
                        dispatch(setMyLookbook(getLCItems('ave-lookbook')))
                    }}>{uiName}</a> : <NavLink className={'menu_link'} to={`/${name.toLowerCase().split(' ').join('')}/${item.name.toLowerCase().split(' ').join('')}/${link}`}>{uiName}</NavLink>}
                </li>
            })}
        </ul>

    })



    return <li className={mode === name ? 'active' : ''}>
        {values && Object.keys(values).length > 0 ? <h3 className={'menu_link'} onClick={(event) => mode === name ? dispatch(setMenuItem('')) : dispatch(setMenuItem(name))}>{name}</h3> : <NavLink className={'menu_link'}  onClick={() => dispatch(setMenuItem(''))}  to={`/${name.split(' ').join('')}`}>{name}</NavLink>}
        {mode === name && <>
            <ul className={'submenu'}>
                <div className={'submenu__links'}>
                    {items}
                </div>
                <li className="banner">
                    <h4>
                        <span>Autumn sale! </span>
                        up to 50% off
                    </h4>
                </li>
            </ul>
        </>}
    </li>
}