// When the user scrolls the page, execute stickyScrollNav 
window.onscroll = function() {stickyScrollNav()};

let productNav = document.querySelector("#product-nav-id");
let sticky = productNav.offsetTop;

function stickyScrollNav() {
    if (window.pageYOffset > sticky) {
        productNav.classList.add("sticky");
    } else {
        productNav.classList.remove("sticky");
        
    }
}
