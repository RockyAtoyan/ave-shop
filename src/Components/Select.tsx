import {FC, useState} from "react";
import {useDispatch} from "react-redux";
import {setFetching} from "./shopReducer";


export const Select:FC<{title:string,type:string,currentValue:string | number,values:any[],onSelect:(...args:any) => any}> = ({title,type,currentValue,values,onSelect}) => {
    const dispatch = useDispatch()

    const [showMode,setShowMode] = useState(false)

    return <div className={'select'}>
        <h2>{title}</h2>
        {type === 'select' ? <div className="select_list">
            <h3 className="select_list__current" onClick={() => {
                dispatch(setFetching(true))
                setShowMode(prevState => !prevState)
            }}>
                {currentValue ? currentValue : ('Select ' + title)}
            </h3>
            <ul className={"select_list__values" + (showMode ? ' active' : '')}>
                {values.map((value,index) => {
                    return <li key={index} onClick={() => {
                        onSelect(value)
                        setShowMode(false)
                    }}>{value}</li>
                })}
            </ul>
        </div>: <div className={'qty'}>
            <h3>
                {currentValue}
            </h3>
            <div className="qty_btns">
                <button onClick={() => onSelect(Number(currentValue) + 1)}>+</button>
                <button onClick={() => {
                    if(currentValue === 0) return
                    onSelect(Number(currentValue) - 1)
                }}>-</button>
            </div>
        </div>}

    </div>
}