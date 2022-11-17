import styles from './InfoBlock.module.css'
import img from '../bcImg/img.png'
import img_1 from '../bcImg/img_1.png'
import img_2 from '../bcImg/img_2.png'
import img_3 from '../bcImg/img_3.png'
import img_4 from '../bcImg/img_4.png'
import img_5 from '../bcImg/img_5.png'
import img_6 from '../bcImg/img_6.png'
import img_7 from '../bcImg/img_7.png'
import img_8 from '../bcImg/img_8.png'
import img_9 from '../bcImg/img_9.png'
import img_10 from '../bcImg/img_10.png'


export default function InfoBlock(){
    return(
        <div className={styles.infoblock}>
            <img src={img} alt="" className={styles.img}/>
            <img src={img_1} alt="" className={styles.img_1}/>
            <img src={img_2} alt="" className={styles.img_2}/>
            <img src={img_3} alt="" className={styles.img_3}/>
            <img src={img_4} alt="" className={styles.img_4}/>
            <img src={img_5} alt="" className={styles.img_5}/>
            <img src={img_6} alt="" className={styles.img_6}/>
            <img src={img_7} alt="" className={styles.img_7}/>
            <img src={img_8} alt="" className={styles.img_8}/>
            <img src={img_9} alt="" className={styles.img_9}/>
            <img src={img_10} alt="" className={styles.img_10}/>
            <div className={styles.body}>
                <div className={styles.text}>
                    <h1>Разработка интернет-магазина
                        с нуля за неделю
                    </h1>
                    <p>
                        Дизайн интернет магазина, элементов микро UX,<br/>
                        корзин, личного кабинета - от фирменного стиля <br/>
                        до пользовательского интерфейса в сжатые сроки <br/>
                        с командой Virtual Designers
                    </p>
                    <button>ЗАКАЗАТЬ</button>
                </div>
            </div>
        </div>
    )
}