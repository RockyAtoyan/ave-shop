import {FC} from "react";


export const Intro:FC<{title?:string,subtitle?:string}> = ({title,subtitle}) => {

    const tempTitle = title?.split(' ').length && title?.split(' ')?.length > 1 ? title?.split(' ') : [title]

    return  <div className="intro">
        <div className="intro__img ibg">
            <img src="/ave-shop/images/brand/Brand_02.png" alt=""/>
        </div>
        <div className="intro__content">
            <h1 className="intro__title">{tempTitle.length > 1 ? <><span>{tempTitle[0]}</span> {tempTitle.slice(1).join(' ')}</> : tempTitle}</h1>
            <h2 className="intro__subtitle">{subtitle}</h2>
        </div>
    </div>
}