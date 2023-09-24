color1=document.getElementById("color1")
color2=document.getElementById("color2")
body=document.getElementById("body")
// console.log(color1)
// console.log(color2)


// color1.style.background={

// }
color1.innertext="color1"

function change() {
    body.style.background =
        `linear-gradient(to right,${color1.value},${color2.value})`

}