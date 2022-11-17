import styles from './BurgerBlock.module.css'
import img_11 from '../bcImg/img_11.png'
import {burger} from '../burger'
import BurgerElement from "./BurgerElement";

export default function BurgerBlock() {

    return (
        <div className={styles.burgerblock}>
            <img src={img_11} alt="" className={styles.img_11}/>
            <div className={styles.body}>
                <div className={styles.list}>
                    <h1>Что входит в услугу по созданию дизайна интернет-магазина?</h1>
                    {burger.map(el=> <BurgerElement el={el} key={el.name}/>)}
                </div>
            </div>
        </div>
    )
}