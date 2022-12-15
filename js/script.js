const nav = document.querySelector("nav")
const toTop = document.getElementById('toTop');
        

window.addEventListener('scroll', function() {
    if(window.pageYOffset > 200) {
        toTop.style.display = "block";
        nav.style.height = "80px";
        
    } else {
        toTop.style.display = "none";
        nav.style.height = "";
    }
});

toTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

        