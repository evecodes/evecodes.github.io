//--Read more button function--
const readMoreButton = document.querySelectorAll ('.btn-read-more');

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
