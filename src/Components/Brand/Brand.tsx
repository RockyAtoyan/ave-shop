import {Intro} from "../Intro";


export const Brand = () => {
    return <section className={'brand'}>
        <div className="brand_inner">
            <Intro title={'the brand'} subtitle={'company slogan goes here'} />
            <div className="menu_container">
                <div className="brand_main">
                    <div className="brand_main__cols">
                        <div className="brand_main__col">
                            <div className="brand_main__item">
                                <img src="../../assets/images/brand/brand_03.png" alt=""/>
                            </div>
                            <div className="brand_main__item">
                                <img src="../../assets/images/brand/brand_09.png" alt=""/>
                                <div className="brand_main__item__content">
                                    <h2>our values, vision and strategy</h2>
                                    <h3>The above image would be a great place for an advertising video</h3>
                                    <h4>Cras maximus venenatis malesuada. Nulla sagittis elit felis, ac facilisis quam ornare aliquam. Etiam cursus odio vitae dui dignissim, sed tempus lacus tincidunt et donec sapien velit, rhoncus eu nulla a, molestie tempus mi maecenas sagittis ornare.
                                        Pellentesque sapien mi, tincidunt nec magna vitae, volutpat elementum odioni lorem Aliquam tempor massa vitae augue mattis tempor id in ante ut augue erat, luctus eil.</h4>
                                </div>
                            </div>
                        </div>
                        <div className="brand_main__col">
                            <div className="brand_main__item">
                                <img src="" alt=""/>
                                <div className="brand_main__item__content">
                                    <h2>hand designed clothing</h2>
                                    <h3>established in 2013, avenue fashion Sed dictum elit vel sapien luctus eras</h3>
                                    <h4>Praesent feugiat malesuada tristique maecenas rhoncus diam eget quam vestibulim consectetur, id condimentum leo porttitor. Cum sociis natoque penatibus eta magnis disut parturient montes, nascetur ridiculus mus. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.
                                    </h4>
                                </div>
                            </div>
                            <div className="brand_main__item">
                                <img src="../../assets/images/brand/brand_06.png" alt=""/>
                                <div className="brand_main__item__content">
                                    <h2>Ethical trading</h2>
                                    <h3>we oversee the working conditions of the people in the supply chain</h3>
                                    <h4>Nullam dapibus consectetur neque, faucibus porttitor purus iaculis sed. Aenean eras dapibus augue, eget dignissim dui maecenas et rhoncus mim, vel semper arcu lorem
                                        Pellentesque congue justo esteir pellentesque aliquet massa eget posuere tincidunt. Cras viverra ullamcorper nunc accumsan hendrerit. A link </h4>
                                </div>
                            </div>
                            <div className="brand_main__item">
                                <img src="../../assets/images/brand/brand_10.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}