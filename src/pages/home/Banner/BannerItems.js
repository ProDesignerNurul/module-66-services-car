import React from 'react';
import './BannerItems.css';

const BannerItems = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt="" className="w-full rounded-xl" />

            </div>

            <div className="absolute flex text-white justify-start transform -translate-y-1/2 left-32 right-5 top-1/4">
                <h1 className='text-6xl	'> Affordable <br /> Price For Car <br /> Servicing </h1>
            </div>
            <div className="absolute flex text-white justify-start transform -translate-y-1/2 left-32 right-5 top-1/2 w-2/5">
                <p className='text-white text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum modi adipisci ipsum a eaque reprehenderit amet similique quaerat ut laudantium.</p>
            </div>
            <div className="absolute flex text-white justify-start transform -translate-y-1/2 left-32 right-5 top-3/4 w-2/5">
                <button className="btn btn-active btn-secondary mr-3">Button</button>
                <button className="btn btn-outline btn-warning">Warning</button>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn mr-5 btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItems;