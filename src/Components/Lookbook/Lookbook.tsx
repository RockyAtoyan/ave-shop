import {Intro} from "../Intro";
import {Team} from "../Home/Team";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../store";
import {Favorite, HeartBrokenRounded, Info} from "@mui/icons-material";
import {FC, useCallback, useEffect, useMemo, useState} from "react";
import {NavLink, useLocation, useParams} from "react-router-dom";
import {MyLookbook} from "./MyLookbook";
import {AddLookbookToLocalStorage, getLCItems} from "../Product";
import {setMyLookbook} from "../shopReducer";
import {PostItem} from "./PostItem";

export const postsProductsCategories = ['latest','like','cheap','expensive']

export const CatalogSort:FC<{sort:string,setSort:any,likeMode:boolean}> = ({sort,setSort,likeMode}) => {
    const location = useLocation()

    const [showMode,setShowMode] = useState(false)

    useEffect(() => {
        setShowMode(false)
    },[location.pathname])

    const sortBtns = useMemo(() =>
        postsProductsCategories.filter(name => !likeMode ? name !== 'like' : true).map((category,index) => {
            return <button className={category === sort ? 'active' : ''} key={index} onClick={() => setSort(category)}>
                {category === 'latest' ? 'latest' : (category === 'like' ? 'most liked' : (category === 'cheap' ? 'price low to high' : 'price high to low'))}
            </button>
        }),[sort])

    return <>
        <div className="catalog_sort">
            {sortBtns}
        </div>
        <div className="catalog_sort__mobile" onClick={() => {
            if (showMode) setShowMode(false)
        }
        }>
            <h3 onClick={() => setShowMode(prevState => !prevState)}>{sort === 'latest' ? 'latest' : (sort === 'like' ? 'most liked' : (sort === 'cheap' ? 'price low to high' : 'price high to low'))}</h3>
            <div className={showMode ? 'active' : ''}>
                {sortBtns}
            </div>
        </div>
    </>
}

export const Lookbook = () => {
    const dispatch = useDispatch()

    const params = useParams()

    const [sort,setSort] = useState('latest')

    const posts = useSelector((state:AppStateType) => state.shop.posts)

    const sortProductsPosts = useCallback((a:any,b:any) => sort === 'latest' ? a.postDaysLeft - b.postDaysLeft : (sort === 'like' ? b.likeCount - a.likeCount : (sort === 'cheap' ? a.price - b.price : b.price - a.price)),[sort])

    const lookbook = useSelector((state:AppStateType) => state.shop.lookbook)
    const products = useSelector((state:AppStateType) => state.shop.products)

    const postsProductsItems = posts.filter(post => post.price).sort(sortProductsPosts).filter((post,index) => index < 7).map(post => {
        return <PostItem key={post.id} post={post} lookbook={lookbook} products={products} />
    })

    const postsNewsItems = posts.filter(post => !post.price).map(post => {
        return <div key={post.id} className={'post_new'}>
            <div className={'post_new__image ibg'}>

            </div>
            <div className="post_new__content">
                <h1>{post.title?.split(' ') ? (post.title?.split(' ').length > 1 ? <><span>{post.title?.split(' ')[0].toUpperCase()}</span> {post.title?.split(' ').slice(1).join(' ').toUpperCase()}</> : post.title.toUpperCase()) : ''}</h1>
                <h2>{post.subtitle?.toUpperCase()}</h2>
                {post.text?.split('/backspace').map((text,index) => {
                    return <p key={index}>{text}</p>
                })}
                <div>
                    <button>{post.btnValue?.toUpperCase()}</button>
                </div>
            </div>
        </div>
    })

    return <section className={'lookbook'}>
        <div className="lookbook_inner">
            <Intro title={params.type === 'latestposts(mixed)' || params.type === 'menslookbook' || params.type === 'womenslookbook'  ? 'our lookbook' : 'your lookbook'} subtitle={params.type === 'latestposts(mixed)' ? 'latest posts - mens & womens' : ''} />
            <div className="container">
                <div className="line"></div>
                {params.type === 'latestposts(mixed)' && <>
                    <div className="posts">
                        <CatalogSort likeMode={true} sort={sort} setSort={(value:string) => setSort(value)} />
                        <div className="posts_items">
                            {postsProductsItems.slice(0, 2)}
                            {postsNewsItems[0]}
                            {postsProductsItems.slice(2, postsProductsItems.length - 1)}
                            {postsNewsItems[1]}
                            {postsProductsItems[postsProductsItems.length - 1]}
                        </div>
                    </div>
                    </>
                }
                {params.type === 'viewandedit' && <MyLookbook />}
            </div>
            <Team />
        </div>
    </section>
}