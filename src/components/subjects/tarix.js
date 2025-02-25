import React from 'react'
import './english.css'
import engimg from '../../images/eng2.JPG'



const tarix = () => {
    return (
        <div>
            <div className='english-header'>
                <div className='english-header-paragraph'>
                    <h1>TARIX</h1>
                   <p>**Time Academy** tarix kurslarini taklif etadi, ular turli darajadagi o‘quvchilar uchun mo‘ljallangan. Kurslar bir yil davomida olib borilib, zamonaviy o‘qitish metodlari va sifatli materiallar yordamida o‘quvchilar tarixiy voqealar, jarayonlar va shaxslar haqida chuqur bilimga ega bo‘ladilar. Talabalar mantiqiy tahlil qilish, tarixiy hujjatlar bilan ishlash va faktlarni solishtirish ko‘nikmalarini rivojlantiradilar. Kurs davomida dunyo va O‘zbekiston tarixi bo‘yicha batafsil ma’lumot berilib, turli imtihonlarga tayyorgarlik ko‘rish imkoniyati ham yaratiladi.</p>
                    <div className='img-div'>
                        <img src={engimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default tarix
