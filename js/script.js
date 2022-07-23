var menu = document.getElementById('menu')
var btnMenu = document.getElementById('btnMenu')
btnMenu.onclick = (e)=>{
    console.log('ok')
    menu.classList.contains('d-none') ? menu.classList.remove('d-none') : menu.classList.add('d-none')
}

var divsScroll = document.querySelectorAll('.scroll')
var textScroll = document.querySelectorAll('.textScroll')
setInterval(()=>{
    for(let i=0;i< divsScroll.length;i++){
        divsScroll[i].onclick = ()=>{
            textScroll[i].classList.contains('d-none') ? textScroll[i].classList.remove('d-none') : textScroll[i].classList.add('d-none')
        }
    }
},100)