import styles from './BurgerBlock.module.css'
import {useState} from "react";

export default function BurgerElement({el}) {
    const [isOpen , setIsOpen] = useState(false)



    return(
        <div className={styles.element}>
            <div className={styles.closeElement}>
                <div>
                    {
                        !isOpen?
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#75E169"/>
                            </svg>
                            :
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#67AEFC"/>
                            </svg>

                    }
                    <p style={isOpen?{fontWeight:700, fontSize:'21px'}:{}}>{el.name}</p>
                </div>
                <div style={{margin:'0 42px 0 20px'}} onClick={()=>setIsOpen(!isOpen)}>
                    {
                        !isOpen?
                            <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.3362 13.2888C12.4233 13.3761 12.5267 13.4454 12.6406 13.4926C12.7545 13.5399 12.8766 13.5642 12.9999 13.5642C13.1232 13.5642 13.2453 13.5399 13.3592 13.4926C13.4731 13.4454 13.5766 13.3761 13.6637 13.2888L24.9137 2.03878C25.0897 1.86275 25.1886 1.62399 25.1886 1.37503C25.1886 1.12608 25.0897 0.887321 24.9137 0.711284C24.7376 0.535246 24.4989 0.43635 24.2499 0.43635C24.001 0.43635 23.7622 0.535246 23.5862 0.711284L12.9999 11.2994L2.41368 0.711284C2.23765 0.535246 1.99889 0.43635 1.74993 0.43635C1.50098 0.43635 1.26222 0.535246 1.08618 0.711284C0.910146 0.887321 0.811249 1.12608 0.811249 1.37503C0.811249 1.62399 0.910146 1.86275 1.08618 2.03878L12.3362 13.2888Z" fill="black"/>
                            </svg>
                            : <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.3362 0.71146C12.4233 0.624154 12.5268 0.554886 12.6406 0.507624C12.7545 0.460362 12.8766 0.436035 13 0.436035C13.1233 0.436035 13.2454 0.460362 13.3593 0.507624C13.4732 0.554886 13.5766 0.624154 13.6637 0.71146L24.9137 11.9615C25.0897 12.1375 25.1886 12.3763 25.1886 12.6252C25.1886 12.8742 25.0897 13.1129 24.9137 13.289C24.7377 13.465 24.4989 13.5639 24.25 13.5639C24.001 13.5639 23.7622 13.465 23.5862 13.289L13 2.70084L2.41371 13.289C2.23768 13.465 1.99892 13.5639 1.74996 13.5639C1.50101 13.5639 1.26225 13.465 1.08621 13.289C0.910176 13.1129 0.811279 12.8742 0.811279 12.6252C0.811279 12.3763 0.910176 12.1375 1.08621 11.9615L12.3362 0.71146Z" fill="black"/>
                            </svg>
                    }
                </div>
            </div>

            {isOpen &&(
                <div className={styles.openElement}>
                    <div className={styles.vl}></div>
                    <p>
                        {el.fullText}
                    </p>
                </div>
            )}
        </div>
    )
}