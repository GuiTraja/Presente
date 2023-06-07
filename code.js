window.sr = ScrollReveal({reset:true});

var slidedown = {
    distance: '100%',
    origin: 'top',
    opacity: 0
};

var slideLF = {
    distance: '100%',
    origin: 'left',
    opacity: 0
};

var slideR = {
    distance: '100%',
    origin: 'right',
    opacity: 0
};

var slideup = {
    distance: '100%',
    origin: 'bottom',
    opacity: 0
};


sr.reveal('.cima', slidedown);

sr.reveal('.left', slideLF);

sr.reveal('.right', slideR);

sr.reveal('.down', slideup);



const accocrdion = document.getElementsByClassName('content-container')
for ( i = 0; i < accocrdion.length; i++) {
    accocrdion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })

};