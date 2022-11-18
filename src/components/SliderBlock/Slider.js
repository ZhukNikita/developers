import styles from './SliderBlock.module.css'
import {useState} from "react";
import img from './sliderImg/img.png'
import img1 from './sliderImg/img_1.png'
import img2 from './sliderImg/img_2.png'
import img3 from './sliderImg/img_3.png'
import img4 from './sliderImg/img_4.png'
import React from "react";
import Slide from "./Slide";


export default function Slider(){
    const [imgIndex, setImgIndex] = useState(0)
    const slides = [
        {
            title: '1. Анализ',
            text: 'Для того, чтобы онлайн-магазин приносил выгоду,' +
                ' перед его запуском необходимо провести анализ других предложений рынка,' +
                ' оценить конкурентов и найти наиболее удобное решение. ',
            img: img,
            size:{
                width: '250px',
                height: '250px'
            }
        },
        {
            title: '2. Визуальное решение',
            text: 'Разработка дизайна ключевых страниц магазина – главная, каталог, информационные разделы, раздел корзины, товаров.' +
                ' Для нас главное – передать настроение бренда, сделать удобный для пользователя сайт. ',
            img: img1,
            size:{
                width: '227px',
                height: '222px'
            }
        },
        {
            title: '3. Техническая реализация',
            text: 'После утверждения дизайн-макета наступает следующий этап – верстка. Это трудоемкий процесс: программисты должны все тщательно прописать, чтобы не допустить технических ошибок.'+
                'После утверждения дизайн-макета наступает следующий этап – верстка. Это трудоемкий процесс: программисты должны все тщательно прописать, чтобы не допустить технических ошибок.',
            img: img2,
            size:{
                width: '250px',
                height: '253px'
            }
        },
        {
            title: '4. Наполнение контентом ',
            text: 'Создание и публикация текстов, а также видео материала. Хороший контент и качественные фотографии привлекают больше посетителей и помогают клиенту лучше ознакомиться с ассортиментом. ',
            img: img3,
            size:{
                width: '250px',
                height: '205px'
            }
        },
        {
            title: '5. Тестирование ',
            text: 'Составление плана тестирования для определения ошибок. Проверка работы сайта и визуального восприятия для улучшения сайта. Также используются чек-листы для четкого определения ошибок и их устранения.',
            img: img4,
            size:{
                width: '277px',
                height: '287px'
            }
        },
    ]
    function toNextImg(){
        const isLastSlide = imgIndex === slides.length - 1
        if(isLastSlide) return setImgIndex(0)
        else setImgIndex(imgIndex+1)
    }
    function toPrevImg(){
        const isFirstSlide = imgIndex === 0;
        if(isFirstSlide) return setImgIndex(slides.length - 1)
        else setImgIndex(imgIndex - 1)
    }
    return(
        <div className={styles.slider}>
            <div className={styles.sliderBody}>
                <Slide img={slides[imgIndex].img} size={slides[imgIndex].size}/>
                {slides[imgIndex+1]?.img
                    ? <Slide img={slides[imgIndex+1]?.img} size={slides[imgIndex+1].size}/>
                    : <Slide img={slides[0].img}  size={slides[0].size}/>
                }
            </div>
            {
                slides.length > 1 ?
                    <div className={styles.buttons}>
                        <div className={styles.SliderButton} onClick={toPrevImg}>
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.25 1.06857L1.625 6.6876L7.25 12.3066" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className={styles.SliderButton} onClick={toNextImg}>
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.75 1.06857L6.375 6.6876L0.75 12.3066" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div> : ''
            }
        </div>
    )
}