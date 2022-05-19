const toggleButton=document.querySelector('#toggleButton');

const header=document.querySelector('.header');

const overlay=document.querySelector('.overlay');

const mmenu=document.querySelector('.header__mmenu');

const noscroll=document.querySelector('body');


toggleButton.addEventListener('click', function(){
    if(header.classList.contains('toggle'))
    {//close hamburger menu
        header.classList.remove('toggle');
        overlay.classList.add('fade-out');
        overlay.classList.remove('fade-in');
        mmenu.classList.add('fade-out');
        mmenu.classList.remove('fade-in');
        noscroll.classList.remove('noscroll');


    }

    else
    {//open hamburger menu
        header.classList.add ('toggle');
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
        
        mmenu.classList.add('fade-in');
        mmenu.classList.remove('fade-out');
        noscroll.classList.add('noscroll');

    }



});


    
