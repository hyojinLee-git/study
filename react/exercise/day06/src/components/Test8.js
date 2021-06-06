import React, { useState } from 'react';
//src 안의 이미지 처리는
import image1 from '../utils/images/img1.jpg';
import image2 from '../utils/images/img2.jpg';
//public 안의 이미지는 import 따로 안해도 가능

import image from '../utils/api/image';


const Test8 = () => {
    const [img,setImg]=useState(image);
    return (
        <div>
            <p>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
            </p>
            <p>
                <img src="./images/m0.jpg" alt=""/>
                <img src="./images/m1.jpg" alt=""/>
            </p>
            <p>
                <img src={img[2].img} alt=""/>
                <img src={img[1].img} alt=""/>
            </p>
        </div>
    );
};

export default Test8;