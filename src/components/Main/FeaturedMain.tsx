import React from 'react';
import Feature from "../Block/Feature";
import axios from "axios";

const FeaturedMain: React.FC = () => {
    const [items, setItems] = React.useState([]);
    React.useEffect(() => {

        axios.get(`https://62fb3890abd610251c038025.mockapi.io/featured`)
            .then((response) =>{
                setItems(response.data);
            });
    }, [])



    return (
        <>
            <section className="featured section container" id="featured">
                <h2 className="section__title">
                    Featured
                </h2>

                <div className="featured__container grid">
                    {
                        items.map((item: any) => (<Feature key={item.id}  {...item} />))
                    }
                </div>
            </section>
        </>
    );
};

export default FeaturedMain;