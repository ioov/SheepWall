import React, { useState, useEffect } from 'react';
import { Image } from 'antd';
import '@/style/reception/PhotoWall.scss'
const Img = () => {
    let list = []
    for (let i = 0; i < 108; i++) {
        let nStr = 'SK' + i.toString().padStart(4, '0') + '.jpg';
        list.push(nStr)
    }
    function getImageUrl(name) {
        return new URL(`/src/assets/photo/${name}`, import.meta.url).href
    }

    const listItems = list.map((item, index) =>
        <Image key={index}
            alt="SHEEP"
            src={getImageUrl(item)}
        />

    )

    return (
        <>
            <Image.PreviewGroup
                preview={{
                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}
            >
                {listItems}
            </Image.PreviewGroup>
        </>
    );
};
const Portrait = () => {
    return (
        <section className='photowall'>
            <Img />
        </section>
           
    )
}
export default Portrait;