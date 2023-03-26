
let button = document.querySelector("#btn")
let text = document.querySelector("h1")
let resetButton = document.querySelector(".reset-btn")
button.addEventListener("click",()=>{
    text.innerText="10"
    setTimeout(()=>{
        text.innerText="9"
        setTimeout(()=>{
            text.innerText="8"
            setTimeout(()=>{
                text.innerText="7"
                setTimeout(()=>{
                    text.innerText="6"
                    setTimeout(()=>{
                        text.innerText="5"
                        setTimeout(()=>{
                            text.innerText="4"
                            setTimeout(()=>{
                                text.innerText="3"
                                setTimeout(()=>{
                                    text.innerText="2"
                                    setTimeout(()=>{
                                        text.innerText="1"
                                        setTimeout(()=>{
                                            text.innerText="Happy Independence Day🎉"
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
})

resetButton.addEventListener("click",()=>{
    text.innerText=""
})
