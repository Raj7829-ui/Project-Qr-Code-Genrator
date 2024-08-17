const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});

document.addEventListener('DOMContentLoaded',()=>{
    let timer = document.querySelector(".timer");
    let second = document.querySelector('.second');
    let duration = 30;
    let remainingTime=duration;

    function updateTimer(){
    second.textContent=`${remainingTime}s`
    }
    setInterval(()=>{
        if(remainingTime>0){
            remainingTime--;
            updateTimer();
        }
        else{
            remainingTime=duration;
        }
    },1000);
})