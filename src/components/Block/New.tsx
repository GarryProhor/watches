import React from 'react';

type NewProps = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
}

const New: React.FC<NewProps> = ({id, title, price, imageUrl}) => {
    return (
        <article className="new__card swiper-slide">
            <span className="new__tag">New</span>

            <img src={imageUrl} alt="new" className="new__img"/>

            <div className="new__data">
                <h3 className="new__title">{title}</h3>
                <span className="new__price">{price}</span>
            </div>

            <button className="button new__button">ADD TO CART</button>
        </article>
    );
};

export default New;