import styles from'./NavBar.module.css'
import {Logo} from "../Logo";

export default function NavBar(){
    return(
       <div className={styles.navbar}>
            <div className={styles.content}>
                <Logo/>
                <div  className={styles.links}>
                    <ul>
                        <li>Услуги</li>
                        <li>Портфолио</li>
                        <li>Этапы</li>
                        <li>Дизайнеры</li>
                    </ul>
                    <button>ЗАКАЗАТЬ</button>
                </div>
            </div>
       </div>
    )
}