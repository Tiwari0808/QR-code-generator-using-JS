// console.log('hello');

const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ankit';
const apiKey = 'AwFFCKeyXE+vxASiGx9ssQ==NZJngENv5QEOVZsu'

const generateBtn = document.querySelector('.container button');
const inputBox = document.querySelector('.container input');
const qrDiv = document.querySelector('.qr-code');
const qrImg = document.querySelector(".qr-code img");


const getQR = async ()=>{

    if(inputBox.value > '0'){
        qrImg.src = url + `${inputBox.value}`;
        qrDiv.classList.add('.show-img')
    }else{
        qrImg.src = "";
    }

}

getQR();

generateBtn.addEventListener('click',getQR);




