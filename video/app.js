
// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const preloader = document.querySelector('.preloader');
const body = document.querySelector('body');
window.addEventListener("load", () => {
body.removeChild(preloader);
});


const playandPause = () => {
   
        const btn = document.querySelector('button');
        const vid = document.querySelector('video');
        
        btn.addEventListener("click", () => {
            btn.classList.toggle('slide');
        
            if(!btn.classList.contains('slide')){
                vid.play();
            }
            else{
                vid.pause();
            }
        
        });
    }

        document.addEventListener("DOMContentLoaded", () => {
            playandPause();
        });
        
        
    
