import styles from './SliderBlock.module.css'
import img_12 from '../bcImg/img_12.png'
import img_13 from '../bcImg/img_13.png'
import Slider from "./Slider";

export default function SliderBlock(){
    return(
        <div className={styles.sliderBlock}>
            <img src={img_12} alt="" className={styles.img_12}/>
            <img src={img_13} alt="" className={styles.img_13}/>
            <div className={styles.body}>
                <h1>Этапы разработки интернет-магазина</h1>
            </div>
            <Slider/>
        </div>
    )
}