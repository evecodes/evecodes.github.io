//--Read more button function--
const readMoreButton = document.querySelectorAll (".btn-read-more");

if (readMoreButton) {
    readMoreButton.forEach(entry => {
            entry.addEventListener ('click', e => {            
                if (entry.textContent === "Lees meer...") {
                    entry.textContent = "Lees minder"
                } else entry.textContent = "Lees meer...";
                const readMoreText = entry.closest('.article-box').querySelector('.readmore-text');
                const readMoreDots = entry.closest('.article-box').querySelector('.readmore-dots');
                readMoreText.classList.toggle ('readmore-text-hide');
                readMoreDots.classList.toggle ('readmore-dots-hide');                           
        });
    });    
}

//Modal message for mobile users
const modalMobile = document.querySelector(".modal-background");
const mqModalMobile = window.matchMedia("(min-width: 985px)");

if (modalMobile) {
    function desktopChange(mediaQueryDesktop) {
        if (mediaQueryDesktop.matches) {        
            modalMobile.setAttribute('data-modal-active', 'off');        
        } else {              
            modalMobile.setAttribute('data-modal-active', 'on'); 
        }
    }

    desktopChange(mqModalMobile);
    mqModalMobile.addEventListener('change', desktopChange);
    

    const modalButton = document.querySelector(".modal-button");

    modalButton.addEventListener('click', e=> {
        modalMobile.setAttribute('data-modal-active', 'off');
    })
}
