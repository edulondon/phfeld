import React, { useState } from 'react'
import './galleryStyle.css'
import CloseIcon from '@material-ui/icons/Close';
import Img1 from '../../assets/img1.jpeg';
import Img2 from '../../assets/img2.jpeg';
import Img3 from '../../assets/img3.jpeg';
import Img4 from '../../assets/img4.jpeg';
import Img5 from '../../assets/img5.jpeg';
import Img6 from '../../assets/img6.jpeg';
import Img7 from '../../assets/img7.jpeg';
import Img8 from '../../assets/img8.jpeg';
import Img9 from '../../assets/img9.jpeg';
import Img10 from '../../assets/img10.jpeg';

const GalleryScreen = () => {
    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
    ];
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} />
                <CloseIcon onClick={() =>setModel(false)}/>
            </div>  
            <div className="gallery">
                {data.map((item, idex) => {
                    return (
                        <div className="pics" onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{ width: '100%' }} />
                        </div>
                    )
                })}
            </div>
        </>

    )
}

export default GalleryScreen
