import React from 'react';



type FeatureProps = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
}


const Feature: React.FC<FeatureProps> = ({id, title, price, imageUrl}) => {


    return (
        <article className="featured__card">
            <span className="featured__tag">Sale</span>

            <img src={imageUrl} alt="featured" className="featured__img"/>

            <div className="featured__data">
                <h3 className="featured__title">{title}</h3>
                <span className="featured__price">{price}</span>
            </div>

            <button className="button featured__button">ADD TO CART</button>
        </article>
    );
};

export default Feature;