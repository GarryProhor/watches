import React from 'react';
import homePage from "../../../assets/img/home.png";


const HomeMain = () => {
    return (
        <>
            <section className="home" id="home">
                <div className="home__container container grid">
                    <div className="home__img-bg">
                        <img src={homePage} alt="homePage" className="home__img"/>
                    </div>

                    <div className="home__social">
                        <a href="src/components/Main/HomeMain/HomeMain" target="_blank" className="home__social-link">
                            Facebook
                        </a>
                        <a href="src/components/Main/HomeMain/HomeMain" target="_blank" className="home__social-link">
                            Twitter
                        </a>
                        <a href="src/components/Main/HomeMain/HomeMain" target="_blank" className="home__social-link">
                            Instagram
                        </a>
                    </div>

                    <div className="home__data">
                        <h1 className="home__title">NEW WATCH <br/> COLLECTIONS B720</h1>
                        <p className="home__description">
                            Latest arrival of the new imported watches of the B720 series,
                            with a modern and resistant design.
                        </p>
                        <span className="home__price">$1245</span>

                        <div className="home__btns">
                            <a href="src/components/Main/HomeMain/HomeMain#" className="button button--gray button--small">
                                Discover
                            </a>

                            <button className="button home__button">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeMain;