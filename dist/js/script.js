var slider = tns({
    container: '.work__my-slider',
    items: 3,
    slideBy: 1,
    autoplay: false,
    controlsPosition: 'bottom',
    navPosition: 'bottom',
    navAsThumbnails: true,
    controlsText: [
        '<img src="../icons/LLeft.png">',
        '<img src="../icons/RRight.png">'
    ]
    
  });

/* var slider = tns({
    container: '.main__my-slider',
    items: 1,
    slideBy: 1, 
    autoplay: false,
    controlsPosition: 'bottom',
    navAsThumbnails: true, 
    
  }); */


const buttons = document.querySelectorAll('.news__items-btn')
const modalWindow = document.querySelector('.news__list')
const close = document.querySelector('.news__list-arrow')

let closeModalListener;

buttons.forEach((el) => {
    el.addEventListener('click', () =>{
        modalWindow.style.display = 'block'
        modalWindow.focus()
        document.body.style.overflow = 'hidden'
        closeModalListener = document.addEventListener('click', (event) => {
            if(modalWindow.style.display === 'block' && (event.target.matches(".news__list-arrow") ||
            !event.target.closest(".news__list"))){
                modalWindow.style.display='none' 
            }
        
        })
    })
 

})

if(modalWindow.style.display === 'block') {
    document.addEventListener('click', () => {
        modalWindow.focus()
    })
}



const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

