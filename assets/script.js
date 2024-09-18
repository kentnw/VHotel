const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

var counter = 1;
        setInterval(function(){
            document.getElementById('radio' +  counter).checked = true;
            counter++;
            if(counter > 4){
                counter = 1;
            }
        }, 5000);



// window.onscroll = function(event){
//     var height = window.pageYOffset
//     if(height > 1500){

//         document.body.style.backgroundColor = '#cdab54cc'
//     } else{
//         document.body.style.backgroundColor = 'white'
//     }
// }
