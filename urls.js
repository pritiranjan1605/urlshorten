let kj = document.querySelector(".bigcont .container45 .pannel1 input");
let generatebtn = document.getElementById("genb");
let mern = document.getElementById("outtxt");
let copybtn = document.getElementById("cpy");
generatebtn.addEventListener("click" , ()=>{
    fetch(`https://api.shrtco.de/v2/shorten?url=${kj.value}/very/long/link.html`).then((response)=>response.json()).then((value2)=>{
        mern.value=value2.result.short_link
    })
});
copybtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(mern.value)
    setTimeout(()=>{
        copybtn.innerHTML="copied"
    },1000)
})


