import styles from './Slide.module.css'
import img from "./sliderImg/img.png";
import React from "react";

export default function Slide({img , size}){
    return(
        <div className={styles.slide}>
            <img src={img} alt="ProductPhoto" height={`${size.height}`} width={`${size.width}`}/>

        </div>
    )
}