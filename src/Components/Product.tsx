import {FC, useEffect, useMemo, useState} from "react";
import {getCartProducts, ProductType, setCartProducts, setFetching, setMyLookbook} from "./shopReducer";
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./store";
import {Intro} from "./Intro";
import {Select} from "./Select";
import {
    AddShoppingCart, CloseFullscreen,
    StarRate,
    CompareArrows,
    CompareArrowsSharp,
    CompareArrowsTwoTone,
    CompareSharp,
    Favorite, Star
} from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import {v4 as uuidv4} from 'uuid';
import Slider from "react-slick";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const getLCItems = (type: string) => {
    return Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key) + '')).filter(item => item.type === type)
}

export const AddCartProductToLocalStorage = (product: ProductType, currentColor: string, currentSize: string, quanity: number) => {
    if (getLCItems('ave-product').some(item => item.productId === product.id)) return
    const id = uuidv4()
    localStorage.setItem(id, JSON.stringify({
        ...product,
        id,
        type: 'ave-product',
        currentColor,
        currentSize,
        quanity,
        productId: product.id
    }))
}

export const AddLookbookToLocalStorage = (product: ProductType) => {
    const id = uuidv4()
    localStorage.setItem(id, JSON.stringify({...product, id, type: 'ave-lookbook', productId: product.id}))
}


