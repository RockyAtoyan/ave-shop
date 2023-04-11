import React, {useMemo} from 'react';
import './App.scss';
import {Header} from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {Catalog} from "./Components/Catalog/Catalog";
import {Home} from "./Components/Home/Home";
import {Footer} from "./Components/Footer/Footer";
import {Brand} from "./Components/Brand/Brand";
import {Stores} from "./Components/Stores/Stores";
import {Lookbook} from "./Components/Lookbook/Lookbook";
import {Product} from "./Components/Product";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./Components/store";
import {Cart} from "./Components/Cart/Cart";
import {Auth} from "./Components/Auth/Auth";
import {SearchCatalog} from "./Components/Catalog/SearchCatalog";
import {setMenuItem} from "./Components/shopReducer";

const App = () => {
    const dispatch = useDispatch()

    const items = useSelector((state:AppStateType) => state.shop.categories)

    const links = useMemo(() => {
        return[...Array.from(new Set(items.map(category => category.values ? Object.keys(category.values) : '').flat().map(l => l.toLowerCase()))).map((link,index) => {
            return <Route key={index} path={'/mens/' + link.toLowerCase().split(' ').join('') } element={<Catalog />}>
                <Route path={':category'} element={<Catalog />} />
            </Route>
        }),...Array.from(new Set(items.map(category => category.values ? Object.keys(category.values) : '').flat().map(l => l.toLowerCase()))).map((link,index) => {
            return <Route key={index} path={'/womens/' + link.toLowerCase().split(' ').join('')  } element={<Catalog />}>
                <Route path={':category'} element={<Catalog />} />
            </Route>
        }),...Array.from(new Set(items.map(category => category.values ? Object.keys(category.values) : '').flat().map(l => l.toLowerCase()))).map((link,index) => {
            return <Route key={index} path={'/lookbook/' + link.toLowerCase().split(' ').join('')  } element={<Lookbook />}>
                <Route path={':type'} element={<Lookbook />} />
            </Route>
        })]
    },[items])


    return (
        <div className="wrapper" onClick={(event) => {
            // @ts-ignore
            if(!(event.target.className === 'submenu' || event.target.parentElement.className === 'banner' || event.target.parentElement.parentElement.className === 'banner' || event.target.className === 'submenu_link' || event.target.className === 'submenu__links' || event.target.className === 'menu_link' || event.target.className === 'banner')){
                dispatch(setMenuItem(''))
            }
        }}>
            <Header />
            <main className={'main'}>
                <Routes>
                    {links}
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/thebrand'} element={<Brand />} />
                    <Route path={'/localstores'} element={<Stores />} />
                    <Route path={'/cart'} element={<Cart />} />
                    <Route path={'/product'} element={<Product />}>
                        <Route path={':id'} element={<Product />} />
                    </Route>
                    <Route path={'/catalog'} element={<SearchCatalog />} />
                    <Route path={'/auth'} element={<Auth />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
