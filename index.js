const option = document.getElementById("zodiac")
const btn = document.getElementsByTagName("button")[0]

const changeBackground = ()=>{

    switch(option.value){
        case "aries":
            document.body.style.backgroundColor = "#F9E8D9"
            break
        case "tarus":
            document.body.style.backgroundColor = "#EE7214"
            break
        case "gemini":
            document.body.style.backgroundColor = "#D0F288"
            break
        case "cancer":
            document.body.style.backgroundColor = "#8ADAB2"
            break
        case "leo":
            document.body.style.backgroundColor = "#5FBDFF"
            break
        case "leo":
            document.body.style.backgroundColor = "#C683D7"
            break
        case "virgo":
            document.body.style.backgroundColor = "#89B9AD"
            break
        case "libra":
            document.body.style.backgroundColor = "#83A2FF"
            break
        case "scorpio":
            document.body.style.backgroundColor = "#F3B664"
            break
        case "sagittarius":
            document.body.style.backgroundColor = "#C3ACD0"
            break
        case "aquarius":
            document.body.style.backgroundColor = "#B15EFF"
            break
        case "capricon":
            document.body.style.backgroundColor = "#F875AA"
            break
        case "pisces":
            document.body.style.backgroundColor = "#80B3FF"
            break
        default:
            document.body.style.backgroundColor = "#fff"
            break
        
        
        
        
    }
}

btn.onclick = changeBackground

