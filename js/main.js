$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    })

    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobilenav = document.querySelector('.mobile-nav');


    hamberger.addEventListener('click',function(){
        mobilenav.classList.add('open');
    })

    times.addEventListener('click',function(){
        mobilenav.classList.remove('open');
    })
    home.addEventListener('click',function(){
        mobilenav.classList.remove('open');
    })
    about.addEventListener('click',function(){
        mobilenav.classList.remove('open');
    })
    services.addEventListener('click',function(){
        mobilenav.classList.remove('open');
    })
    freelancer.addEventListener('click',function(){
        mobilenav.classList.remove('open');
    })
    reviews.addEventListener('click',function(){
        mobilenav.classList.remove('open');
    })
    work.addEventListener('click',function(){
        mobilenav.classList.remove('open');
    })
    blog.addEventListener('click',function(){
        mobilenav.classList.remove('open');
    })
    contact.addEventListener('click',function(){
        mobilenav.classList.remove('open');
    })
    footer.addEventListener('click',function(){
        mobilenav.classList.remove('open');
    })
    
})

