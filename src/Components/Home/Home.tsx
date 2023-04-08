import {HomeProducts} from "./HomeProducts";
import {Team} from "./Team";


export const Home = () => {

    return <section className={'home'}>
        <div className="home_inner">
            <section className="intro_inner">
                <div className="container">
                    <div className="intro" >
                        <img src="../../assets/images/home/intro.png"  alt="" className="intro_img"/>
                        <div className="intro_title">
                            <h2>
                            <span>
                                a
                            </span>
                                <span>
                                v
                            </span>
                                <span>
                                e
                            </span>
                            </h2>
                        </div>
                        <button className="intro_btn">
                            shop men’s collection
                        </button>
                    </div>
                </div>
            </section>
            <div className="container">
                <HomeProducts />
            </div>
            <Team />
        </div>
    </section>
}