import React from 'react';
import { Data } from './Data';

export default function Hero_gsap() {

    return (

        <>
            {
                Data.map((obj) => (
                    <img src={obj.img} alt="test" key={obj.id} id='hero-card'
                    />
                ))
            }
        </>
    );
}

