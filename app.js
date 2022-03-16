const switchPrice=document.querySelector("#switch");
const annualPrice=document.querySelectorAll(".pricing-cart__price--anually");
const monthlyPrice=document.querySelectorAll(".pricing-cart__price--monthly");

switchPrice.addEventListener("change",()=>{
    if(switchPrice.checked){
        annualPrice.forEach(price=>{
            price.style.display="flex";
        })
        monthlyPrice.forEach(price=>{
            price.style.display="none"
        })
    }else{
        annualPrice.forEach(price=>{
            price.style.display="none";
        })
        monthlyPrice.forEach(price=>{
            price.style.display="flex"
        })
    }
})