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
import {useSelector} from "react-redux";
import {AppStateType} from "./Components/store";
import {Cart} from "./Components/Cart/Cart";
import {Auth} from "./Components/Auth/Auth";
import {SearchCatalog} from "./Components/Catalog/SearchCatalog";

const App = () => {

    const items = useSelector((state:AppStateType) => state.shop.categories)

    const links = useMemo(() => {
        return[...Array.from(new Set(items.map(category => category.values ? Object.keys(category.values) : '').flat().map(l => l.toLowerCase()))).map((link,index) => {
            return <Route key={index} path={'ave-shop/mens/' + link.toLowerCase().split(' ').join('') } element={<Catalog />}>
                <Route path={':category'} element={<Catalog />} />
            </Route>
        }),...Array.from(new Set(items.map(category => category.values ? Object.keys(category.values) : '').flat().map(l => l.toLowerCase()))).map((link,index) => {
            return <Route key={index} path={'ave-shop/womens/' + link.toLowerCase().split(' ').join('')  } element={<Catalog />}>
                <Route path={':category'} element={<Catalog />} />
            </Route>
        }),...Array.from(new Set(items.map(category => category.values ? Object.keys(category.values) : '').flat().map(l => l.toLowerCase()))).map((link,index) => {
            return <Route key={index} path={'ave-shop/lookbook/' + link.toLowerCase().split(' ').join('')  } element={<Lookbook />}>
                <Route path={':type'} element={<Lookbook />} />
            </Route>
        })]
    },[items])


    return (
        <div className="wrapper">
            <Header />
            <main className={'main'}>
                <Routes>
                    {links}
                    <Route path={'ave-shop/'} element={<Home />} />
                    <Route path={'ave-shop/thebrand'} element={<Brand />} />
                    <Route path={'ave-shop/localstores'} element={<Stores />} />
                    <Route path={'ave-shop/cart'} element={<Cart />} />
                    <Route path={'ave-shop/product'} element={<Product />}>
                        <Route path={':id'} element={<Product />} />
                    </Route>
                    <Route path={'ave-shop/catalog'} element={<SearchCatalog />} />
                    <Route path={'ave-shop/auth'} element={<Auth />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
