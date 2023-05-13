document.querySelectorAll('.services-list__item').forEach(i=>{
    i.addEventListener('click',function(){
       i.querySelector('.ul').classList.toggle('ul__close');
       i.querySelector('.ita').classList.toggle('ita__close');
    })
    })

    /* item.classList.toggle('ul__close')*/