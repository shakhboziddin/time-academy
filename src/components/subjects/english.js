import React from 'react'
import './english.css'
import engimg from '../../images/eng2.JPG'



const english = () => {
    return (
        <div>
            <div className='english-header'>
                <div className='english-header-paragraph'>
                    <h1>INGLIZ TILI</h1>
                    <p>Time Academy tezlashtirilgan ingliz tili kurslarini taklif etadi, ular boshlang'ichlardan tortib, har xil darajadagi talabalar uchun mo'ljallangan. Kurslar bir yil davomida o'qitilib, premium o'qitish metodlari va materiallari yordamida o'quvchilar tezroq natijalarga erishadilar. Talabalar IELTS va CEFR testlarida yuqori natijalarga erishishlari mumkin va o'qish davomida Speaking Clubda ingliz tilida muloqot qilish imkoniyatiga ega bo'lishadi.</p>
                    <div className='img-div'>
                        <img src={engimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default english
