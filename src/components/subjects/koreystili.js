import React from 'react'
import './english.css'
import engimg from '../../images/eng2.JPG'



const koreystili = () => {
    return (
        <div>
            <div className='english-header'>
                <div className='english-header-paragraph'>
                    <h1>KOREYS TILI</h1>
                    <p>Time Academy koreys tili kurslarini taklif etadi, ular boshlang‘ichdan tortib, turli darajadagi talabalar uchun mo‘ljallangan. Kurslar bir yil davomida olib borilib, zamonaviy o‘qitish metodlari va sifatli materiallar yordamida o‘quvchilar tez va samarali natijalarga erishadilar. Talabalar grammatikani chuqur o‘rganib, so‘zlashuv ko‘nikmalarini rivojlantiradilar hamda TOPIK kabi xalqaro sertifikat imtihonlarida yuqori natijalarga erishish imkoniyatiga ega bo‘ladilar. Darslar davomida amaliy mashg‘ulotlar va suhbat klublari orqali koreys tilida muloqot qilish imkoniyati ham mavjud.
                    </p>
                    <div className='img-div'>
                        <img src={engimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default koreystili