export const Product = () => {
    const dispatch: any = useDispatch()
    const params = useParams()

    const [currentCategory, setCurrentCategory] = useState('description')
    const [id, setId] = useState<any>(-1)
    const [errorMode, setErrorMode] = useState<any>(false)

    const product = useSelector((state: AppStateType) => state.shop.products).filter(product => product.id === Number(id))[0]

    const [currentColor, setCurrentColor] = useState('')
    const [currentSize, setCurrentSize] = useState('')
    const [currentQuanity, setCurrentQuanity] = useState(1)

    useEffect(() => {
        dispatch(getCartProducts(getLCItems('ave-product')))
    }, [])

    const cartProducts = useSelector((state: AppStateType) => state.shop.cartProducts)
    const lookbook = useSelector((state: AppStateType) => state.shop.lookbook)

    const cartProduct = product && cartProducts.filter(item => item.productId === product.id).length > 0 ? cartProducts.filter(item => {
        return item.productId === product.id
    })[0] : null

    const lookbookProduct = lookbook ? lookbook.filter(item => item.productId === (product ? product.id : ''))[0] : null

    useEffect(() => {
        setId(params ? params.id : '')
    }, [params.id])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:<button className={'product_slider__arrow prev'}><ArrowForwardIosIcon /></button>,
        nextArrow:<button className={'product_slider__arrow next'}><ArrowForwardIosIcon /></button>
    };

    return <div className={'product'}>
        {product && <>
            <Intro title={'product - view'}
                   subtitle={product.type.sex + ' - ' + product.type.clothes.type + ' - ' + product.type.clothes.name + ' - ' + (product ? product.name : '')}/>
            <div className="menu_container">
                <div className="product_inner">
                    <div className="product_content">
                        <div className="product_slider">
                            <Slider {...settings} >
                                <div className="product_content__img ibg">
                                    <img src={product.image} alt=""/>
                                </div>
                                <div className="product_content__img ibg">
                                    <img src={product.image} alt=""/>
                                </div>
                            </Slider>
                        </div>
                        <div className="product_content__item">
                            <h2 className="product_content__item__title">{product.name}</h2>
                            <div className="product_content__item__actions">
                                <ul className="product_content__item__rating">
                                    {Array(product.rating).fill(1).map((rate, index) => <li key={index}
                                                                                            className={'rate'}>
                                        <StarRate/>
                                    </li>)}
                                    {Array(5 - product.rating).fill(1).map((rate, index) => <li key={index}>
                                        <StarRate/>
                                    </li>)}
                                </ul>
                                <h3 className="product_content__item__reviews">3 review(s)</h3>
                                <button className="product_content__item__actions__btn">Add a review</button>
                                <h3>Share :</h3>
                                <div className="product_content__item__actions__btns">
                                    <button>
                                        <FacebookIcon/>
                                    </button>
                                    <button>
                                        <TwitterIcon/>
                                    </button>
                                    <button>
                                        <PinterestIcon/>
                                    </button>
                                    <button>
                                        <InstagramIcon/>
                                    </button>
                                </div>
                            </div>
                            <h3 className="product_content__item__price">
                                <span>£</span>
                                <span>{product.price}</span>
                            </h3>
                            <div className="product_content__item__info">
                                <h3>
                                    <span>availability: </span><span>{product.availability ? 'In stock' : 'Out of stock'}</span>
                                </h3>
                                <h3><span>product code: </span><span>{product.id}</span></h3>
                                <h3>
                                    <span>tags: </span><span>{product.type.sex + ', ' + product.type.clothes.type}</span>
                                </h3>
                            </div>
                            <div className="product_content__item__description">
                                <p>{product.about.text}</p>
                                <ul>
                                    {product.about.list.map((name, index) => <li key={index}>{name}</li>)}
                                </ul>
                            </div>
                            <div className="product_content__item__select">
                                 <span className={errorMode ? 'active' : ''}>
                                        Choose color and size!
                                 </span>
                                <Select title={'color'} type={'select'} currentValue={currentColor}
                                        values={product.colors} onSelect={(value: string) => setCurrentColor(value)}/>
                                <Select title={'size'} type={'select'} currentValue={currentSize} values={product.sizes}
                                        onSelect={(value: string) => setCurrentSize(value)}/>
                                <Select title={'qty'} type={'qty'} currentValue={currentQuanity} values={[]}
                                        onSelect={(value: number) => value && setCurrentQuanity(value)}/>
                            </div>
                            <div className="product_content__item__btns">
                                <button onClick={() => {
                                    if (!cartProduct && currentColor && currentSize) {
                                        setErrorMode(false)
                                        AddCartProductToLocalStorage(product, currentColor, currentSize, currentQuanity)
                                    } else {
                                        !currentColor && !currentSize && setErrorMode(true)
                                        cartProduct && localStorage.removeItem(cartProduct.id)
                                    }
                                    dispatch(setCartProducts(getLCItems('ave-product')))
                                }}>
                                    <span>
                                        <AddShoppingCart/>
                                    </span>
                                    <span>{cartProduct ? 'Success!' : 'add to cart'}</span>
                                </button>
                                <button onClick={() => {
                                    if (!lookbookProduct) {
                                        AddLookbookToLocalStorage(product)
                                    } else {
                                        localStorage.removeItem(lookbookProduct.id)
                                    }
                                    dispatch(setMyLookbook(getLCItems('ave-lookbook')))
                                }}>
                                    <span>
                                        <Favorite/>
                                    </span>
                                    <span>{lookbookProduct ? 'Success!' : 'add to lookbook'}</span>
                                </button>
                                <button>
                                    <span>
                                        <CloseFullscreen/>
                                    </span>
                                    <span>add to prepare</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="product_info">
                        <div className="product_info__categories">
                            {['description', 'video', 'size & specs', 'delivery & returns', 'reviews'].map((name, index) => {
                                return <button key={index} className={currentCategory === name ? 'active' : ''}
                                               onClick={() => setCurrentCategory(name)}>{name.toUpperCase()}</button>
                            })}
                        </div>
                        <div className="product_info__items">
                            {['description', 'video', 'size & specs', 'delivery & returns', 'reviews'].map((name, index) => {
                                return <div key={index}
                                            className={"product_info__item" + (currentCategory === name ? ' active' : '')}
                                            onClick={() => setCurrentCategory(name)}>{
                                    product[name as keyof ProductType] ? <>
                                        {name === 'description' && <>
                                            <h2>{product.description.title}</h2>
                                            {product.description.text.split('/backspace').map((p, index) => <p
                                                key={index}>{p}</p>)}
                                        </>}
                                    </> : <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque,
                                        consequatur doloribus enim est et facilis, inventore, iure magnam minima
                                        molestiae mollitia non optio perferendis placeat quidem unde veritatis
                                        vitae.</p>
                                }</div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>}
    </div>
}