import React from 'react'
import './english.css'
import onatilimg from '../../images/onatili.JPG'



const onatili = () => {
    return (
        <div>
            <div className='english-header'>
                <div className='english-header-paragraph'>
                    <h1>ONA TILI VA ADABIYOT</h1>
                    <p>Time Academy tezlashtirilgan ona tili va adabiyot kurslarini taklif etadi, ular har xil darajadagi talabalar uchun mo‘ljallangan. Kurslar bir yil davomida o‘qitilib, zamonaviy metodlar va sifatli o‘quv materiallari yordamida o‘quvchilar tezroq natijalarga erishadilar. Talabalar imlo, uslub va tahlil ko‘nikmalarini rivojlantirib, imtihonlarda yuqori natijalarga erishishlari mumkin. Shuningdek, darslar davomida adabiy muloqot klublarida ishtirok etish imkoniyati ham mavjud.</p>
                    <div className='img-div'>
                        <img src={onatilimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default onatili
