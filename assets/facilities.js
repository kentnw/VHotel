var scroll = document.getElementById('details')
// console.log(scroll)
var height = scroll.scrollHeight;
var elemen = document.getElementsByClassName('category-menu')

elemen[0].addEventListener('click',() => {
    scroll.scrollTo(0, 0*scroll.scrollHeight)
})

elemen[1].addEventListener('click',() => {
    scroll.scrollTo(0, 0.23*scroll.scrollHeight)
})

elemen[2].addEventListener('click',() => {
    scroll.scrollTo(0, 0.45*scroll.scrollHeight)
})

elemen[3].addEventListener('click',() => {
    scroll.scrollTo(0, 0.68*scroll.scrollHeight)
})

elemen[4].addEventListener('click',() => {
    scroll.scrollTo(0, scroll.scrollHeight)
})

scroll.addEventListener("scroll", () =>{
    var now = scroll.scrollTop
    if(now < height * 0.2){
        elemen[0].classList.add('active-about')
    } else{
        elemen[0].classList.remove('active-about')
    }
    
    if(now >= height * 0.2 && now < height * 0.4){
        elemen[1].classList.add('active-about')
    } else{
        elemen[1].classList.remove('active-about')
    }

    if(now >= height * 0.4 && now < height * 0.6){
        elemen[2].classList.add('active-about')
    } else{
        elemen[2].classList.remove('active-about')
    }

    if(now >= height * 0.6 && now < height * 0.8){
        elemen[3].classList.add('active-about')
    } else{
        elemen[3].classList.remove('active-about')
    }

    if(now >= height * 0.8){
        elemen[4].classList.add('active-about')
    } else{
        elemen[4].classList.remove('active-about')
    }
    
    
})