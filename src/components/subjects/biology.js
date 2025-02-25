import React from 'react'
import './english.css'
import engimg from '../../images/eng2.JPG'



const biology = () => {
    return (
        <div>
            <div className='english-header'>
                <div className='english-header-paragraph'>
                    <h1>BIOLOGIYA - KIMYO</h1>
                   <p>Time Academy biologiya va kimyo kurslarini taklif etadi, ular turli darajadagi o‘quvchilar uchun mo‘ljallangan. Kurslar bir yil davomida olib borilib, zamonaviy o‘qitish metodlari va sifatli materiallar yordamida o‘quvchilar fundamental tushunchalarni chuqur o‘rganadilar. Biologiya darslarida tirik organizmlar, ularning tuzilishi va funksiyalari haqida batafsil ma’lumot beriladi, kimyo darslarida esa moddalarning xossalari, reaksiyalar va laboratoriya tajribalari ustida ishlanadi. Kurs davomida nazariy bilimlar amaliy mashg‘ulotlar bilan mustahkamlanib, o‘quvchilar turli imtihonlarda yuqori natijalarga erishish imkoniyatiga ega bo‘ladilar.</p>
                    <div className='img-div'>
                        <img src={engimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default biology
