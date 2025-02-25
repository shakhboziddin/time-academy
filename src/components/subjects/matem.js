import React from 'react'
import './english.css'
import engimg from '../../images/eng2.JPG'



const matem = () => {
    return (
        <div>
            <div className='english-header'>
                <div className='english-header-paragraph'>
                    <h1>ALGEBRA - GEOMETRIYA</h1>
                    <p>Time Academy algebra va geometriya kurslarini taklif etadi, ular turli darajadagi o‘quvchilar uchun mo‘ljallangan. Kurslar bir yil davomida olib borilib, zamonaviy o‘qitish metodlari va sifatli o‘quv materiallari yordamida talabalar nazariy bilimlarini mustahkamlaydilar hamda amaliy masalalarni samarali yechish ko‘nikmalarini rivojlantiradilar. O‘quvchilar matematik mantiq, funksiyalar, tenglamalar, geometriya teoremalari va isbotlarini chuqur o‘rganib, turli imtihonlarda yuqori natijalarga erishishlari mumkin. Kurs davomida interaktiv darslar va maxsus mashg‘ulotlar orqali bilimlar mustahkamlanadi.</p>
                    <div className='img-div'>
                        <img src={engimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default matem
