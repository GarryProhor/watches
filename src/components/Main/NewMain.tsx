import React from 'react';
import axios from "axios";
import Feature from "../Block/Feature";
import New from "../Block/New";

const NewMain: React.FC = () => {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        axios.get(`https://62fb3890abd610251c038025.mockapi.io/new`)
            .then((response) =>{
                setItems(response.data);
            });
    }, [])

    return (
        <>
            <section className="new section container" id="new">
                <h2 className="section__title">
                    New Arrivals
                </h2>

                <div className="new__container">
                    <div className="swiper new-swiper">
                        <div className="swiper-wrapper">

                            {
                                items.map((item: any) => (<New key={item.id}  {...item} />))
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewMain;